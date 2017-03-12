import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

import { Course } from "../models/course";
import { AddCourseAction, RemoveCourseAction } from "../actions/courses";
import { AppState } from "../store";

@Component({
  selector: 'courses-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `    
    <section class="content">
      <tool-bar></tool-bar>
      <courses-list [courses]="courses$ | async" (remove)="onRemove($event)"></courses-list>
    </section>
  `
})
export class CoursesPageComponent {
  courses$: Observable<Course[]>;

  constructor(private store: Store<AppState>) {
    this.courses$ = store.select('courses');

    this.store.dispatch(new AddCourseAction({
      id: Math.random().toString(36).slice(-8),
      title: 'Video course',
      duration: '1h 28min',
      description: 'Some random words random words random words random words random words',
      date: (new Date()).getTime()
    }));
  }

  onRemove (id) {
    this.store.dispatch(new RemoveCourseAction(id))
  }
}