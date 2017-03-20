import { actionTypes } from "../actions/auth";
import { User } from "../models/user";

export interface AuthState {
  loading: boolean,
  user: User | null
}

const initialState: AuthState = {
  loading: false,
  user: null
};

export const authReducer = (state = initialState, action) => {
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

    default: {
      return state;
    }
  }
};