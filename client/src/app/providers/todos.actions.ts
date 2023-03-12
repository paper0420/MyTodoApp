import { createAction, props } from '@ngrx/store';
import { TodoModel } from './todos.state';

const addTodoAction = createAction('[TODO] ADD_TODO', props<TodoModel>());
const deleteTodoAction = createAction('[id] DELETE_TODO', props<{ id: number }>());
const toggleTodoCompletionAction = createAction('[id] TOGGLE_TODO_COMPLETION', props<{ id: number }>());

export const actions = {
  addTodoAction,
  deleteTodoAction,
  toggleTodoCompletionAction
};
