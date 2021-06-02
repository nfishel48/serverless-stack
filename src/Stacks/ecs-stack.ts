import * as cdk from '@aws-cdk/core';
import * as ecs from '@aws-cdk/aws-ecs';
import { VpcStack } from './vpc-stack';
import { EcrStack } from './ecr-stack';
import { Effect, PolicyStatement, Role, ServicePrincipal } from '@aws-cdk/aws-iam';
import { Repository } from '@aws-cdk/aws-ecr';



export class EcsStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const apiCluster = new ecs.Cluster(this, "apiCluster", {
            clusterName : "ApiCluster"
        });

        const taskRole = new Role(this, "taskRole", {
            assumedBy: new ServicePrincipal('ecs-tasks.amazonaws.com')
        });

        const exeRole = new Role(this, "exeRole", {
            assumedBy: new ServicePrincipal('ecs-tasks.amazonaws.com')
        });

        const statement = new PolicyStatement({
            effect: Effect.ALLOW,
        });

        statement.addAllResources()

        statement.addActions(
        "ecr:*",
        "secretsmanager:*",
        "kms:DescribeKey",
        "kms:ListAliases",
        "kms:ListKeys",
        "kms:Decrypt" 
        );

        taskRole.addToPolicy(statement);
        exeRole.addToPolicy(statement)

        const apiTask = new ecs.FargateTaskDefinition(this, "apiTask", {
            taskRole: taskRole,
            executionRole: exeRole,
            cpu: 512,
            memoryLimitMiB: 3072
        });

        const apiService = new ecs.FargateService(this, "apiService", {
            cluster : apiCluster,
            taskDefinition: apiTask
        });

        var repo = Repository.fromRepositoryName(this, 'repo','ecrstack-repo02ac86cf-jxphrbmf1cgn');
        var image = ecs.ContainerImage.fromEcrRepository(repo,"latest");
        const container = new ecs.ContainerDefinition(this, "container", {
            image: image,
            taskDefinition: apiTask,
            containerName: "graphql-api",
            essential: true,
            cpu: 512,
            memoryLimitMiB: 3072
        })

        
    }
}