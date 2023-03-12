import { Component, Input } from '@angular/core';
import { actions } from 'src/app/providers/todos.actions';
import { TodoModel } from 'src/app/providers/todos.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() todo!: TodoModel;
  isTranslateClicked: boolean = true;
  constructor(private store: Store) { }

  translateTodo() {
    this.isTranslateClicked = !this.isTranslateClicked;
  }

  toggleCompletion() {
    this.store.dispatch(
      actions.toggleTodoCompletionAction({
        id: this.todo.id
      })
    );
  }

  deleteTodo() {
    this.store.dispatch(
      actions.deleteTodoAction({
        id: this.todo.id
      })
    );
  }
}
