import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  isTranslateClicked: boolean = false;

  translateTodo() {
    this.isTranslateClicked = !this.isTranslateClicked;
  }
  deleteTodo() {}
}
