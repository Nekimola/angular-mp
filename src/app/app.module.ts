import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { RouterModule } from "@angular/router";
import { routes } from "./routes";

import { AppComponent } from './containers/app';
import { AppHeaderModule } from "./components/header/header.module";
import { ToolBarModule } from "./components/tool-bar/tool-bar.module";
import { CoursesListModule } from "./components/courses-list/courses-list.module";
import { rootReducer } from "./store";
import { CoursesPageComponent } from "./containers/courses-page";
import { CoursesEffects } from "./effects/courses";
import { CoursesService } from "./services/courses";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppHeaderModule,
    ToolBarModule,
    CoursesListModule,
    StoreModule.provideStore(rootReducer),
    RouterModule.forRoot(routes, { useHash: false }),
    EffectsModule.run(CoursesEffects)
  ],
  declarations: [
    AppComponent,
    CoursesPageComponent
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
