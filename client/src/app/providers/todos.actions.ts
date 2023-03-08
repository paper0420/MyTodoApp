import { createAction, props } from '@ngrx/store';
import { TodoModel } from './todos.state';

const addTodoAction = createAction('[TODO] ADD_TODO', props<TodoModel>());
const deleteTodoAction = createAction('[TODO] DELETE_TODO', props<TodoModel>());
const translateTodoAction = createAction(
  '[TODO] TRANS_TODO',
  props<TodoModel>()
);
export const actions = { addTodoAction, deleteTodoAction, translateTodoAction };
