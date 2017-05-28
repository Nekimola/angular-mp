import { compose} from "@ngrx/core/compose";
import { ActionReducer, combineReducers } from "@ngrx/store";
import { storeFreeze } from "ngrx-store-freeze";

import { coursesReducer, CoursesState } from "./reducers/courses"
import { AuthState, authReducer } from "./reducers/auth";
import { localStorageSync } from "ngrx-store-localstorage";
import { authorsReducer, AuthorsState } from "./reducers/authors";

export interface AppState {
  courses: CoursesState,
  auth: AuthState
  authors: AuthorsState
}

const reducers = {
  courses: coursesReducer,
  auth: authReducer,
  authors: authorsReducer
};

const developmentReducer: ActionReducer<AppState> = compose(storeFreeze, localStorageSync([{auth: ['user']}], true), combineReducers)(reducers);
const productionReducer: ActionReducer<AppState> = compose(localStorageSync([{auth: ['user']}], true), combineReducers)(reducers);

export function rootReducer(state: any, action: any) {
  if (process.env.ENV === 'production') {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}