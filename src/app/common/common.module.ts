import { NgModule } from "@angular/core";

import { DurationPipe } from "./pipes/duration.pipe";
import { OrderByPipe } from "./pipes/order-by.pipe";

@NgModule({
  declarations: [
    DurationPipe,
    OrderByPipe
  ],
  exports: [
    DurationPipe,
    OrderByPipe
  ]
})
export class AppCommonModule {

}