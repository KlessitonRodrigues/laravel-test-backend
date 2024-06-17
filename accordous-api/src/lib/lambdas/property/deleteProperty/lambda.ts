import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as nodeLambda from 'aws-cdk-lib/aws-lambda-nodejs';

import { Lambdas } from '../../../../@types/lambdas';

export class DeletePropertyLambda extends nodeLambda.NodejsFunction {
  constructor(scope: cdk.Stack, props: Lambdas.LambdasProps) {
    if (!props?.MONGODB) throw new Error('Missing mongo uri');
    if (!props?.TOKEN_KEY) throw new Error('Missing token key');

    const params: nodeLambda.NodejsFunctionProps = {
      runtime: lambda.Runtime.NODEJS_18_X,
      timeout: cdk.Duration.seconds(30),
      handler: 'handler',
      entry: __dirname + '/index.ts',
      environment: {
        MONGODB: props.MONGODB,
        TOKEN_KEY: props.TOKEN_KEY,
      },
      logRetention: cdk.aws_logs.RetentionDays.THREE_DAYS,
    };

    super(scope, 'DeletePropertyLambda', params);
  }
}
