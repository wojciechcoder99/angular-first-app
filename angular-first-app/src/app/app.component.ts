import { Component } from '@angular/core';
import { TodoList } from './todoList';
import { TodoItem } from 'src/models/todoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private list = new TodoList("Tom", [
    new TodoItem("Shopping", true),
    new TodoItem("Wash the dishes"),
    new TodoItem("Clean the car")
  ]);

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.list.getItems()
      .filter(item => !item.completed).length
  }

  get completedItems(): readonly TodoItem[] {
    return this.list.getItemsWith(true);
  }

  get notCompletedItems(): readonly TodoItem[] {
    return this.list.getItemsWith(false);
  }
  get items(): readonly TodoItem[] {
    return this.list.getItems();
  }
}
