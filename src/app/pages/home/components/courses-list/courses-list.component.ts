import { Component, OnInit } from "@angular/core";

import { Course } from "../../models/course";

@Component({
  selector: 'courses-list',
  templateUrl: './courses-list.html',
  styleUrls: ['./courses-list.scss']
})
export class CoursesListComponent implements OnInit {
  courses: Array<Course>;

  ngOnInit () {
    const course = {
      title: 'Video course',
      duration: '1h 28min',
      description: 'Some random words random words random words random words random words',
      date: (new Date()).getTime()
    };

    this.courses = [course];
  }
}