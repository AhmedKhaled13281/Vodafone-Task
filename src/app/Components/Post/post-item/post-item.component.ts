import { Component, Input } from '@angular/core';
import { Post } from '../../../Models/post.model';
import { User } from '../../../Models/user.model';
import { CommentService } from '../../../Services/comment.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.sass',
})
export class PostItemComponent {
  @Input() post: Post;
  @Input() users: User[];
  userPostObj : User
  showComment: boolean = false;

  constructor(private commentService: CommentService) {}

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.userPostObj = this.users.find(user => user.id === this.post.userId)
  }

  handleShowComment(postId: number) {
    this.showComment = !this.showComment;
    this.commentService.getComments(postId);
  }
}
