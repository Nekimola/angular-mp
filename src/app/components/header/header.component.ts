import { Component, Output } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: 'header.html',
  styleUrls: ['header.scss']
})
export class AppHeader {
  @Output()
  logout = new Subject();
}