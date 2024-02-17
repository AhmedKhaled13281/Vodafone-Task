import { Component } from '@angular/core';
import { UserService } from '../../../Services/user.service';
import { PostService } from '../../../Services/post.service';
import { User } from '../../../Models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.sass',
})
export class NavbarComponent {
  users: User[] = [];
  activeUsernameIndex: number | null;

  constructor(
    private userService: UserService,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.userService.users.subscribe((users) => {
      this.users = users;
    });
    this.userService.getUsers();
  }

  setActiveUsername(id: number) {
    this.activeUsernameIndex = id;
    this.postService.getPosts(id);
  }
}
