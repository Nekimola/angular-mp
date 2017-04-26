import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'duration-input',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DurationInputComponent),
      multi: true
    }
  ],
  template: `
    <div class="col-sm-2">
      <input type="text"
             class="form-control"
             name="duration"
             [value]="currentValue"
             (change)="onChange($event)" 
             (keyup)="onChange($event)">
    </div>
    <div class="col-sm-3 duration">{{currentValue | duration}}</div>        
  `
})
export class DurationInputComponent implements ControlValueAccessor {
  currentValue: any;

  // this is the initial value set to the component
  writeValue (value: any) {
    if (value !== undefined) {
      this.currentValue = value;
    }
  }

  registerOnChange (fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched () { }

  private propagateChange = (_: any) => { };

  private onChange (event: any) {
    // update the form
    this.currentValue = event.target.value;
    this.propagateChange(this.currentValue);
  }
}