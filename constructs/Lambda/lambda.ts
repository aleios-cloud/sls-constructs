import {
  NodejsFunction,
  NodejsFunctionProps,
} from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

import { getConfigOrDefaults, validateAllowedProperties } from '../helpers';
import { allowedConfig, defaultConfig } from './config';
import {
  defaultWarningMessages,
  errorMessages,
  LambdaConfigurationError,
} from './errors';

export class AleiosLambda extends NodejsFunction {
  constructor(scope: Construct, id: string, props?: NodejsFunctionProps) {
    const lambdaConfig = getConfigOrDefaults<NodejsFunctionProps>(
      props,
      defaultConfig,
      defaultWarningMessages,
    );

    validateAllowedProperties(
      lambdaConfig,
      allowedConfig,
      LambdaConfigurationError,
      errorMessages,
    );

    super(scope, id, {
      ...props,
      runtime: lambdaConfig.runtime,
      tracing: lambdaConfig.tracing,
      architecture: lambdaConfig.architecture,
      memorySize: lambdaConfig.memorySize,
      timeout: lambdaConfig.timeout,
      retryAttempts: lambdaConfig.retryAttempts,
      deadLetterQueueEnabled: lambdaConfig.deadLetterQueueEnabled,
    });
  }
}
