import { Construct } from 'constructs';
import { join } from 'path';

import { AleiosLambda } from '../../constructs';

export class HelloWorld extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AleiosLambda(this, 'HelloWorldLambda', {
      functionName: 'hello-world',
      entry: join(__dirname, 'handler.ts'),
    });
  }
}
