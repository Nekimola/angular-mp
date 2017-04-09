import { Component } from "@angular/core";

@Component({
  selector: 'course-duration',
  template: `
    <div class="col-sm-2">
      <input type="number"
             required
             class="form-control"
             name="duration"/>
    </div>
    <div class="col-sm-3">3h 34min</div>
  `
})
export class CourseDurationComponent {

}