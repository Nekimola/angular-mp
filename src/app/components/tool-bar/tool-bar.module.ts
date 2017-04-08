import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { ToolBarComponent } from "./tool-bar.component";

@NgModule({
  imports: [FormsModule, RouterModule],
  declarations: [ToolBarComponent],
  exports: [ToolBarComponent]
})
export class ToolBarModule {

}