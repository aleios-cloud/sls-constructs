import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

import { HelloWorld } from '../functions';

export class TestProjectStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new HelloWorld(this, 'HelloWorldFunction');
  }
}
