import {
  BlockPublicAccess,
  Bucket,
  BucketAccessControl,
  BucketEncryption,
  BucketProps,
} from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export class BucketSecurityError extends Error {
  constructor(msg: string) {
    super(msg);
  }
}

export interface AleiosBucketProps extends BucketProps {
  publicReadAccess?: false;
  accessControl?: BucketAccessControl.PRIVATE;
  encryption?: BucketEncryption.S3_MANAGED;
  enforceSSL?: true;
}

export class AleiosBucket extends Bucket {
  constructor(scope: Construct, id: string, props?: AleiosBucketProps) {
    if (
      props?.blockPublicAccess != null &&
      props?.blockPublicAccess !== BlockPublicAccess.BLOCK_ALL
    )
      throw new BucketSecurityError(
        "Unless you explicitly require anyone on the internet to be able to read or write to your S3 bucket, you should ensure that your S3 bucket is not public. (Docs - http://localhost:3000/docs/S3Buckets)"
      );
    if (props?.publicReadAccess != null && props?.publicReadAccess !== false)
      throw new BucketSecurityError("publicReadAccess must be set to false.");
      
    if (
      props?.accessControl != null &&
      props?.accessControl !== BucketAccessControl.PRIVATE
    )
      throw new BucketSecurityError("accessControl must be set to Private.");
    if (
      props?.encryption != null &&
      props?.encryption !== BucketEncryption.S3_MANAGED
    )
      throw new BucketSecurityError("encryption must be set to S3_MANAGED.");
    if (props?.enforceSSL != null && props?.enforceSSL !== true)
      throw new BucketSecurityError(
        "enforceSSL must be set to true, so that encryption is enforced in transit with SSL."
      );
    super(scope, id, {
      ...props,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      publicReadAccess: false,
      accessControl: BucketAccessControl.PRIVATE,
      encryption: BucketEncryption.S3_MANAGED,
      enforceSSL: true,
    });
  }
}
