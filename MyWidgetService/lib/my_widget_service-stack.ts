import * as cdk from '@aws-cdk/core';
import * as widget_service from '../lib/widget_service';

export class MyWidgetServiceStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new widget_service.WidgetService(this, 'Widgets');
  }
}

// Since our example contains a Lambda function, we will need to bootstrap our environment.
// cdk bootstrap