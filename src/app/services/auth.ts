import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { LoginFormModel } from "../models/login-form";
import { Response } from "@angular/http";
import { ApiService } from "./api";

@Injectable()
export class AuthService {
  apiUrl = 'https://angular-mp.now.sh';

  constructor (private http: ApiService) {}

  login (data: LoginFormModel): Observable<Response> {
    return this.http.post(`${this.apiUrl}/auth/login`, data);
  }

  getUserInfo () {
    return this.http.get(`${this.apiUrl}/auth/userinfo`);
  }
}
