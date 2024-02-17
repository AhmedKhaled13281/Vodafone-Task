import { Component } from '@angular/core';
import { PostService } from '../../../Services/post.service';
import { UserService } from '../../../Services/user.service';
import { Post } from '../../../Models/post.model';
import { User } from '../../../Models/user.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.sass',
})
export class PostListComponent {
  constructor(
    private postService: PostService,
    private userService: UserService
  ) {}
  posts: Post[] = [];
  users: User[] = [];

  ngOnInit(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    this.postService.posts.subscribe((posts) => (this.posts = posts));
    this.userService.users.subscribe((users) => this.users = users)
  }
}
