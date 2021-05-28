# serverless-stack
Infrusturce as code to deploy a SPA, API, and NoSql Database on AWS. This project will be written in Typescript and use the AWS CDK.

# SPA
The single page application is a containerized Angular app that will be run on a ECS cluster. Amazon ECS leverages serverless technology from AWS Fargate to deliver autonomous container operations, which reduces the time spent on configuration, patching, and security.

# API 
Our API is a GraphQL server implemented using NestJs a progressive Node.js framework for building efficient, reliable and scalable server-side applications.  This API will deployed on AWS Lambda so it can be called by the SPA when needed. AWS Lambda is a serverless compute service that lets you run code without provisioning or managing servers, creating workload-aware cluster scaling logic, maintaining event integrations, or managing runtimes. With Lambda, you can run code for virtually any type of application or backend service - all with zero administration. Just upload your code as a ZIP file or container image, and Lambda automatically and precisely allocates compute execution power and runs your code based on the incoming request or event, for any scale of traffic.

# Database
I will be using DynamoDB for the the database, Amazon DynamoDB is a key-value and document database that delivers single-digit millisecond performance at any scale. It’s a fully managed, multiregion, multimaster, durable database with built-in security, backup and restore, and in-memory caching for internet-scale applications. DynamoDB can handle more than 10 trillion requests per day and can support peaks of more than 20 million requests per second.
