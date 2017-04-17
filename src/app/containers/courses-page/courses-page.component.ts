import { Component, ChangeDetectionStrategy, OnInit, ViewChild } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

import { Course } from "../../models/course";
import { AppState } from "../../store";
import { RemoveCourseAction, LoadCoursesAction } from "../../actions/courses";
import {
  getCourses,
  getCoursesLoading,
  getNoData,
  getTotalCourses
} from "../../reducers/courses";

@Component({
  selector: 'courses-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './courses-page.html',
  styleUrls: ['./courses-page.scss']
})
export class CoursesPageComponent implements OnInit {
  courses$: Observable<Course[]>;
  isLoading$: Observable<boolean>;
  isNoData$: Observable<boolean>;
  totalCourses$: Observable<number>;

  @ViewChild('confirmModal')
  modal: ModalComponent;

  courseIdToRemove: string;
  currentPage = 1;
  itemsPerPage = 10;

  constructor(private store: Store<AppState>) {}

  ngOnInit () {
    this.loadCourses();

    this.courses$ = this.store.select(getCourses);
    this.isLoading$ = this.store.select(getCoursesLoading);
    this.isNoData$ = this.store.select(getNoData);
    this.totalCourses$ = this.store.select(getTotalCourses);
  }

  loadCourses (searchQuery = '') {
    this.store.dispatch(new LoadCoursesAction({
      start: this.itemsPerPage * (this.currentPage - 1),
      count: this.itemsPerPage,
      query: searchQuery
    }));
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
    this.loadCourses(query);
  }

  onPageChange (currentPage: number) {
    this.currentPage = currentPage;
    this.loadCourses();
  }
}