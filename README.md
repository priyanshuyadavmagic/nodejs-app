# Deploy to AWS CodeDeploy using Bitbucket Pipes

This repo contains a basic example for deploying applications with AWS CodeDeploy using aws-coded-deploy pipe. It this example we build and deploy a simple JavaScript application to AWS.

## How To Use this example
* [Create an S3 bucket](http://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html) to hold application revisions if you do not currently have one.
* [Create a demo application](https://docs.aws.amazon.com/codedeploy/latest/userguide/tutorials-github-create-application.html) in AWS CodeDeploy if you do not already have one.

## Required AWS permissions
To use this example you have to have a user with `AWSCodeDeployFullAccess` and `AmazonS3FullAccess` permissions.

## Set up a repository variables in Bitbucket settings for your repo
* `AWS_SECRET_ACCESS_KEY`:  Secret key for a user with the required permissions.
* `AWS_ACCESS_KEY_ID`:  Access key for a user with the required permissions.
* `AWS_DEFAULT_REGION`:  Region where the target AWS CodeDeploy application is.
* `APPLICATION_NAME`: Name of AWS CodeDeploy application.
* `DEPLOYMENT_GROUP`: Name of the AWS CodeDeploy deployment group.

## Enable Bitbucket Pipelines in your repo

Go to the repository settings and navigate to the Pipelines section. Toggle the `Enable Pipelines` button. After that Pipelines should start executing and after a successful build your application should be up and running.

