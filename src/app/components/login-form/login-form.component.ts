import { Component, Output, ChangeDetectionStrategy, Input, EventEmitter } from "@angular/core";
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
  onSubmit = new EventEmitter<LoginFormModel>();

  submit (event: any) {
    event.stopPropagation();
    this.onSubmit.emit(this.user);
    this.user = {
      login: '',
      password: ''
    };
  }
}