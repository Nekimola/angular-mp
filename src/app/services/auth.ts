import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { LoginFormModel } from "../models/login-form";
import { Http, Response } from "@angular/http";

@Injectable()
export class AuthService {
  apiUrl = 'https://angular-mp.now.sh';

  constructor (private http: Http) {}

  login (data: LoginFormModel): Observable<Response> {
    return this.http.post(`${this.apiUrl}/auth/login`, { login: data.login, password: data.password });
  }
}
