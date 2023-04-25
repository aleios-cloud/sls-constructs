import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { AleiosBucket } from "../constructs/S3Bucket";
import { BlockPublicAccess } from "aws-cdk-lib/aws-s3";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class TestProjectStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new AleiosBucket(this, "testBucket", {
      blockPublicAccess: BlockPublicAccess.BLOCK_ACLS,
    });
  }
}
