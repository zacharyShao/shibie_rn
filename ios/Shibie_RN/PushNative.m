//
//  PushNative.m
//  RNAddNative
//
//  Created by Shaoting Zhou on 2017/2/22.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "PushNative.h"
#import "TestController.h"
#import "AppDelegate.h"
@implementation PushNative
RCT_EXPORT_MODULE();
// 接收传过来的 NSString
RCT_EXPORT_METHOD(RNOpenOneVC:(NSString *)name){
  NSLog(@"%@", name);
  //跳转界面
  //主要这里必须使用主线程发送,不然有可能失效
  dispatch_async(dispatch_get_main_queue(), ^{
    TestController *one = [[TestController alloc]init];
    
    AppDelegate *app = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    
    [app.nav pushViewController:one animated:YES];
  });
}
@end
