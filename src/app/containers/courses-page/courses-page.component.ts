import { Component, ChangeDetectionStrategy, OnInit, ViewChild } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

import { Course } from "../../models/course";
import { RemoveCourseAction, SearchCourseAction, LoadCoursesAction } from "../../actions/courses";
import { AppState } from "../../store";
import { getCourses, getCoursesLoading, getCoursesLoaded } from "../../reducers/courses";

@Component({
  selector: 'courses-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './courses-page.html'
})
export class CoursesPageComponent implements OnInit {
  courses$: Observable<Course[]>;
  isLoading$: Observable<boolean>;

  @ViewChild('confirmModal')
  modal: ModalComponent;

  courseIdToRemove: string;

  constructor(private store: Store<AppState>) {}

  ngOnInit () {
    this.store.select(getCoursesLoaded)
      .subscribe((isLoaded) => !isLoaded && this.store.dispatch(new LoadCoursesAction()));
    this.courses$ = this.store.select(getCourses);
    this.isLoading$ = this.store.select(getCoursesLoading);
  }

  onRemove (id: string) {
    this.courseIdToRemove = id;
    this.modal.open();
  }

  onModalClose () {
    this.store.dispatch(new RemoveCourseAction(this.courseIdToRemove));
    this.courseIdToRemove = '';
  }

  onSearch (query: string) {
    this.store.dispatch(new SearchCourseAction(query));
  }
}