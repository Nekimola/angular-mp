import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from "rxjs";
import { Action } from "@ngrx/store";
import { of } from "rxjs/observable/of";

import { CoursesService } from "../services/courses";
import { actionTypes, LoadCoursesSuccessAction, LoadCoursesFailAction } from "../actions/courses";
import { Course } from "../models/course";

@Injectable()
export class CoursesEffects {
  constructor (private actions$: Actions, private coursesSrv: CoursesService) {}

  @Effect()
  loadCourses$: Observable<Action> = this.actions$
    .ofType(actionTypes.LOAD_COURSES)
    .switchMap(() => {
      return this.coursesSrv.load()
        .map((courses: Course[]) => new LoadCoursesSuccessAction(courses))
        .catch((error) => of(new LoadCoursesFailAction(error)));
    });
}