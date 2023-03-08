export interface TodoModel {
  id: number;
  title: string;
  isCompleted: boolean;
}

export let todos: TodoModel[] = [];
