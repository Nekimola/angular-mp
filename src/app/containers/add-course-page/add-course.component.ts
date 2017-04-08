import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import { AppState } from "../../store";

@Component({
  selector: 'add-course-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="content">
      <add-course-form></add-course-form>
    </section>
  `
})
export class AddCoursePageComponent implements OnInit {

  constructor (private store: Store<AppState>) {}

  ngOnInit () {
  }

  onSubmit () {
  }
}