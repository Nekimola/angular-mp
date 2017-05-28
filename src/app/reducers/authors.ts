import { Action } from "@ngrx/store";

import { actionTypes } from "../actions/authors";
import { Author } from "../models/author";
import { AppState } from "../store";

export interface AuthorsState {
  progress: boolean,
  entities: Author[]
}

const initialState: AuthorsState = {
  progress: false,
  entities: []
};

export const authorsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.LOAD_AUTHORS: {
      return Object.assign({}, state, {
        progress: true
      });
    }

    case actionTypes.LOAD_AUTHORS_SUCCESS: {
      const setChecked = (author: Author) => Object.assign({}, author, {checked: false});
      return Object.assign({}, state, {
        entities: action.payload.map(setChecked),
        progress: false
      });
    }

    default: {
      return state;
    }
  }
};

export const getAuthors = (appState: AppState) => appState.authors.entities;