import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import '../../../public/css/styles.css';
import { AppState } from "../store";
import { LogoutAction } from "../actions/auth";
import { User } from "../models/user";
import { getUser } from "../reducers/auth";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: 'courses-app',
  template: `
    <main>
      <app-header (logout)="onLogout()"
                  [user]="user$ | async"
                  [isLoginPage]="isLoginPage"></app-header>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent implements OnInit {
  user$: Observable<User>;
  isLoginPage: boolean = false;

  constructor (
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit () {
    this.user$ = this.store.select(getUser);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = event.url === '/login';
      }
    });
  }

  onLogout () {
    this.store.dispatch(new LogoutAction());
  }
}
