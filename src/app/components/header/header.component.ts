import { Component, Output, Input } from "@angular/core";
import { Subject } from "rxjs";
import { User } from "../../models/user";

@Component({
  selector: 'app-header',
  templateUrl: 'header.html',
  styleUrls: ['header.scss']
})
export class AppHeader {
  @Input()
  user: User;

  @Input()
  isLoginPage: boolean;

  @Output()
  logout = new Subject();
}