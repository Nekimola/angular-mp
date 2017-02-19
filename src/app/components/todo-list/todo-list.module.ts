import { NgModule } from "@angular/core";
import { TodoListComponent } from "./todo-list.component";

@NgModule({
  declarations: [TodoListComponent],
  exports: [TodoListComponent]
})
export class TodoListModule {

}