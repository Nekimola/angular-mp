import { NgModule } from "@angular/core";

import { DurationPipe } from "./pipes/duration.pipe";
import { OrderByPipe } from "./pipes/order-by.pipe";
import { DurationInputComponent } from "./controls/duration.control";
import { AuthorsSelectComponent } from "./controls/authors.control";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DurationPipe,
    OrderByPipe,
    DurationInputComponent,
    AuthorsSelectComponent
  ],
  exports: [
    DurationPipe,
    OrderByPipe,
    DurationInputComponent,
    AuthorsSelectComponent
  ]
})
export class AppCommonModule {

}