import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { RouterModule } from "@angular/router";
import { routes } from "./routes";

import { AppComponent } from './containers/app.component';
import { AppHeaderModule } from "./components/header/header.module";
import { ToolBarModule } from "./components/tool-bar/tool-bar.module";
import { CoursesListModule } from "./components/courses-list/courses-list.module";
import { rootReducer } from "./store";
import { CoursesPageComponent } from "./containers/courses-page/courses-page.component";
import { CoursesEffects } from "./effects/courses";
import { CoursesService } from "./services/courses";
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { Ng2Bs3ModalModule } from "ng2-bs3-modal/ng2-bs3-modal";
import { LoginPageComponent } from "./containers/login-page/login-page.component";
import { AuthEffects } from "./effects/auth";
import { AuthService } from "./services/auth";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppHeaderModule,
    ToolBarModule,
    CoursesListModule,
    StoreModule.provideStore(rootReducer),
    RouterModule.forRoot(routes, { useHash: false }),
    EffectsModule.run(CoursesEffects),
    EffectsModule.run(AuthEffects),
    Ng2Bs3ModalModule
  ],
  declarations: [
    AppComponent,
    CoursesPageComponent,
    LoginPageComponent,
    SpinnerComponent
  ],
  providers: [
    CoursesService,
    AuthService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
