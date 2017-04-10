import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from "rxjs";
import { Action } from "@ngrx/store";
import { of } from "rxjs/observable/of";

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
        .map((response: any[]) => response
          // tweak response shape to fit data model
          .map(({ id, title, duration, description, topRated, date }): Course =>
            ({id, title, duration, description, topRated, date})
          ))
        .map((courses: Course[]) => new LoadCoursesSuccessAction(courses))
        .catch((error) => of(new LoadCoursesFailAction(error)));
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