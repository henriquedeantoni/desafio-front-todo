import api from '../api/api';

export enum TodoStatus {
    Todo = 'todo',
    InProgress = 'inprogress',
    Concluded = 'concluded',
  }

export interface Todo {
    id: number;
    content: string | { title: string };
    checked: boolean;
    status: TodoStatus;
}

export const todosList = async ():Promise<Todo[]> => {
  try {
    const response = await api.get('/todos');
    return response.data.todos.map((todo: any)=>({
        ...todo,
        checked: typeof todo.checked === 'boolean' ? todo.checked : !! todo.checked,
        content: typeof todo.checked === 'string' ? todo.checked : todo.content.title,
    }));
    } catch (error) {
        console.error('Error ao buscar os todos:', error);
        throw error;
    }
};
