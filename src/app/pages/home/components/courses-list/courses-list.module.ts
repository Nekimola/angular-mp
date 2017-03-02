import { NgModule } from "@angular/core";
import { CoursesListComponent } from "./courses-list.component";
import { CourseItemComponent } from "../course-item/course-item.component";

@NgModule({
  declarations: [CoursesListComponent, CourseItemComponent],
  exports: [CoursesListComponent]
})
export class CoursesListModule {

}