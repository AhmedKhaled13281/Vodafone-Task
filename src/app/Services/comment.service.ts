import { HttpClient } from '@angular/common/http';
import { Comment } from '../Models/comment.model';
import { env } from '../../enviroments/env';
import { Injectable } from '@angular/core';
import {BehaviorSubject ,  map , Observable} from 'rxjs';

@Injectable()
export class CommentService {
  private apiUrl: string = env.JSON_PLACEHOLDER_BASE_URL;
  private commentsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  comments: Observable<Comment[]> = this.commentsSubject.asObservable();


  constructor(private http: HttpClient) {}

  getComments(postId : number) {
    return this.http
      .get<Comment[]>(`${this.apiUrl}/comments?postId=${postId}`)
      .subscribe((res) => {this.commentsSubject.next(res)});
  }
}
