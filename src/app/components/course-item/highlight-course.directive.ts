import { Directive, Input, OnInit, ElementRef } from "@angular/core";

import { Course } from "../../models/course";

@Directive({
  selector: '[highlightCourse]'
})
export class HighlightCourDirective implements OnInit {
  @Input('highlightCourse') course: Course;

  constructor (private element: ElementRef) { }

  ngOnInit () {
    this.highlight();
  }

  highlight () {
    const twoWeeks = 1000 * 60 * 60 * 24 * 14;
    const today = (new Date()).getTime();
    const courseDate = new Date(this.course.date).getTime();

    if (courseDate < today && courseDate > (today - twoWeeks)) {
      this.element.nativeElement.classList.add('new');
    }

    if (courseDate > today) {
      this.element.nativeElement.classList.add('upcoming');
    }
  }
}