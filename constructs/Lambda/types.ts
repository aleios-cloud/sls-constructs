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
   * Please look at https://aleios-cloud.github.io/sls-constructs/docs/Lambda#function-name for documentation
   * @required true
   */
  functionName: string;
  /**
   * Please look at https://aleios-cloud.github.io/sls-constructs/docs/Lambda#entry for documentation
   * @required true
   */
  entry: string;
}

export interface AleiosLambdaProps extends RequiredLambdaConfig {
  /**
   * Please look at https://aleios-cloud.github.io/sls-constructs/docs/Lambda#runtime for documentation
   * @default Runtime.NODEJS_18_X,
   */
  runtime?: RestrictedLambdaConfig['runtime'];
  /**
   * Please look at https://aleios-cloud.github.io/sls-constructs/docs/Lambda#architecture for documentation
   * @default Architecture.ARM_64
   */
  architecture?: RestrictedLambdaConfig['architecture'];
  /**
   * Please look at https://aleios-cloud.github.io/sls-constructs/docs/Lambda#tracing for documentation
   * @default Tracing.ACTIVE
   */
  tracing?: RestrictedLambdaConfig['tracing'];
  /**
   * Please look at https://aleios-cloud.github.io/sls-constructs/docs/Lambda#retry-attempts for documentation
   * @default 2
   */
  retryAttempts?: RestrictedLambdaConfig['retryAttempts'];
}
