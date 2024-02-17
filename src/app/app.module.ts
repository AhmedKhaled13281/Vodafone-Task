import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { UserService } from './Services/user.service';
import { PostService } from './Services/post.service';
import { CommentService } from './Services/comment.service';
import { RandomImage } from './Utilities/generateRandomImage.service';
import { CacheInterceptor } from './Interceptors/cashe-interceptor.service';

import { LimitCharPipe } from './Pipes/limit-char.pipe';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/Shared/navbar/navbar.component';
import { HomeComponent } from './Pages/home/home.component';
import { PostItemComponent } from './Components/Post/post-item/post-item.component';
import { PostListComponent } from './Components/Post/post-list/post-list.component';
import { CommentItemComponent } from './Components/Comment/comment-item/comment-item.component';
import { CommentListComponent } from './Components/Comment/comment-list/comment-list.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PostItemComponent,
    PostListComponent,
    CommentItemComponent,
    CommentListComponent,
    LimitCharPipe,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    UserService,
    PostService,
    CommentService,
    RandomImage,
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor , multi: true},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
