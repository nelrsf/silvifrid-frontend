import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from '../../Pages/blog/blog.component';
import { BlogContentComponent } from './blog-content/blog-content.component';
import { MiscelaneusModule } from '../miscelaneus/miscelaneus.module';



@NgModule({
  declarations: [
    BlogComponent,
    BlogContentComponent
  ],
  imports: [
    CommonModule,
    MiscelaneusModule
  ],
  exports: [
    BlogComponent,
    BlogContentComponent
  ]
})
export class BlogModule { }
