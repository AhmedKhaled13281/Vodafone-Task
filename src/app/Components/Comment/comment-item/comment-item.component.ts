import { Component, Input } from '@angular/core';
import { Comment } from '../../../Models/comment.model';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrl: './comment-item.component.sass',
})
export class CommentItemComponent {
  @Input() comment: Comment;
}
