export interface TodoModel {
  id: number;
  title: string;
  isCompleted: boolean;
}

export let todos: TodoModel[] = [
  {
    id: 1,
    title: 'do hw',
    isCompleted: false,
  },
  {
    id: 2,
    title: 'watch dishes',
    isCompleted: true,
  },
];
