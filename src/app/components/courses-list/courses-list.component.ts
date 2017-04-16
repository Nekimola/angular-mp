import { Component, Input, ChangeDetectionStrategy, Output } from "@angular/core";
import { Subject } from "rxjs";

import { Course } from "../../models/course";

@Component({
  selector: 'courses-list',
  templateUrl: 'courses-list.html',
  styleUrls: ['courses-list.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListComponent {
  @Input()
  courses: Course[];

  @Input()
  currentPage: number;

  @Input()
  itemsPerPage: number;

  @Input()
  totalItems: number;

  @Output()
  remove = new Subject<string>();

  @Output()
  pageChange = new Subject<string>();
}