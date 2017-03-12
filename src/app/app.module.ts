import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { RouterModule } from "@angular/router";
import { routes } from "./routes";

import { AppComponent } from './containers/app';
import { AppHeaderModule } from "./components/header/header.module";
import { ToolBarModule } from "./components/tool-bar/tool-bar.module";
import { CoursesListModule } from "./components/courses-list/courses-list.module";
import { rootReducer } from "./store";
import { CoursesPageComponent } from "./containers/courses-page";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppHeaderModule,
    ToolBarModule,
    CoursesListModule,
    StoreModule.provideStore(rootReducer),
    RouterModule.forRoot(routes, { useHash: false })
  ],
  declarations: [
    AppComponent,
    CoursesPageComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
