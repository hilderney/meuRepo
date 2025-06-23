import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IUser } from '../../shared/user.model';
import { UserListService } from './user-list.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {

  users: IUser[] = [];

  constructor(private service: UserListService) {

  }
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.service.getUserList().pipe(
      tap()
    ).subscribe();
  }

}
