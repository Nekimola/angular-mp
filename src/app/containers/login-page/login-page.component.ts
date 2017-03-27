import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Store } from "@ngrx/store";

import { AppState } from "../../store";
import { LoginAction } from "../../actions/auth";
import { LoginFormModel } from "../../models/login-form";

@Component({
  selector: 'login-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="content">
      <login-form (submit)="onSubmit($event)"></login-form>
    </section>
  `
})
export class LoginPageComponent {
  constructor (private store: Store<AppState>) {}

  onSubmit (user: LoginFormModel) {
    this.store.dispatch(new LoginAction(user));
  }
}