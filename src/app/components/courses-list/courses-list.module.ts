import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CoursesListComponent } from "./courses-list.component";
import { CourseItemComponent } from "../course-item/course-item.component";
import { HighlightCourDirective } from "../course-item/highlight-course.directive";
import { DurationPipe } from "../course-item/duration.pipe";
import { OrderByPipe } from "./order-by.pipe";


@NgModule({
  imports: [CommonModule],
  declarations: [
    CoursesListComponent,
    CourseItemComponent,
    HighlightCourDirective,
    DurationPipe,
    OrderByPipe
  ],
  exports: [CoursesListComponent]
})
export class CoursesListModule {

}