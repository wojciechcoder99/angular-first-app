import { TodoItem } from "src/models/todoItem";

export class TodoList {
    constructor(public user: string, private todoItems: TodoItem[]) {

    }

    public getItems(): readonly TodoItem[] {
        return this.todoItems;
    }

    public addItem(task: string): boolean {
        if (task) {
            this.todoItems.push(new TodoItem(task));
            return true;
        }
        else return false;
    }

    public getItemsWith(status: boolean): TodoItem[] {
        return this.todoItems.filter(item => item.completed == status);
    }
}