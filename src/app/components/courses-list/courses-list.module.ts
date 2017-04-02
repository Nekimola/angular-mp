import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CoursesListComponent } from "./courses-list.component";
import { CourseItemComponent } from "../course-item/course-item.component";
import { HighlightCourDirective } from "../course-item/highlight-course.directive";


@NgModule({
  imports: [CommonModule],
  declarations: [CoursesListComponent, CourseItemComponent, HighlightCourDirective],
  exports: [CoursesListComponent]
})
export class CoursesListModule {

}