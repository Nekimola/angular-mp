import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FiltersModule } from './components/filters/filters.module';
import { ProgressBarModule } from "./components/progress-bar/progress-bar.module";
import { AddCategoryModule } from "./components/add-category/add-category.module";
import { AddTodoModule } from "./components/add-todo/add-todo.module";
import { CategoryListModule } from "./components/category-list/category-list.module";
import { TodoListModule } from "./components/todo-list/todo-list.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    BrowserModule,
    FiltersModule,
    ProgressBarModule,
    AddCategoryModule,
    AddTodoModule,
    CategoryListModule,
    TodoListModule,
    FormsModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
