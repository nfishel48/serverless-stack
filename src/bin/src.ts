#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { DynamoStack } from '../Stacks/dynamo-stack';
import { envDev } from '../Accounts/dev';
import { EcrStack } from '../Stacks/ecr-stack';
import { VpcStack } from '../Stacks/vpc-stack';
import { EcsStack } from '../Stacks/ecs-stack';

const app = new cdk.App();
new VpcStack(app, 'VpcStack', {
  env: envDev
})

new EcsStack(app, 'EcsStack', {
  env: envDev
})

new DynamoStack(app, 'DynamoStack', {
  env: envDev
});

new EcrStack(app, 'EcrStack', {
  env: envDev
});

