import { NgModule } from "@angular/core";
import { AppHeader } from "./header.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [RouterModule],
  declarations: [AppHeader],
  exports: [AppHeader]
})
export class AppHeaderModule {

}