import React from 'react';
import { List, ListItem, TodoButton, InProgressButton, ConcludedButton } from './styles';

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
        <ListItem key={todo.id}>
          <p>{todo.text}</p>
          <div className="flex space-x-2">
            <TodoButton onClick={() => changeStatus(todo.id, TodoStatus.Todo)}>
              Todo
            </TodoButton>
            <InProgressButton onClick={() => changeStatus(todo.id, TodoStatus.InProgress)}>
              In Progress
            </InProgressButton>
            <ConcludedButton onClick={() => changeStatus(todo.id, TodoStatus.Concluded)}>
              Concluded
            </ConcludedButton>
          </div>
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;