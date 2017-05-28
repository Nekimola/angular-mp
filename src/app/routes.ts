import { Routes } from '@angular/router';

import { CoursesPageComponent } from "./containers/courses-page/courses-page.component";
import { LoginPageComponent } from "./containers/login-page/login-page.component";
import { AddCoursePageComponent } from "./containers/add-course-page/add-course.component";
import { IsLoggedInGuard } from "./guards/is-logged-in";
import { NotFoundPageComponent } from "./containers/not-found-page/not-found-page.component";

export const routes: Routes = [
  {
    path: '',
    canActivate: [IsLoggedInGuard],
    component: CoursesPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'add-course',
    canActivate: [IsLoggedInGuard],
    component: AddCoursePageComponent
  },
  {
    path: 'edit-course/:courseId',
    canActivate: [IsLoggedInGuard],
    component: AddCoursePageComponent
  },
  {
    component: NotFoundPageComponent,
    path: "404",
  },
  {
    path: "**",
    redirectTo: '404'
  }
];