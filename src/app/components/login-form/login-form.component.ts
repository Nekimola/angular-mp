import { Component, Output, ChangeDetectionStrategy } from "@angular/core";
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

  @Output()
  submit = new Subject<LoginFormModel>();
}