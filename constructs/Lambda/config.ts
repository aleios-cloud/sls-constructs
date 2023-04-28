import { Duration } from 'aws-cdk-lib';
import { Architecture, Runtime, Tracing } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunctionProps } from 'aws-cdk-lib/aws-lambda-nodejs';

import { AllowedLambdaConfig } from './types';

export const allowedConfig: AllowedLambdaConfig = {
  runtime: [Runtime.NODEJS_18_X],
  architecture: Object.values(Architecture) as Architecture[],
  tracing: Object.values(Tracing) as Tracing[],
  retryAttempts: [0, 1, 2],
};

export const requiredConfig: Partial<NodejsFunctionProps> = {
  functionName: 'SomeLambdaName',
  entry: 'some/entry/file.ts',
};

export const defaultConfig: NodejsFunctionProps = {
  runtime: Runtime.NODEJS_18_X,
  architecture: Architecture.ARM_64,
  tracing: Tracing.ACTIVE,
  memorySize: 1024,
  timeout: Duration.seconds(20),
  retryAttempts: 2,
  deadLetterQueueEnabled: true,
};
