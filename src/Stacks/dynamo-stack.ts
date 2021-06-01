import * as cdk from '@aws-cdk/core';
import * as dynamodb from '@aws-cdk/aws-dynamodb';

export class DynamoStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);


    const notificationTable = new dynamodb.Table(this, 'Table', {
    partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
    billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
    tableName:"graphql-api-dev-notification-table"
    });

    notificationTable.addGlobalSecondaryIndex({
      indexName:'targetIdGlobalIndex',
      partitionKey:{name:'targetId', type:dynamodb.AttributeType.STRING}
    });

    notificationTable.addGlobalSecondaryIndex({
      indexName:'userIdGlobalIndex',
      partitionKey:{name:'userId', type:dynamodb.AttributeType.STRING}
    });
  }
}
