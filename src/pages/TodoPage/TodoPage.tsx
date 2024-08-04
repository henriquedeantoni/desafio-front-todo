import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TodoForm from '../../components/TodoForm/TodoForm';
import TodoList from '../../components/TodoList/TodoList';
import Header from '../../components/Header/Header';
import * as S from './styles';
import { todosList} from '../../services/TodoService';
import {TodoStatus} from '../../types/TodoStatus';
import {Todo} from '../../types/Todo';


const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [maxId, setMaxId] =useState<number>(0);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userName = queryParams.get('userName') || 'Guest';

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todosData = await todosList();
        setTodos(todosData);

        const currentMaxId = todosData.length > 0 ? Math.max(...todosData.map(todo => todo.id)) : 0;
        setMaxId(currentMaxId);

      } catch (error) {
        setError('Error to fetch the tasks');
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const addTodo = (content: string) => {

    const newId = maxId + 1;
    setMaxId(newId);

    const newTodo: Todo = {
      id: newId,
      content,
      status: TodoStatus.Todo,
      checked: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleCheck = (id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const changeStatus = (id: number, status: TodoStatus, checked?: boolean) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, status, checked: checked ?? todo.checked } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <S.PageContainer>
      <Header userName={userName}/>
      <S.Body>
        <S.ColumnContainer>
        <S.ScanColumn>
          <TodoForm addTodo={addTodo} />
        </S.ScanColumn>
          <S.Column style={{ borderColor: '#3b82f6' , backgroundColor: '#60a5fa' }}>
            <h2>Todo</h2>
            <TodoList
              todos={todos
                .filter(todo => todo.status === TodoStatus.Todo)
                .sort((a, b) => Number(a.checked) - Number(b.checked))}
              changeStatus={changeStatus}
              deleteTodo={deleteTodo}
              toggleCheck={toggleCheck}
            />
          </S.Column>
          <S.Column style={{ borderColor: '#f59e0b' , backgroundColor: '#fbbf24' }}>
            <h2>In Progress</h2>
            <TodoList
              todos={todos
                .filter(todo => todo.status === TodoStatus.InProgress)
                .sort((a, b) => Number(a.checked) - Number(b.checked))}
              changeStatus={changeStatus}
              deleteTodo={deleteTodo}
              toggleCheck={toggleCheck}
            />
          </S.Column>
          <S.Column style={{ borderColor: '#10b981' , backgroundColor: '#34d399' }}>
            <h2>Concluded</h2>
            <TodoList
              todos={todos
                .filter(todo => todo.status === TodoStatus.Concluded)
                .sort((a, b) => Number(a.checked) - Number(b.checked))}
              changeStatus={changeStatus}
              deleteTodo={deleteTodo}
              toggleCheck={toggleCheck}
            />
          </S.Column>
        </S.ColumnContainer>
      </S.Body>
    </S.PageContainer>
  );
};

export default TodoPage;