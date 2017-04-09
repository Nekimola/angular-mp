import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { AddCourseFormComponent } from "./add-course-form.component";
import { CourseDurationComponent } from "../course-duration/course-duration.component";
import { AppCommonModule } from "../../common/common.module";

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AppCommonModule,
    RouterModule
  ],
  declarations: [
    AddCourseFormComponent,
    CourseDurationComponent
  ],
  exports: [
    AddCourseFormComponent
  ]
})
export class AddCourseFormModule {}