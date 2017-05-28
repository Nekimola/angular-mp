import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import { AppState } from "../../store";
import { Observable } from "rxjs";
import { Author } from "../../models/author";
import { LoadAuthorsAction } from "../../actions/authors";
import { getAuthors } from "../../reducers/authors";
import { AddCourseFormModel } from "../../models/add-course-form";
import { AddCourseAction } from "../../actions/courses";

@Component({
  selector: 'add-course-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="content">
      <add-course-form [authors]="authors$ | async" 
                       (submit)="onSubmit($event)"></add-course-form>
    </section>
  `
})
export class AddCoursePageComponent implements OnInit {
  authors$: Observable<Author[]>;

  constructor (private store: Store<AppState>) {}

  ngOnInit () {
    this.store.dispatch(new LoadAuthorsAction());
    this.authors$ = this.store.select(getAuthors);
  }

  onSubmit (course: AddCourseFormModel) {
    this.store.dispatch(new AddCourseAction(course));
  }
}