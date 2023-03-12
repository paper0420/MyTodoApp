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
  on(actions.deleteTodoAction, (state, arg) => {
    let item = state.find((t) => t.id == arg.id);

    if (item == null) {
      return state;  
    }

    return [
      ...state.filter(t => t != item),
      {
        id: item.id,
        isCompleted: item.isCompleted,
        title: item.title,
        isDeleted: true,
      }
    ];
  })
);

export const todosSelector = createSelector(
  createFeatureSelector('todos'),
  (todos: TodoModel[]) => todos
);
