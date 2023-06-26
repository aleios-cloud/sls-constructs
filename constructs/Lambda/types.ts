import { NodejsFunctionProps } from 'aws-cdk-lib/aws-lambda-nodejs';

import { allowedConfig } from './config';

export interface RestrictedLambdaConfig {
  retryAttempts: typeof allowedConfig.retryAttempts[number];
  tracing: typeof allowedConfig.tracing[number];
  runtime: typeof allowedConfig.runtime[number]; //currently this doesn't restrict the runtime to nodejs
  architecture: typeof allowedConfig.architecture[number]; //currently this doesn't restrict the architecture
}

export interface RequiredLambdaConfig extends Partial<NodejsFunctionProps> {
  /**
   * @see https://aleios-cloud.github.io/sls-constructs/docs/Lambda#function-name
   * @required true
   */
  functionName: string;
  /**
   * @see https://aleios-cloud.github.io/sls-constructs/docs/Lambda#entry
   * @required true
   */
  entry: string;
}

export interface AleiosLambdaProps extends RequiredLambdaConfig {
  /**
   * @see https://aleios-cloud.github.io/sls-constructs/docs/Lambda#runtime
   * @default Runtime.NODEJS_18_X,
   */
  runtime?: RestrictedLambdaConfig['runtime'];
  /**
   * @see https://aleios-cloud.github.io/sls-constructs/docs/Lambda#architecture
   * @default Architecture.ARM_64
   */
  architecture?: RestrictedLambdaConfig['architecture'];
  /**
   * @see https://aleios-cloud.github.io/sls-constructs/docs/Lambda#tracing
   * @default Tracing.ACTIVE
   */
  tracing?: RestrictedLambdaConfig['tracing'];
  /**
   * @see https://aleios-cloud.github.io/sls-constructs/docs/Lambda#retry-attempts
   * @default 2
   */
  retryAttempts?: RestrictedLambdaConfig['retryAttempts'];
}
