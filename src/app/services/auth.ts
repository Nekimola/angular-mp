import { Injectable } from "@angular/core";
import { of } from "rxjs/observable/of";
import { Observable } from "rxjs";

import { User } from "../models/user";
import { LoginFormModel } from "../models/login-form";

@Injectable()
export class AuthService {
  apiUrl: string = '';

  login (data: LoginFormModel): Observable<User> {
    return of({ username: data.login })
      .delay(1000);
  }
}
