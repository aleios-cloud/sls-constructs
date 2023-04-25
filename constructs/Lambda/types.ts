import { Architecture, Runtime, Tracing } from 'aws-cdk-lib/aws-lambda';

export interface AllowedLambdaConfig {
  runtimes: Runtime[];
  architectures: Architecture[];
  tracing: Tracing[];
  retryAttempts: number[];
}
