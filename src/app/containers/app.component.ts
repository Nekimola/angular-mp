import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { of } from "rxjs/observable/of";
import { Router, NavigationEnd, Event } from "@angular/router";

import '../../../public/css/styles.css';
import { AppState } from "../store";
import { LogoutAction } from "../actions/auth";
import { User } from "../models/user";
import { getUser } from "../reducers/auth";


const getIsLoginPage = (event: Event) => event instanceof NavigationEnd && event.url === '/login';

@Component({
  selector: 'courses-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main>
      <app-header (logout)="onLogout()"
                  [user]="user$ | async"
                  [isLoginPage]="isLoginPage$ | async"></app-header>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent implements OnInit {
  user$: Observable<User>;
  isLoginPage$: Observable<boolean> = of(false);

  constructor (
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit () {
    this.user$ = this.store.select(getUser);
    this.isLoginPage$ = this.router.events
      .map(getIsLoginPage);
  }

  onLogout () {
    this.store.dispatch(new LogoutAction());
  }
}
