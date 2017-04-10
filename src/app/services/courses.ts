import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { of } from "rxjs/observable/of";

import { Course } from "../models/course";

@Injectable()
export class CoursesService {
  courses = [
    {
      id: Math.random().toString(36).slice(-8),
      title: 'Video course 1 (new)',
      duration: 75,
      description: 'Some random words random words random words random words random words',
      topRated: false,
      date: 1490959575025,
      someField: 'asd'
    }, {
      id: Math.random().toString(36).slice(-8),
      title: 'Video course 2',
      duration: 34,
      description: 'Some random words random words random words random words random words',
      topRated: true,
      date: 1489864010471,
      someField: 'asd'
    }, {
      id: Math.random().toString(36).slice(-8),
      title: 'Video course 3 (upcoming)',
      duration: 156,
      description: 'Some random words random words random words random words random words',
      topRated: false,
      date: 1492456039363,
      someField: 'asd'
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