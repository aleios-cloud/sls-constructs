import { NodejsFunctionProps } from 'aws-cdk-lib/aws-lambda-nodejs';

import { allowedConfig } from './config';

export interface RestrictedLambdaConfig {
  retryAttempts: typeof allowedConfig.retryAttempts[number];
  tracing: typeof allowedConfig.tracing[number];
  runtime: typeof allowedConfig.runtime[number]; //currently this doesnt restrict the runtime to nodejs
  architecture: typeof allowedConfig.architecture[number]; //currently this doesnt restrict the architecture
}

export interface RequiredLambdaConfig extends Partial<NodejsFunctionProps> {
  functionName: string;
  entry: string;
}

export interface AleiosLambdaProps extends RequiredLambdaConfig {
  runtime?: RestrictedLambdaConfig['runtime'];
  architecture?: RestrictedLambdaConfig['architecture'];
  tracing?: RestrictedLambdaConfig['tracing'];
  retryAttempts?: RestrictedLambdaConfig['retryAttempts'];
}
