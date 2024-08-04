import { TodoStatus } from './TodoStatus';

export interface Todo {
  id: number;
  content: string | { title: string };
  checked: boolean;
  status: TodoStatus;
}
