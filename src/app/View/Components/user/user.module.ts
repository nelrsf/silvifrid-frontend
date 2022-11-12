import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from '../../Pages/user-profile/user-profile.component';
import { ProfileInfoComponent } from './profile-info/profile-info/profile-info.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    UserProfileComponent,
    ProfileInfoComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatTableModule,
  ],
  exports: [
    UserProfileComponent,
    ProfileInfoComponent,
  ]
})
export class UserModule { }
