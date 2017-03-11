import { Component } from '@angular/core';
import { Observable } from "rxjs";
import '../../../public/css/styles.css';
import { Store } from "@ngrx/store";

import { AppState } from "../store";
import { Course } from "../models/course";
import { AddCourseAction } from "../actions/courses";

@Component({
  selector: 'courses-app',
  template: `
    <main>
      <app-header></app-header>
      <section class="content">
        <tool-bar></tool-bar>
        <courses-list [courses]="courses$ | async"></courses-list>
      </section>
    </main>
  `
})
export class AppComponent {
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
