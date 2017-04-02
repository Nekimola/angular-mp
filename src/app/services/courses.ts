import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { of } from "rxjs/observable/of";

import { Course } from "../models/course";

@Injectable()
export class CoursesService {
  courses: Course[] = [
    {
      id: Math.random().toString(36).slice(-8),
      title: 'Video course 1 (new)',
      duration: '1h 28min',
      description: 'Some random words random words random words random words random words',
      date: 1490641575025
    }, {
      id: Math.random().toString(36).slice(-8),
      title: 'Video course 2',
      duration: '2h 12min',
      description: 'Some random words random words random words random words random words',
      date: 1489864010471
    }, {
      id: Math.random().toString(36).slice(-8),
      title: 'Video course 3 (upcoming)',
      duration: '0h 2min',
      description: 'Some random words random words random words random words random words',
      date: 1492456039363
    }
  ];

  load (): Observable<Course[]> {
    return of(this.courses)
      .delay(1000);
  }

  remove (id: string) {
    return of({})
      .delay(500);
  }
}