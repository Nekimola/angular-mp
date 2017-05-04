import { Action } from "@ngrx/store";

import { actionTypes } from "../actions/authors";
import { Author } from "../models/author";
import { AppState } from "../store";

export interface AuthState {
  progress: boolean,
  authors: Author[]
}

const initialState: AuthState = {
  progress: false,
  authors: []
};

export const authorsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.LOAD_AUTHORS: {
      return Object.assign({}, state, {
        progress: true
      });
    }

    case actionTypes.LOAD_AUTHORS_SUCCESS: {
      return Object.assign({}, state, {
        authors: action.payload,
        progress: false
      });
    }

    default: {
      return state;
    }
  }
};
