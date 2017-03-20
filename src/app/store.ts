import { compose } from "@ngrx/core/compose";
import { ActionReducer, combineReducers } from "@ngrx/store";
import { storeFreeze } from "ngrx-store-freeze";

import { coursesReducer, CoursesState } from "./reducers/courses"
import { AuthState, authReducer } from "./reducers/auth";

export interface AppState {
  courses: CoursesState,
  auth: AuthState
}

const reducers = {
  courses: coursesReducer,
  auth: authReducer
};

const developmentReducer: ActionReducer<AppState> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<AppState> = combineReducers(reducers);

export function rootReducer(state: any, action: any) {
  if (process.env.ENV === 'production') {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}