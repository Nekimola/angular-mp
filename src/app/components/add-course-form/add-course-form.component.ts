import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'add-course-form',
  templateUrl: './add-course-form.html',
  styleUrls: ['./add-course-form.scss']
})
export class AddCourseFormComponent {
  form: FormGroup;

  constructor (private fb: FormBuilder) {
    this.createForm()
  }

  createForm () {
    this.form = this.fb.group({
      title: [ '', [
        Validators.required,
        Validators.maxLength(50)
      ]],
      description: [ '', [
        Validators.required,
        Validators.maxLength(500)
      ]],
      date: [ '', Validators.required ],
      duration: [ '', Validators.required ],
    });
  }
}