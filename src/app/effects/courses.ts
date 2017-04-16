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
  RemoveCourseFailAction
} from "../actions/courses";
import { Course } from "../models/course";

@Injectable()
export class CoursesEffects {
  constructor (private actions$: Actions, private coursesSrv: CoursesService) {}

  @Effect()
  loadCourses$: Observable<Action> = this.actions$
    .ofType(actionTypes.LOAD_COURSES)
    .switchMap(() => {
      return this.coursesSrv.load()
        .map((res: Response) => res.json())
        .map((courses: any[]) => courses
          .map((courseProps): Course => new Course(courseProps)))
        .map((courses: Course[]) => new LoadCoursesSuccessAction(courses))
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
}