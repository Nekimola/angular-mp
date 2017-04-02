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
    const today = (new Date).getTime();

    if (this.course.date < today && this.course.date > (today - twoWeeks)) {
      this.element.nativeElement.classList.add('new');
    }

    if (this.course.date > today) {
      this.element.nativeElement.classList.add('upcoming');
    }
  }
}