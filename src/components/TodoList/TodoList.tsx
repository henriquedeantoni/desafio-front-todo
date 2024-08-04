import React, { useState, useEffect } from 'react';
import { List, Task, Title, DeleteButton, ApproveButton} from './styles';
import  {Todo, TodoStatus} from '../../services/TodoService'


interface TodoListProps {
  todos: Todo[];
  changeStatus: (id: number, status: TodoStatus) => void;
  deleteTodo: (id: number) => void;
  toggleCheck: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, changeStatus, deleteTodo, toggleCheck }) => {
  const handleApprove = (todo: Todo) => {
    if (todo.status === TodoStatus.Todo) {
      changeStatus(todo.id, TodoStatus.InProgress);
    } else if (todo.status === TodoStatus.InProgress) {
      changeStatus(todo.id, TodoStatus.Concluded);
    }
  };
  
  return (
    <List>
      {todos.map(todo => (
        <Task key={todo.id}>
          <Title>Task ID: {todo.id}</Title>
          <p>{typeof todo.content === 'string' ? todo.content : todo.content.title}</p>
            <label>
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => toggleCheck(todo.id)}
              />
              Checked by Team
            </label>
            <div>
              {todo.status !== TodoStatus.Concluded && (
                <ApproveButton onClick={() => handleApprove(todo)}>Approve</ApproveButton>
              )}
              <DeleteButton onClick={() => deleteTodo(todo.id)}>Delete</DeleteButton>
            </div>
        </Task>
      ))}
    </List>
  );
};

export default TodoList;