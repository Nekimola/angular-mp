import { Component, Input } from "@angular/core";

import { Course } from "../../models/course";

@Component({
  selector: 'course-item',
  templateUrl: './course-item.html',
  styleUrls: ['./course-item.scss']
})
export class CourseItemComponent {
  @Input()
  course: Course;
}