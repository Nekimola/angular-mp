import { Component } from '@angular/core';
import { Observable } from "rxjs";
import '../../public/css/styles.css';
import { Store } from "@ngrx/store";

import { AppState } from "./store";
import { Course } from "./pages/home/models/course";
import { AddCourseAction } from "./pages/home/actions/courses";

@Component({
  selector: 'todo-app',
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
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
