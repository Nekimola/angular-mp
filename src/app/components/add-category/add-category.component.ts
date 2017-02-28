import { Component, Output } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  selector: 'add-category',
  templateUrl: './add-category.html',
  styleUrls: ['./add-category.scss']
})
export class AddCategoryComponent {
  @Output()
  onAdd = new Subject();

  category;
}