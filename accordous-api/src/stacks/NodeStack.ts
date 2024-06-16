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
import { SavePaymentLambda } from '../lib/lambdas/payment/savePayment/lambda';
import { GetUserLambda } from '../lib/lambdas/user/getUser/lambda';
import { addCorsPreflight } from '../utils/api/addCors';

export class NodeTemplateStack extends cdk.Stack {
  constructor(scope: cdk.App, props?: cdk.StackProps) {
    super(scope, 'AcadenutriStack', props);

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
    const savePayment = new SavePaymentLambda(this, lambdaProps);

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

    // ...payment/
    const paymentApi = testApi.root.addResource('payment');
    paymentApi.addMethod('POST', new gateway.LambdaIntegration(savePayment));

    // CORS Preflight
    addCorsPreflight(authSignInApi);
    addCorsPreflight(authSignUpApi);
    addCorsPreflight(authRequestCodeApi);
    addCorsPreflight(authVerifyCodeApi);
    addCorsPreflight(authRefreshTokenApi);
    addCorsPreflight(userApi);
    addCorsPreflight(paymentApi);
  }
}
