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

const defaultWarningMessages = {
  runtime:
    'Consider using the default runtime for better compatibility and maintainability.',
  architecture:
    'In most cases, using the default architecture ARM64 is cheaper but with similar or better performance than X86_64. Only use X86_64 if you have packages which cannot run on ARM.',
  tracing:
    'Enabling tracing modes by default ensures a consistent level of observability across Lambda functions.',
  deadLetterQueueEnabled:
    'Enabling dead letter queues by default ensures that failed events are not lost.',
};

export class Lambda extends NodejsFunction {
  constructor(scope: Construct, id: string, props?: NodejsFunctionProps) {
    const lambdaConfig = getConfigOrDefaults<NodejsFunctionProps>(
      props,
      defaultConfig,
      defaultWarningMessages,
    );

    validateAllowedProperty(
      lambdaConfig.runtime,
      allowedConfig.runtimes,
      LambdaConfigurationError,
      `Invalid runtime for Lambda function. Allowed runtimes: ${allowedConfig.runtimes.join(
        ', ',
      )}`,
    );

    validateAllowedProperty(
      lambdaConfig.retryAttempts,
      allowedConfig.retryAttempts,
      LambdaConfigurationError,
      `Invalid retry attempts for Lambda function. Allowed retry attempts: ${allowedConfig.retryAttempts.join(
        ', ',
      )}. Restricting retry attempts helps prevent excessive retries that could lead to higher costs and longer execution times.`,
    );

    validateAllowedProperty(
      lambdaConfig.tracing,
      allowedConfig.tracing,
      LambdaConfigurationError,
      `Invalid tracing mode for Lambda function. Allowed tracing modes: ${allowedConfig.tracing.join(
        ', ',
      )}.`,
    );

    validateAllowedProperty(
      lambdaConfig.architecture,
      allowedConfig.architectures,
      LambdaConfigurationError,
      `Invalid architecture for Lambda function. Allowed architectures: ${allowedConfig.architectures.join(
        ', ',
      )}.`,
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
