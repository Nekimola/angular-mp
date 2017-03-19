import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: 'spinner',
  template: `<img src="/public/images/spinner.gif" class="spinner" *ngIf="show" alt="">`,
  styleUrls: ['./spinner.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {
  @Input()
  show: boolean;
}