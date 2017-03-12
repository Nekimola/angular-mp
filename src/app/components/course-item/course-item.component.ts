import { Component, Input, ChangeDetectionStrategy, Output } from "@angular/core";
import { Subject } from "rxjs";

import { Course } from "../../models/course";

@Component({
  selector: 'course-item',
  templateUrl: 'course-item.html',
  styleUrls: ['course-item.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent {
  @Input()
  course: Course;

  @Output()
  remove = new Subject<string>();
}