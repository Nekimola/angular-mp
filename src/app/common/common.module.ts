import { NgModule } from "@angular/core";

import { DurationPipe } from "./pipes/duration.pipe";
import { OrderByPipe } from "./pipes/order-by.pipe";
import { DurationInputComponent } from "./controls/duration.control";

@NgModule({
  declarations: [
    DurationPipe,
    OrderByPipe,
    DurationInputComponent
  ],
  exports: [
    DurationPipe,
    OrderByPipe,
    DurationInputComponent
  ]
})
export class AppCommonModule {

}