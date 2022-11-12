import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsBoxComponent } from './comments-box/comments-box.component';
import { VideoRibbonComponent } from './video-ribbon/video-ribbon.component';
import { PhoneInputComponent } from './phone-input/phone-input.component';
import { PhoneDialogComponent } from './dialogs/phone-dialog/phone-dialog/phone-dialog.component';
import { PicturePickerComponent } from './dialogs/picture-picker/picture-picker/picture-picker.component';
import { AvatarPickerComponent } from './avatar-picker/avatar-picker/avatar-picker.component';




@NgModule({
  declarations: [
    CommentsBoxComponent,
    VideoRibbonComponent,
    PhoneInputComponent,
    PhoneDialogComponent,
    PicturePickerComponent,
    AvatarPickerComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CommentsBoxComponent,
    VideoRibbonComponent,
    PhoneInputComponent,
    PhoneDialogComponent,
    PicturePickerComponent,
    AvatarPickerComponent
  ]
})
export class MiscelaneusModule { }
