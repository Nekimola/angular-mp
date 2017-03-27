import { actionTypes } from "../actions/auth";
import { User } from "../models/user";
import { AppState } from "../store";
import { Action } from "@ngrx/store";

export interface AuthState {
  loading: boolean,
  user: User | null
}

const initialState: AuthState = {
  loading: false,
  user: null
};

export const authReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.LOGIN: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case actionTypes.LOGIN_SUCCESS: {
      return Object.assign({}, state, {
        user: action.payload,
        loading: false
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