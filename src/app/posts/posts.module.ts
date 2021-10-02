import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts/posts.component';


@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MatTableModule
  ]
})
export class PostsModule { }
