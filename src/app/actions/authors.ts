import { Action } from "@ngrx/store";
import { Author } from "../models/author";

export const actionTypes = {
  LOAD_AUTHORS: 'LOAD_AUTHORS',
  LOAD_AUTHORS_SUCCESS: 'LOAD_AUTHORS_SUCCESS',
  LOAD_AUTHORS_FAIL: 'LOAD_AUTHORS_FAIL'
};

export class LoadAuthorsAction implements Action {
  type = actionTypes.LOAD_AUTHORS;

  constructor () { }
}

export class LoadAuthorsSuccessAction implements Action {
  type = actionTypes.LOAD_AUTHORS_SUCCESS;

  constructor (public payload: Author[]) { }
}

export class LoadAuthorsFailAction implements Action {
  type = actionTypes.LOAD_AUTHORS_FAIL;

  constructor (public payload: any) { }
}