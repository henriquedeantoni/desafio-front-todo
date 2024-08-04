import React, { useEffect, useState } from 'react';
import { List, Task, Title, DeleteButton, ApproveButton, Error} from './styles';
import  {Todo, TodoStatus} from '../../services/TodoService'


interface TodoListProps {
  todos: Todo[];
  changeStatus: (id: number, status: TodoStatus, checked: boolean) => void;
  deleteTodo: (id: number) => void;
  toggleCheck: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, changeStatus, deleteTodo, toggleCheck }) => {
  const [error, setError] = useState<string | null>(null);

  const handleApprove = (todo: Todo) => {
    if (todo.checked) {
      const newStatus = todo.status === TodoStatus.Todo
        ? TodoStatus.InProgress
        : TodoStatus.Concluded;

      
      changeStatus(todo.id, newStatus, false);
    } else {
      setError('Task must be checked to be approved.');
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);
  
  return (
    <List>
      {todos.map(todo => (
        <Task key={todo.id}>
          <Title>Task ID: {todo.id}</Title>
          <h1>{typeof todo.content === 'string' ? todo.content : todo.content.title}</h1>
            <label>
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => toggleCheck(todo.id)}
              />
              Checked by Scrum Team
            </label>
            <div>
              {todo.status !== TodoStatus.Concluded && (
                <ApproveButton onClick={() => handleApprove(todo)}>Approve</ApproveButton>
              )}
              <DeleteButton onClick={() => deleteTodo(todo.id)}>Delete</DeleteButton>
            </div>
            {error &&  <Error>{error}</Error>}
        </Task>
      ))}
    </List>
  );
};

export default TodoList;