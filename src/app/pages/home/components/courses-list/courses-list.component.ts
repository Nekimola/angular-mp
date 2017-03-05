import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

import { Course } from "../../models/course";

@Component({
  selector: 'courses-list',
  templateUrl: './courses-list.html',
  styleUrls: ['./courses-list.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListComponent {
  @Input()
  courses: Course[];
}