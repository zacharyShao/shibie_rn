//
//  TestController.m
//  RNAddNative
//
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "TestController.h"
#import "AppDelegate.h"

@interface TestController ()

@end

@implementation TestController

- (void)viewDidLoad {
    [super viewDidLoad];
     self.navigationItem.title = @"我是原生页面哟~";
     self.view.backgroundColor = [UIColor redColor];
    // Do any additional setup after loading the view.
    self.button = [UIButton buttonWithType:UIButtonTypeSystem];
    self.button.backgroundColor = [UIColor whiteColor];
    self.button.frame = CGRectMake(50, 50, 300, 50);
    [self.button setTitle:@"我是一个按钮" forState:UIControlStateNormal];
    [self.button addTarget:self action:@selector(clickExit) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:self.button];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (void)clickExit{
  AppDelegate *app = (AppDelegate *)[[UIApplication sharedApplication] delegate];
  [app.nav popViewControllerAnimated:true];
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
