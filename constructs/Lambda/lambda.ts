import { Duration } from 'aws-cdk-lib';
import { Architecture, Runtime, Tracing } from 'aws-cdk-lib/aws-lambda';
import {
  NodejsFunction,
  NodejsFunctionProps,
} from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

import { getConfigOrDefaults, validateAllowedProperty } from '../helpers';
import { LambdaConfigurationError } from './errors';
import { AllowedLambdaConfig } from './types';

const defaultConfig: NodejsFunctionProps = {
  runtime: Runtime.NODEJS_18_X,
  architecture: Architecture.ARM_64,
  tracing: Tracing.ACTIVE,
  memorySize: 1024,
  timeout: Duration.seconds(20),
  retryAttempts: 2,
  deadLetterQueueEnabled: true,
};

const allowedConfig: AllowedLambdaConfig = {
  runtimes: Object.values(Runtime) as Runtime[],
  architectures: Object.values(Architecture) as Architecture[],
  tracing: Object.values(Tracing) as Tracing[],
  retryAttempts: [0, 1, 2],
};

export class Lambda extends NodejsFunction {
  constructor(scope: Construct, id: string, props?: NodejsFunctionProps) {
    const lambdaConfig = getConfigOrDefaults<NodejsFunctionProps>(
      props,
      defaultConfig,
    );

    validateAllowedProperty(
      'Runtime',
      lambdaConfig.runtime,
      allowedConfig.runtimes,
      LambdaConfigurationError,
    );

    validateAllowedProperty(
      'RetryAttempts',
      lambdaConfig.retryAttempts,
      allowedConfig.retryAttempts,
      LambdaConfigurationError,
    );

    validateAllowedProperty(
      'Tracing',
      lambdaConfig.tracing,
      allowedConfig.tracing,
      LambdaConfigurationError,
    );

    validateAllowedProperty(
      'Architecture',
      lambdaConfig.architecture,
      allowedConfig.architectures,
      LambdaConfigurationError,
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
