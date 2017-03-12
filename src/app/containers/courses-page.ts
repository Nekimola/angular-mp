import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

import { Course } from "../models/course";
import { AddCourseAction } from "../actions/courses";
import { AppState } from "../store";

@Component({
  selector: 'courses-page',
  template: `    
    <section class="content">
      <tool-bar></tool-bar>
      <courses-list [courses]="courses$ | async"></courses-list>
    </section>
  `
})
export class CoursesPageComponent {
  courses$: Observable<Course[]>;

  constructor(private store: Store<AppState>) {
    this.courses$ = store.select('courses');

    this.store.dispatch(new AddCourseAction({
      title: 'Video course',
      duration: '1h 28min',
      description: 'Some random words random words random words random words random words',
      date: (new Date()).getTime()
    }));
  }
}