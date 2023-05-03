#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { TestProjectStack } from '../lib/test_project-stack';

const app = new cdk.App();
new TestProjectStack(app, 'TestProjectStack', {});
