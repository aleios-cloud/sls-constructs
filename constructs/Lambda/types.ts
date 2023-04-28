import { Architecture, Runtime, Tracing } from 'aws-cdk-lib/aws-lambda';

export interface AllowedLambdaConfig {
  runtime: Runtime[];
  architecture: Architecture[];
  tracing: Tracing[];
  retryAttempts: number[];
}
