import { allowedConfig } from './config';

export class LambdaConfigurationError extends Error {
  constructor(msg: string) {
    super(msg);
  }
}

export class LambdaSecurityError extends Error {
  constructor(msg: string) {
    super(msg);
  }
}

export const defaultWarningMessages = {
  runtime:
    'Consider using the default runtime for better compatibility and maintainability.',
  architecture:
    'In most cases, using the default architecture ARM64 is cheaper but with similar or better performance than X86_64. Only use X86_64 if you have packages which cannot run on ARM.',
  tracing:
    'Enabling tracing modes by default ensures a consistent level of observability across Lambda functions.',
  deadLetterQueueEnabled:
    'Enabling dead letter queues by default ensures that failed events are not lost.',
};

export const errorMessages = {
  runtime: `Invalid runtime for Lambda function. Allowed runtimes: ${allowedConfig.runtimes.join(
    ', ',
  )}`,
  retryAttempts: `Invalid retry attempts for Lambda function. Allowed retry attempts: ${allowedConfig.retryAttempts.join(
    ', ',
  )}. Restricting retry attempts helps prevent excessive retries that could lead to higher costs and longer execution times.`,
  tracing: `Invalid tracing mode for Lambda function. Allowed tracing modes: ${allowedConfig.tracing.join(
    ', ',
  )}.`,
  architecture: `Invalid architecture for Lambda function. Allowed architectures: ${allowedConfig.architectures.join(
    ', ',
  )}.`,
};
