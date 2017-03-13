import { Action } from "@ngrx/store";
import { Course } from "../models/course";

export const actionTypes = {
  ADD: 'ADD_COURSE',
  REMOVE: 'REMOVE_COURSE',
  SEARCH: 'SEARCH_COURSE'
};

export class AddCourseAction implements Action {
  type = actionTypes.ADD;

  constructor (public payload: Course) { }
}

export class RemoveCourseAction implements Action {
  type = actionTypes.REMOVE;

  constructor (public payload: string) { }
}


export class SearchCourseAction implements Action {
  type = actionTypes.SEARCH;

  constructor (public payload: string) { }
}