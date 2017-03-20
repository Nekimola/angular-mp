import { Component } from '@angular/core';
import '../../../public/css/styles.css';

import { AppState } from "../store";
import { Store } from "@ngrx/store";
import { LogoutAction } from "../actions/auth";

@Component({
  selector: 'courses-app',
  template: `
    <main>
      <app-header (logout)="onLogout()"></app-header>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {
  constructor (private store: Store<AppState>) {}

  onLogout () {
    this.store.dispatch(new LogoutAction());
  }
}
