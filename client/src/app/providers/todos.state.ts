export interface TodoModel {
  id: number;
  title: string;
  isCompleted: boolean;
  isDeleted: boolean;
}

export let todos: TodoModel[] = [];
