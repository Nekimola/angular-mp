import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "../store";

import { isUserLoggedIn } from "../reducers/auth";

@Injectable()
export class IsLoggedInGuard implements CanActivate {
  constructor (
    private store: Store<AppState>,
    private router: Router
  ){}

  canActivate (): Observable<boolean> {
    return this.store.select(isUserLoggedIn)
      .map((isLoggedIn) => {
        if (isLoggedIn) {
          this.router.navigate(['/']);
        }
        return !isLoggedIn;
      });
  }
}