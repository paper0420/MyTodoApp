import { Component } from '@angular/core';
import { todosSelector } from 'src/app/providers/todos.reducers';
import { TodoModel } from 'src/app/providers/todos.state';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'TodoApp';
  todos: TodoModel[] = [];
  constructor(private store: Store, private http: HttpClient) {
    this.loadTodos();
  }

  loadTodos() {
    this.store.select(todosSelector).subscribe((state) => (this.todos = state));
  }

  sendArrayToServer() {
    this.http.post('http://localhost:8000/saveData', this.todos).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
}
