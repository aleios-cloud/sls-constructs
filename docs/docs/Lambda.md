---
sidebar_position: 3
---

# Lambda

The `AleiosLambda` construct extents the `NodejsFunction` construct: A Node.js Lambda function bundled using esbuild. See the [CDK docs here for more info](https://docs.aws.amazon.com/cdk/api/v1/docs/@aws-cdk_aws-lambda-nodejs.NodejsFunction.html).

## Example Usage

```ts
new AleiosLambda(this, 'HelloWorldLambda', {
  functionName: 'hello-world',
  entry: join(__dirname, 'handler.ts'),
});
```

## Initialiser

```ts
new AleiosLambda(scope: Construct, id: string, props?: NodejsFunctionProps)
```

## Props

You can find a full list of the `NodejsFunctionProps` in the [CDK docs here](https://docs.aws.amazon.com/cdk/api/v1/docs/@aws-cdk_aws-lambda-nodejs.NodejsFunction.html#construct-props).

## Best Practise

You can find a full list of the best practise checks in the [AWS docs here](https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html).

## Prop Defaults

### Runtime

`Runtime.NODEJS_18_X`

Use the latest supported version of Nodejs to insure best performance and security. Also this version of Nodejs for Lambda comes bundled with the v3 SDK for Javascript which has notable performance improvements over the v2 SDK.

### Architecture

`Architecture.ARM_64`

AWS Lambda now supports ARM-based architecture, which provides better cost efficiency and performance compared to x86-based architecture. Use the ARM_64 architecture for your Lambda functions to take advantage of these benefits. Only use the X86_64 architecture if you need to use a native module that is not supported by the ARM_64 architecture.

### Tracing

`Tracing.ACTIVE`

### Memory Size
  
`memorySize: 1024`

Select an appropriate memory size for your Lambda function based on its requirements. Remember that memory size is directly related to CPU speed. Choose a higher memory size for compute-intensive tasks or to reduce execution time. Keep in mind that costs will increase with higher memory allocations. You can use [Lambda Power Tuning](https://docs.aws.amazon.com/lambda/latest/operatorguide/profile-functions.html) to help you determine the optimal memory size for your function.

### Timeout 

`Duration.seconds(20)`

Set a reasonable timeout for your Lambda functions based on their expected execution time. Be careful not to set a timeout that is too low, as this may cause your function to terminate prematurely. Conversely, a timeout that is too high may result in unnecessary costs if your code behaves incorrectly.

### Retry Attempts

`retryAttempts: 2`

Configure the number of retry attempts for your Lambda functions. AWS Lambda automatically retries failed executions, but you should set a limit to avoid excessive retries and associated costs. Determine the appropriate number of retries based on your use case and the likelihood of transient errors.

### Dead Letter Queue

`deadLetterQueueEnabled: true`

Enable a Dead Letter Queue (DLQ) for your Lambda functions to capture and store unprocessed events when all retries have been exhausted. This allows you to identify and diagnose failures and either reprocess or archive the failed events. Integrating a DLQ with your Lambda function ensures better visibility into your application's health and resilience.

## Required Props

### Function Name

`functionName: string`

The name of the Lambda function. The name must be unique within the region and account. The maximum length is 64 characters. The regex pattern used is [a-zA-Z0-9-_]+. This name helps identify the function later.

### Entry

`entry: string`

The path to the entry file (JavaScript or TypeScript) that defines the function handler and other helper code. The path should be relative to the root directory (where the cdk.json file is). The entry file must export a function called handler by default. The name of the exported function can be modified with the `handler`.


