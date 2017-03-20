import { Component, OnInit } from '@angular/core';
import '../../../public/css/styles.css';

import { AppState } from "../store";
import { Store } from "@ngrx/store";
import { LogoutAction } from "../actions/auth";
import { Observable } from "rxjs";
import { User } from "../models/user";
import { getUser } from "../reducers/auth";

@Component({
  selector: 'courses-app',
  template: `
    <main>
      <app-header (logout)="onLogout()"
                  [user]="user$ | async"></app-header>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent implements OnInit {
  user$: Observable<User>;

  constructor (private store: Store<AppState>) {}

  ngOnInit () {
    this.user$ = this.store.select(getUser);
  }

  onLogout () {
    this.store.dispatch(new LogoutAction());
  }
}
