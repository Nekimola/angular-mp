import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

import { Course } from "../../models/course";

@Component({
  selector: 'course-item',
  templateUrl: './course-item.html',
  styleUrls: ['./course-item.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent {
  @Input()
  course: Course;
}