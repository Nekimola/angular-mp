import { Action } from "@ngrx/store";
import { User } from "../models/user";
import { LoginFormModel } from "../containers/login-page/login-page.component";

export const actionTypes = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAIL: 'LOGIN_FAIL',
  LOGOUT: 'LOGOUT'
};

export class LoginAction implements Action {
  type = actionTypes.LOGIN;

  constructor (public payload: LoginFormModel) { }
}

export class LoginSuccessAction implements Action {
  type = actionTypes.LOGIN_SUCCESS;

  constructor (public payload: User) {}
}

export class LoginFailAction implements Action {
  type = actionTypes.LOGIN_FAIL;

  constructor (public payload: any) {}
}

export class LogoutAction implements Action {
  type = actionTypes.LOGOUT;

  constructor () { }
}