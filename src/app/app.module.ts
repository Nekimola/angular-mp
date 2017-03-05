import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";

import { AppComponent } from './app.component';
import { AppHeaderModule } from "./common/components/header/header.module";
import { ToolBarModule } from "./pages/home/components/tool-bar/tool-bar.module";
import { CoursesListModule } from "./pages/home/components/courses-list/courses-list.module";
import { rootReducer } from "./store";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppHeaderModule,
    ToolBarModule,
    CoursesListModule,
    StoreModule.provideStore(rootReducer),
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
