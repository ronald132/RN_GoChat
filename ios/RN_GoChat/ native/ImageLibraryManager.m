//
//  ImageLibraryManager.m
//  RN_GoChat
//
//  Created by Ronald Situmorang on 3/2/18.
//  Copyright © 2018 Facebook. All rights reserved.
//
#import "ImageLibraryManager.h"
#import <React/RCTLog.h>


@implementation ImageLibraryManager

  RCT_EXPORT_MODULE();

  RCT_EXPORT_METHOD(selectImage){
      RCTLogInfo(@"Selecting image...");
  }
@end
