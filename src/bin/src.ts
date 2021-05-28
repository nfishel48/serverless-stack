#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { SrcStack } from '../Stacks/src-stack';
import { DynamoStack } from '../Stacks/dynamo-stack';
import { envDev } from '../Accounts/dev';

const app = new cdk.App();
new SrcStack(app, 'SrcStack', {
  env: envDev
});

new DynamoStack(app, 'DynamoStack', {
  env: envDev
});

