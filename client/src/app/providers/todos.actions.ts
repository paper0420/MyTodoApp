import { createAction, props } from '@ngrx/store';
import { TodoModel } from './todos.state';

const addTodoAction = createAction('[TODO] ADD_TODO', props<TodoModel>());
const deleteTodoAction = createAction('[id] DELETE_TODO', props<{ id: number }>());
const translateTodoAction = createAction(
  '[TODO] TRANS_TODO',
  props<TodoModel>()
);
export const actions = { addTodoAction, deleteTodoAction, translateTodoAction };
