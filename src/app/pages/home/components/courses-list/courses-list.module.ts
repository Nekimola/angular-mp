import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CoursesListComponent } from "./courses-list.component";
import { CourseItemComponent } from "../course-item/course-item.component";


@NgModule({
  imports: [CommonModule],
  declarations: [CoursesListComponent, CourseItemComponent],
  exports: [CoursesListComponent]
})
export class CoursesListModule {

}