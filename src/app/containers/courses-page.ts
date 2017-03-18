import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

import { Course } from "../models/course";
import { RemoveCourseAction, SearchCourseAction } from "../actions/courses";
import { AppState } from "../store";

@Component({
  selector: 'courses-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `    
    <section class="content">
      <tool-bar (search)="onSearch($event)"></tool-bar>
      <courses-list [courses]="courses$ | async" (remove)="onRemove($event)"></courses-list>
    </section>
  `
})
export class CoursesPageComponent implements OnInit {
  courses$: Observable<Course[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit () {
    this.courses$ = this.store.select('courses');
  }

  onRemove (id) {
    this.store.dispatch(new RemoveCourseAction(id));
  }

  onSearch (query) {
    this.store.dispatch(new SearchCourseAction(query));
  }
}