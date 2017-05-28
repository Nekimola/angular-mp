import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from "rxjs";
import { Action } from "@ngrx/store";
import { of } from "rxjs/observable/of";
import { Response } from "@angular/http";

import { actionTypes, LoadAuthorsSuccessAction, LoadAuthorsFailAction } from "../actions/authors";
import { AuthorsService } from "../services/authors";
import { Author } from "../models/author";

@Injectable()
export class AuthorsEffects {
  constructor (
    private actions$: Actions,
    private authorsSrv: AuthorsService,
  ) {}

  @Effect()
  loadAuthors$: Observable<Action> = this.actions$
    .ofType(actionTypes.LOAD_AUTHORS)
    .switchMap(() => {
      return this.authorsSrv.load()
        .map((res: Response) => res.json())
        .map((authors: Author[]) => new LoadAuthorsSuccessAction(authors))
        .catch((error: any) => of(new LoadAuthorsFailAction(error)));
    });
}