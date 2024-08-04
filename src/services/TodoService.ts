import api from '../api/api.ts';
import {TodoStatus} from '../types/TodoStatus.ts';
import {Todo} from '../types/Todo.ts';

export const todosList = async ():Promise<Todo[]> => {
  try {
    const response = await api.get('https://everest-interview-public-files.s3.amazonaws.com/input.json');
    
    return response.data.todos
    .filter((todo: any) => todo.id && typeof todo.content === 'string' && typeof todo.checked === 'boolean')
    .map((todo: any)=>({
        id: todo.id,
        checked: todo.checked,
        content: todo.content,
        status: TodoStatus.Todo,
    }));
    } catch (error) {
        console.error('Error on get todos', error);
        throw error;
    }
};



