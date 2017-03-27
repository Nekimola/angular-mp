import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import { AppState } from "../../store";
import { LoginAction } from "../../actions/auth";
import { LoginFormModel } from "../../models/login-form";
import { Observable } from "rxjs";
import { getLoginProgress } from "../../reducers/auth";

@Component({
  selector: 'login-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="content">
      <login-form (submit)="onSubmit($event)"
                  [inProgress]="inProgress$ | async"></login-form>
    </section>
  `
})
export class LoginPageComponent implements OnInit {
  inProgress$: Observable<boolean>;

  constructor (private store: Store<AppState>) {}

  ngOnInit () {
    this.inProgress$ = this.store.select(getLoginProgress);
  }

  onSubmit (user: LoginFormModel) {
    this.store.dispatch(new LoginAction(user));
  }
}