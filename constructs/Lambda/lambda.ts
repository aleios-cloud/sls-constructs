import {
  NodejsFunction,
  NodejsFunctionProps,
} from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

import {
  checkRequiredProperties,
  getConfigOrDefaults,
  validateAllowedProperties,
} from '../helpers';
import { allowedConfig, defaultConfig, requiredConfig } from './config';
import {
  defaultWarningMessages,
  errorMessages,
  LambdaConfigurationError,
} from './errors';
import { AleiosLambdaProps } from './types';

export class AleiosLambda extends NodejsFunction {
  constructor(scope: Construct, id: string, props: AleiosLambdaProps) {
    checkRequiredProperties(
      props,
      requiredConfig,
      LambdaConfigurationError,
      errorMessages,
    );

    const lambdaConfig = getConfigOrDefaults<NodejsFunctionProps>(
      props,
      defaultConfig,
      defaultWarningMessages,
    );

    validateAllowedProperties(
      lambdaConfig,
      allowedConfig,
      LambdaConfigurationError,
      errorMessages,
    );

    super(scope, id, {
      ...props,
      ...lambdaConfig,
    });
  }
}
