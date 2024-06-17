import * as cdk from 'aws-cdk-lib';
import * as gateway from 'aws-cdk-lib/aws-apigateway';

import { Lambdas } from '../@types/lambdas';
import { env } from '../config/dotenv';
import { TestApiGateway } from '../lib/gateway/testApi/index';
import { RefreshTokenLambda } from '../lib/lambdas/auth/refreshToken/lambda';
import { RequestCodeLambda } from '../lib/lambdas/auth/requestCode/lambda';
import { SignInLambda } from '../lib/lambdas/auth/signIn/lambda';
import { SignUpLambda } from '../lib/lambdas/auth/signUp/lambda';
import { VerifyCodeLambda } from '../lib/lambdas/auth/verifyCode/lambda';
import { CreatePropertyLambda } from '../lib/lambdas/property/createProperty/lambda';
import { DeletePropertyLambda } from '../lib/lambdas/property/deleteProperty/lambda';
import { GetPropertyLambda } from '../lib/lambdas/property/getProperty/lambda';
import { ListPropertiesLambda } from '../lib/lambdas/property/listProperties/lambda';
import { GetUserLambda } from '../lib/lambdas/user/getUser/lambda';
import { addCorsPreflight } from '../utils/api/addCors';

export class NodeTemplateStack extends cdk.Stack {
  constructor(scope: cdk.App, props?: cdk.StackProps) {
    super(scope, 'AccordousApiStack', props);

    const lambdaProps: Lambdas.LambdasProps = {
      MONGODB: env.MONGODB,
      SECRET_KEY: env.SECRET_KEY,
      TOKEN_KEY: env.TOKEN_KEY,
    };

    // Lambdas
    const refreshToken = new RefreshTokenLambda(this, lambdaProps);
    const signIn = new SignInLambda(this, lambdaProps);
    const signUp = new SignUpLambda(this, lambdaProps);
    const requestCode = new RequestCodeLambda(this, lambdaProps);
    const verifyCode = new VerifyCodeLambda(this, lambdaProps);
    const getUser = new GetUserLambda(this, lambdaProps);
    const getProperty = new GetPropertyLambda(this, lambdaProps);
    const createProperty = new CreatePropertyLambda(this, lambdaProps);
    const deleteProperty = new DeletePropertyLambda(this, lambdaProps);
    const listProperties = new ListPropertiesLambda(this, lambdaProps);

    // API Gateway
    const testApi = new TestApiGateway(this);

    // ...auth/
    const authApi = testApi.root.addResource('auth');
    authApi.addMethod('POST', new gateway.LambdaIntegration(refreshToken));

    // ...auth/signin
    const authSignInApi = authApi.addResource('signin');
    authSignInApi.addMethod('POST', new gateway.LambdaIntegration(signIn));

    // ...auth/signup
    const authSignUpApi = authApi.addResource('signup');
    authSignUpApi.addMethod('POST', new gateway.LambdaIntegration(signUp));

    // ...auth/refreshtoken
    const authRefreshTokenApi = authApi.addResource('refreshtoken');
    authRefreshTokenApi.addMethod('GET', new gateway.LambdaIntegration(refreshToken));

    // ...auth/requestcode
    const authRequestCodeApi = authApi.addResource('requestcode');
    authRequestCodeApi.addMethod('POST', new gateway.LambdaIntegration(requestCode));

    // ...auth/verifycode
    const authVerifyCodeApi = authApi.addResource('verifycode');
    authVerifyCodeApi.addMethod('POST', new gateway.LambdaIntegration(verifyCode));

    // ...users/
    const userApi = testApi.root.addResource('user');
    userApi.addMethod('GET', new gateway.LambdaIntegration(getUser));

    // ...property/
    const propertyApi = testApi.root.addResource('property');
    propertyApi.addMethod('GET', new gateway.LambdaIntegration(getProperty));
    propertyApi.addMethod('POST', new gateway.LambdaIntegration(createProperty));

    // ...property/:id
    const propertyIdApi = propertyApi.addResource(':id');
    propertyIdApi.addMethod('DELETE', new gateway.LambdaIntegration(deleteProperty));

    // ...property/list
    const propertyListApi = propertyApi.addResource('list');
    propertyListApi.addMethod('GET', new gateway.LambdaIntegration(listProperties));

    // CORS Preflight
    addCorsPreflight(authSignInApi);
    addCorsPreflight(authSignUpApi);
    addCorsPreflight(authRequestCodeApi);
    addCorsPreflight(authVerifyCodeApi);
    addCorsPreflight(authRefreshTokenApi);
    addCorsPreflight(userApi);
    addCorsPreflight(propertyApi);
    addCorsPreflight(propertyIdApi);
    addCorsPreflight(propertyListApi);
  }
}
