import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { RouterModule } from "@angular/router";
import { Ng2Bs3ModalModule } from "ng2-bs3-modal/ng2-bs3-modal";
import { HttpModule } from "@angular/http";

import { routes } from "./routes";
import { rootReducer } from "./store";
import { AppComponent } from './containers/app.component';
import { AppHeaderModule } from "./components/header/header.module";
import { ToolBarModule } from "./components/tool-bar/tool-bar.module";
import { CoursesListModule } from "./components/courses-list/courses-list.module";
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { CoursesPageComponent } from "./containers/courses-page/courses-page.component";
import { LoginPageComponent } from "./containers/login-page/login-page.component";
import { CoursesEffects } from "./effects/courses";
import { CoursesService } from "./services/courses";
import { AuthEffects } from "./effects/auth";
import { AuthService } from "./services/auth";
import { IsLoggedInGuard } from "./guards/is-logged-in";
import { AddCoursePageComponent } from "./containers/add-course-page/add-course.component";
import { AddCourseFormModule } from "./components/add-course-form/add-course-form.module";
import { AppCommonModule } from "./common/common.module";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppHeaderModule,
    ToolBarModule,
    CoursesListModule,
    AddCourseFormModule,
    HttpModule,
    StoreModule.provideStore(rootReducer),
    RouterModule.forRoot(routes, { useHash: false }),
    EffectsModule.run(CoursesEffects),
    EffectsModule.run(AuthEffects),
    Ng2Bs3ModalModule,
    AppCommonModule
  ],
  declarations: [
    AppComponent,
    CoursesPageComponent,
    LoginPageComponent,
    LoginFormComponent,
    AddCoursePageComponent,
    SpinnerComponent
  ],
  providers: [
    CoursesService,
    AuthService,
    IsLoggedInGuard
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
