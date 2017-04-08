import { Routes } from '@angular/router';

import { CoursesPageComponent } from "./containers/courses-page/courses-page.component";
import { LoginPageComponent } from "./containers/login-page/login-page.component";
import { AddCoursePageComponent } from "./containers/add-course-page/add-course.component";
import { IsLoggedInGuard } from "./guards/is-logged-in";

export const routes: Routes = [
  {
    path: '',
    component: CoursesPageComponent
  },
  {
    path: 'login',
    canActivate: [IsLoggedInGuard],
    component: LoginPageComponent
  },
  {
    path: 'add-course',
    component: AddCoursePageComponent
  }
];