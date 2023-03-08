import {
  createReducer,
  on,
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';
import { actions } from './todos.actions';
import { todos } from './todos.state';
import { TodoModel } from './todos.state';

export const todoReducer = createReducer(
  todos,
  on(actions.addTodoAction, (state, todo) => {
    return [...state, todo];
  }),
  on(actions.deleteTodoAction, (state, todo) => {
    let todos = state.filter((t) => t.id != todo.id);
    return [...todos];
  })
);

export const todosSelector = createSelector(
  createFeatureSelector('todos'),
  (todos: TodoModel[]) => todos
);
