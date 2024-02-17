import { HttpClient } from '@angular/common/http';
import { User } from '../Models/user.model';
import { RandomImage } from '../Utilities/generateRandomImage.service';
import { env } from '../../enviroments/env';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable()
export class UserService {
  private apiUrl: string = env.JSON_PLACEHOLDER_BASE_URL;
  private usersSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  users: Observable<User[]> = this.usersSubject.asObservable();
  isLoading: boolean = true;

  constructor(private http: HttpClient, private randomImage: RandomImage) {}

  getUsers() {
    this.http
      .get<User[]>(`${this.apiUrl}/users`)
      .pipe(
        map((res) => {
          return res.map((user) => {
            return {
              id: user.id,
              username: user.username,
              profilePicture: this.randomImage.getRandomImage(),
            };
          });
        })
      )
      .subscribe((users) => {
        this.usersSubject.next(users);
      });
  }
}
