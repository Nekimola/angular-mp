import { Component, Input } from "@angular/core";

@Component({
  selector: 'spinner',
  template: `<img src="/public/images/spinner.gif" class="spinner" *ngIf="show" alt="">`,
  styleUrls: ['./spinner.scss']
})
export class SpinnerComponent {
  @Input()
  show: boolean;
}