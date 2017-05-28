import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from "rxjs";
import { Action } from "@ngrx/store";
import { of } from "rxjs/observable/of";
import { Response } from "@angular/http";

import { CoursesService } from "../services/courses";
import {
  actionTypes,
  LoadCoursesSuccessAction,
  LoadCoursesFailAction,
  RemoveCourseSuccessAction,
  RemoveCourseFailAction,
  AddCourseSuccessAction,
  AddCourseFailAction
} from "../actions/courses";
import { Course } from "../models/course";

@Injectable()
export class CoursesEffects {
  constructor (private actions$: Actions, private coursesSrv: CoursesService) {}

  @Effect()
  loadCourses$: Observable<Action> = this.actions$
    .ofType(actionTypes.LOAD_COURSES)
    .switchMap(({ payload }) => {
      return this.coursesSrv.load(payload)
        .map((res: Response) => res.json())
        .map((res: any) => ({
          data: res.data.map((courseProps: any): Course => new Course(courseProps)),
          totalItems: res.totalItems
        }))
        .map((res: any) => new LoadCoursesSuccessAction(res))
        .catch((error: any) => of(new LoadCoursesFailAction(error)));
    });

  @Effect()
  removeCourse$: Observable<Action> = this.actions$
    .ofType(actionTypes.REMOVE_COURSE)
    .switchMap((action) => {
      return this.coursesSrv.remove(action.payload)
        .map(() => new RemoveCourseSuccessAction(action.payload))
        .catch((error) => of(new RemoveCourseFailAction(error)));
    });

  @Effect()
  addCourse$: Observable<Action> = this.actions$
    .ofType(actionTypes.ADD_COURSE)
    .switchMap((action) => {
      return this.coursesSrv.add(action.payload)
        .map(() => new AddCourseSuccessAction(action.payload))
        .catch((error) => of(new AddCourseFailAction(error)));
    });
}