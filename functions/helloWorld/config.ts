import { Architecture, Runtime, Tracing } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { join } from 'path';

import { AleiosLambda } from '../../constructs';

export class HelloWorld extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AleiosLambda(this, 'HelloWorldLambda', {
      functionName: 'hello-world',
      architecture: Architecture.ARM_64,
      tracing: Tracing.PASS_THROUGH,
      entry: join(__dirname, 'handler.ts'),
      runtime: Runtime.NODEJS_16_X,
      retryAttempts: 20,
    });
  }
}
