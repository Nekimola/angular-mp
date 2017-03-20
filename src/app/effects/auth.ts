import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from "rxjs";
import { Action } from "@ngrx/store";
import { of } from "rxjs/observable/of";

import { actionTypes } from "../actions/auth";
import { AuthService } from "../services/auth";
import { LoginSuccessAction, LoginFailAction } from "../actions/auth";
import { User } from "../models/user";

@Injectable()
export class AuthEffects {
  constructor (private actions$: Actions, private authSrv: AuthService) {}

  @Effect()
  login$: Observable<Action> = this.actions$
    .ofType(actionTypes.LOGIN)
    .switchMap(({ payload }) => {
      return this.authSrv.login(payload)
        .map((user: User) => new LoginSuccessAction(user))
        .catch((error: any) => of(new LoginFailAction(error)));
    });
}