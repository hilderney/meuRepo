import { Observable } from "rxjs";
import { IUser } from "../../shared/user.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable {
  providedIn: 'root'
}
export class UserListService {

  constructor(private httpClient: HttpClient) {}
  getUserList(): Observable<IUser[]> {

    this.httpClient.get<IUser>('https://jsonplaceholder.typicode.com/users');
  }
}
