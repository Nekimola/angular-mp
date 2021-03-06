import { Component, Input, ChangeDetectionStrategy, OnChanges, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { Author } from "../../models/author";
import { Course } from "../../models/course";

@Component({
  selector: 'add-course-form',
  templateUrl: './add-course-form.html',
  styleUrls: ['./add-course-form.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCourseFormComponent implements OnChanges, OnInit {
  form: FormGroup;

  @Input()
  authors: Author[] = [];

  @Input()
  editCourse: Course;

  @Output()
  submit = new EventEmitter();

  constructor (private fb: FormBuilder) {}

  ngOnInit () {
    this.createForm();
  }

  ngOnChanges (changes: any) {
    if (!this.form || !changes.authors || !changes.authors.currentValue) {
      return;
    }

    this.form.patchValue({
      authors: changes.authors.currentValue
    });
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
      authors: [ this.authors, [
        Validators.required]
      ],
    });
  }

  onSubmit (event: any) {
    event.stopPropagation();
    this.submit.emit(this.form.value)
  }
}