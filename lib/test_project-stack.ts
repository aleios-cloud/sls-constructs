import * as cdk from 'aws-cdk-lib';
import { BlockPublicAccess } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

import { AleiosBucket } from '../constructs/S3Bucket';
import { HelloWorld } from '../functions';

export class TestProjectStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new HelloWorld(this, 'HelloWorldFunction');

    new AleiosBucket(this, 'testBucket', {
      blockPublicAccess: BlockPublicAccess.BLOCK_ACLS,
    });
  }
}
