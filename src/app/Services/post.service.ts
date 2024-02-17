import { HttpClient } from '@angular/common/http';
import { RandomImage } from '../Utilities/generateRandomImage.service';
import { Post } from '../Models/post.model';
import { env } from '../../enviroments/env';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable()
export class PostService {
  private apiUrl: string = env.JSON_PLACEHOLDER_BASE_URL;
  private postsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  posts: Observable<Post[]> = this.postsSubject.asObservable();
  private postsCache: { [userId: number]: Post[] } = {};

  constructor(private http: HttpClient, private randomImage: RandomImage) {}


  getPosts(userId: number) {
    if (this.postsCache[userId]) {
      this.postsSubject.next(this.postsCache[userId]);
      return;
    }

    this.http.get<Post[]>(`${this.apiUrl}/posts?userId=${userId}`).pipe(
      map((res) => {
        const processedPosts = res.map((post) => ({ ...post, postImage: this.randomImage.getRandomImage() }));
        this.postsCache[userId] = processedPosts;
        return processedPosts;
      }),
    ).subscribe((posts) => {
      this.postsSubject.next(posts);
    });
  }
}
