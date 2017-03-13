import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ToolBarComponent } from "./tool-bar.component";

@NgModule({
  imports: [FormsModule],
  declarations: [ToolBarComponent],
  exports: [ToolBarComponent]
})
export class ToolBarModule {

}