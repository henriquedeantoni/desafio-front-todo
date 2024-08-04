import React, { useEffect, useState } from 'react';
import * as S from './styles';
import {TodoStatus} from '../../types/TodoStatus';
import {Todo} from '../../types/Todo';

interface TodoListProps {
  todos: Todo[];
  changeStatus: (id: number, status: TodoStatus, checked: boolean) => void;
  deleteTodo: (id: number) => void;
  toggleCheck: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, changeStatus, deleteTodo, toggleCheck }) => {
  const [errorTaskId, setErrorTaskId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleApprove = (todo: Todo) => {
    if (todo.checked) {
      const newStatus = todo.status === TodoStatus.Todo
        ? TodoStatus.InProgress
        : TodoStatus.Concluded;

      setErrorTaskId(null);
      changeStatus(todo.id, newStatus, false);
    } else {
      setError('Task must be checked to be approved.');
      setErrorTaskId(todo.id);
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [error]);
  
  return (
    <S.List>
      {todos.map(todo => (
        <S.Task key={todo.id}>
          <S.Title>Task ID: {todo.id}</S.Title>
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
                <S.ApproveButton onClick={() => handleApprove(todo)}>Approve</S.ApproveButton>
              )}
              <S.DeleteButton onClick={() => deleteTodo(todo.id)}>Delete</S.DeleteButton>
            </div>
            {errorTaskId === todo.id &&  <S.Error>{error}</S.Error>}
        </S.Task>
      ))}
    </S.List>
  );
};

export default TodoList;