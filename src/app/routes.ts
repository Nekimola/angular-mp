import { Routes } from '@angular/router';

import { CoursesPageComponent } from "./containers/courses-page/courses-page.component";
import { LoginPageComponent } from "./containers/login-page/login-page.component";


export const routes: Routes = [
  {
    path: '',
    component: CoursesPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  }
];