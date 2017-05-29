import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";

import { AppState } from "../../store";
import { Author } from "../../models/author";
import { LoadAuthorsAction } from "../../actions/authors";
import { getAuthors, getAuthorsProgress } from "../../reducers/authors";
import { AddCourseFormModel } from "../../models/add-course-form";
import { AddCourseAction, GetCourseAction } from "../../actions/courses";
import { getCoursesLoading, getEditCourse } from "../../reducers/courses";
import { Course } from "../../models/course";

@Component({
  selector: 'add-course-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="content">
      <add-course-form [authors]="authors$ | async"
                       [editCourse]="editCourse$ | async"
                       (submit)="onSubmit($event)"></add-course-form>
      <spinner [show]="(isAuthorsLoading$ | async) || (isCourseSaving$ | async)"></spinner>
    </section>
  `
})
export class AddCoursePageComponent implements OnInit {
  authors$: Observable<Author[]>;
  isAuthorsLoading$: Observable<boolean>;
  isCourseSaving$: Observable<boolean>;
  editCourse$: Observable<Course>;

  constructor (
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) {}

  ngOnInit () {
    this.store.dispatch(new LoadAuthorsAction());
    this.authors$ = this.store.select(getAuthors);
    this.isAuthorsLoading$ = this.store.select(getAuthorsProgress);
    this.isCourseSaving$ = this.store.select(getCoursesLoading);
    this.editCourse$ = this.store.select(getEditCourse);
    this.route.params
      .subscribe((param: any) => {
        this.store.dispatch(new GetCourseAction(param.courseId))
      });
  }

  onSubmit (course: AddCourseFormModel) {
    this.store.dispatch(new AddCourseAction(course));
  }
}