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

  @Output()
  remove = new Subject<string>();
}