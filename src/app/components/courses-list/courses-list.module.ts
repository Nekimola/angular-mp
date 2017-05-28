import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxPaginationModule } from 'ngx-pagination';

import { CoursesListComponent } from "./courses-list.component";
import { CourseItemComponent } from "../course-item/course-item.component";
import { HighlightCourDirective } from "../course-item/highlight-course.directive";
import { AppCommonModule } from "../../common/common.module";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    NgxPaginationModule,
    RouterModule
  ],
  declarations: [
    CoursesListComponent,
    CourseItemComponent,
    HighlightCourDirective
  ],
  exports: [CoursesListComponent]
})
export class CoursesListModule {

}