import { Component, Output } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  selector: 'tool-bar',
  templateUrl: 'tool-bar.html',
  styleUrls: ['tool-bar.scss']
})
export class ToolBarComponent {
  query: string;

  @Output()
  search = new Subject<string>();
}