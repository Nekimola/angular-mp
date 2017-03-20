import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../../store";
import { LoginAction } from "../../actions/auth";

export interface LoginFormModel {
  login: string,
  password: string
}

@Component({
  selector: 'login-page',
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.scss']
})
export class LoginPageComponent {
  user: LoginFormModel = {
    login: '',
    password: ''
  };

  constructor (private store: Store<AppState>) {}

  onSubmit () {
    this.store.dispatch(new LoginAction(this.user));
  }
}