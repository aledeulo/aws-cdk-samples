import * as cdk from '@aws-cdk/core';
import * as ec2 from "@aws-cdk/aws-ec2";

export class VpcStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);
        // Note: Using the CfnVPC AWS CloudFormation Resource construct deploys an empty Amazon VPC. It does not deploy the resources, such as subnets, necessary before you can deploy other resources into the Amazon VPC. 
        // However, you could add subnets to your VPC using the Cfn* constructs, but you must first specify the CIDR settings.
        new ec2.CfnVPC(this, "MyVPC", {
            cidrBlock: "10.0.0.0/16",
        });

        // Using the code example, if you change the original code from ec2.CfnVPC to ec2.Vpc 
      // and cidrBlock to cidr, AWS CDK builds a well-architected Amazon VPC. 
      // Amazon VPC includes private and public subnets in up to three Availability Zones in a Region, and configures NAT gateways in each Availability Zone.

      //   new ec2.Vpc(this, "MyVPC", {
      //     cidr: "10.0.0.0/16",
      // });
    }
}