import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/Controller/Services/auth/auth.service';
import { DisplayUserService } from 'src/app/Controller/Services/user/display-user.service';
import { User } from 'src/app/Model/user';
import { environment } from 'src/environments/environment';
import { PicturePickerComponent } from '../../../miscelaneus/dialogs/picture-picker/picture-picker/picture-picker.component';


@Component({
  selector: 'app-avatar-picker',
  templateUrl: './avatar-picker.component.html',
  styleUrls: ['./avatar-picker.component.css']
})
export class AvatarPickerComponent implements OnInit {

  numberOfPictures = 13;
  pathsOfPictures!: string[];
  mainPicturesPath = environment.avatars_main_route;
  @Input() socialMediaPicturePath: string | undefined;

  constructor(@Inject(MAT_DIALOG_DATA) public data: User,
    private matDialogRef: MatDialogRef<PicturePickerComponent>,
    private authService: AuthService,
    private displayUserService: DisplayUserService) { }

  ngOnInit(): void {
    this.getPictures();
  }

  getPictures() {
    this.pathsOfPictures = [];
    this.pathsOfPictures.push(this.data.reloadUserInfo.photoUrl);
    for (let i = 1; i <= this.numberOfPictures; i++) {
      this.pathsOfPictures.push(this.mainPicturesPath + i + '.jpg');
    }
  }

  selectPicture(imgPath: string) {
    let user = new User();
    user = this.data;
    user.photoURL = imgPath;
    this.authService.setUser(user).then(
      () => {
        this.displayUserService.userSubject$.next(user);
        this.closeModal();
      }
    );
  }

  closeModal() {
    this.matDialogRef.close();
  }

}
