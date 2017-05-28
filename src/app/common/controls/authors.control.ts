import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Author } from "../../models/author";

@Component({
  selector: 'authors-select',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthorsSelectComponent),
      multi: true
    }
  ],
  template: `
    <ul class="form-control authors-list">
      <li *ngFor="let author of authors; let i = index;">
        <input type="checkbox" 
               (change)="onChange($event, author, i)" 
               [checked]="author.checked ? 'checked' : ''">  
          {{author.firstName}}
      </li>
    </ul>            
  `,
  styles: [`
    .authors-list {
      list-style: none;
      height: 100px;
      overflow: auto;
    }
  `]
})
export class AuthorsSelectComponent implements ControlValueAccessor {
  authors: Author[] = [];

  // this is the initial value set to the component
  writeValue (value: any) {
    if (value !== undefined) {
      this.authors = value;
    }

    this.propagateChange(this.authors.filter((a: Author) => a.checked));
  }

  private propagateChange (_: any) { }

  registerOnChange (fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched () { }

  private onChange (event: any, author: Author, index: number) {
    this.authors = [
      ...this.authors.slice(0, index),
      Object.assign({}, author, {checked: event.target.checked}),
      ...this.authors.slice(index + 1)
    ];

    this.propagateChange(this.authors.filter((a: Author) => a.checked));
  }
}