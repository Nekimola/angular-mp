import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: 'courses-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<h1>Page not found</h1>',
  styles:[`
    h1 {
        text-align: center;
        margin-top: 50px;
    }`
  ]
})
export class NotFoundPageComponent {

}