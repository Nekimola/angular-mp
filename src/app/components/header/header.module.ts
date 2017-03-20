import { NgModule } from "@angular/core";
import { AppHeader } from "./header.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [RouterModule, CommonModule],
  declarations: [AppHeader],
  exports: [AppHeader]
})
export class AppHeaderModule {

}