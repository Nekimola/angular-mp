import { Component, Output, ChangeDetectionStrategy, Input } from "@angular/core";
import { Subject } from "rxjs";

import { LoginFormModel } from "../../models/login-form";

@Component({
  selector: 'login-form',
  templateUrl: './login-form.html',
  styleUrls: ['./login-form.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {
  user: LoginFormModel = {
    login: '',
    password: ''
  };

  @Input()
  inProgress: boolean;

  @Output()
  submit = new Subject<LoginFormModel>();
}