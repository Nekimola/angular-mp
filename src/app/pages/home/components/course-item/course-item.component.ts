import { Component, Input } from "@angular/core";

@Component({
  selector: 'course-item',
  templateUrl: './course-item.html',
  styleUrls: ['./course-item.scss']
})
export class CourseItemComponent {
  @Input()
  course;
}