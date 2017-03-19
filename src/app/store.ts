import { compose } from "@ngrx/core/compose";
import { ActionReducer, combineReducers } from "@ngrx/store";
import { storeFreeze } from "ngrx-store-freeze";

import { coursesReducer, CoursesState } from "./reducers/courses"

export interface AppState {
  courses: CoursesState
}

const reducers = {
  courses: coursesReducer
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