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

const baseLink = 'https://aleios-cloud.github.io/sls-constructs/docs/Lambda';
const links = {
  runtime: `${baseLink}#runtime`,
  retryAttempts: `${baseLink}#retry-attempts`,
  tracing: `${baseLink}#tracing`,
  architecture: `${baseLink}#architecture`,
  entry: `${baseLink}#entry`,
  functionName: `${baseLink}#function-name`,
  deadLetterQueueEnabled: `${baseLink}#dead-letter-queue`,
};

export const defaultWarningMessages = {
  runtime: `Consider using the default runtime for better compatibility and maintainability.See ${links.runtime} for more information.`,
  architecture: `In most cases, using the default architecture ARM64 is cheaper but with similar or better performance than X86_64. See ${links.architecture} for more information.`,
  tracing: `You have disabled tracing. Enabling tracing modes by default ensures a consistent level of observability across Lambda functions. See ${links.tracing} for more information.`,
  deadLetterQueueEnabled: `You have disabled the dead letter queues. They are enabled by default to ensure that failed events are not lost. See ${links.deadLetterQueueEnabled} for more information.`,
};

export const errorMessages = {
  runtime: `Invalid runtime for Lambda function. Allowed runtimes: ${allowedConfig.runtime.join(
    ', ',
  )}. ${links.runtime}`,
  retryAttempts: `Invalid retry attempts for Lambda function. Allowed retry attempts: ${allowedConfig.retryAttempts.join(
    ', ',
  )}. Restricting retry attempts helps prevent excessive retries that could lead to higher costs and longer execution times. ${
    links.retryAttempts
  }`,
  tracing: `Invalid tracing mode for Lambda function. Allowed tracing modes: ${allowedConfig.tracing.join(
    ', ',
  )}. ${links.tracing}`,
  architecture: `Invalid architecture for Lambda function. Allowed architectures: ${allowedConfig.architecture.join(
    ', ',
  )}. ${links.architecture}`,
  entry: `You must provide an entry file for your Lambda function. This is the file that will be executed when your Lambda function is invoked. ${links.entry}`,
  functionName: `You must provide a name for your Lambda function. This will make it easier to identify your function in the AWS console. ${links.functionName}`,
};
