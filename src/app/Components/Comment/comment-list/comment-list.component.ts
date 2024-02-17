import { Component } from '@angular/core';
import { CommentService } from '../../../Services/comment.service';
import { Comment } from '../../../Models/comment.model';
@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.sass',
})
export class CommentListComponent {
  comments: Comment[];
  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.commentService.comments.subscribe(
      (comments) => (this.comments = comments)
    );
  }
}
