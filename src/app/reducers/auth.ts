import { Action } from "@ngrx/store";

import { actionTypes } from "../actions/auth";
import { User } from "../models/user";
import { AppState } from "../store";

export interface AuthState {
  progress: boolean,
  user: User | null
}

const initialState: AuthState = {
  progress: false,
  user: null
};

export const authReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.LOGIN: {
      return Object.assign({}, state, {
        progress: true
      });
    }

    case actionTypes.LOGIN_SUCCESS: {
      return Object.assign({}, state, {
        user: action.payload,
        progress: false
      });
    }

    case actionTypes.LOGOUT: {
      return Object.assign({}, state, {
        user: null
      });
    }

    default: {
      return state;
    }
  }
};

export const isUserLoggedIn = (state: AppState) => !!state.auth.user;
export const getUser = (state: AppState) => state.auth.user;
export const getLoginProgress = (state: AppState) => state.auth.progress;