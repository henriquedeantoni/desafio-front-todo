import React from 'react';
import { List, Task} from './styles';

enum TodoStatus {
  Todo = 'todo',
  InProgress = 'inprogress',
  Concluded = 'concluded',
}

interface TodoListProps {
  todos: Todo[];
  changeStatus: (id: number, status: TodoStatus) => void;
}

interface Todo {
  id: number;
  text: string;
  status: string;
}

const TodoList: React.FC<TodoListProps> = ({ todos, changeStatus }) => {
  return (
    <List>
      {todos.map(todo => (
        <Task key={todo.id}>
        <input
          type="checkbox"
          checked={todo.status === TodoStatus.Concluded}
          onChange={() =>
            changeStatus(
              todo.id,
              todo.status === TodoStatus.Concluded
                ? TodoStatus.Todo
                : TodoStatus.Concluded
            )
          }
        />
        <p>{todo.text}</p>
        <span>ID: {todo.id}</span>
        </Task>
      ))}
    </List>
  );
};

export default TodoList;