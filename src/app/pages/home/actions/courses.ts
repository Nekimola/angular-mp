import { Action } from "@ngrx/store";
import { Course } from "../models/course";

export const actionTypes = {
  ADD: 'ADD_COURSE'
};

export class AddCourseAction implements Action {
  type = actionTypes.ADD;

  constructor (public payload: Course) { }
}