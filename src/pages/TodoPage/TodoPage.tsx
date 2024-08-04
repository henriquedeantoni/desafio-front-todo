import React, { useEffect, useState } from 'react';
import TodoForm from '../../components/TodoForm/TodoForm';
import TodoList from '../../components/TodoList/TodoList';
import Header from '../../components/Header/Header';
import { PageContainer, ScanColumn, Body, ColumnContainer, Column } from './styles';
import { todosList, Todo, TodoStatus } from '../../services/TodoService';

const API_URL = import.meta.env.VITE_APP_API_URL;
console.log('API_URL:', API_URL);



const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todosData = await todosList();
        setTodos(todosData);
      } catch (error) {
        setError('Error to fetch the tasks');
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const addTodo = (content: string) => {
    const newTodo: Todo = {
      id: todos.length + 1,
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

  const changeStatus = (id: number, status: TodoStatus) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, status } : todo));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <PageContainer>
      <Header userName="Henrique" userImage="path-to-user-image.jpg" />
      <Body>
        <ScanColumn>
          <TodoForm addTodo={addTodo} />
        </ScanColumn>
        <ColumnContainer>
          <Column style={{ borderColor: '#3b82f6' , backgroundColor: '#60a5fa' }}>
            <h2>Todo</h2>
            <TodoList
              todos={todos.filter(todo => todo.status === TodoStatus.Todo)}
              changeStatus={changeStatus}
              deleteTodo={deleteTodo}
              toggleCheck={toggleCheck}
            />
          </Column>
          <Column style={{ borderColor: '#f59e0b' , backgroundColor: '#fbbf24' }}>
            <h2>In Progress</h2>
            <TodoList
              todos={todos.filter(todo => todo.status === TodoStatus.InProgress)}
              changeStatus={changeStatus}
              deleteTodo={deleteTodo}
              toggleCheck={toggleCheck}
            />
          </Column>
          <Column style={{ borderColor: '#10b981' , backgroundColor: '#34d399' }}>
            <h2>Concluded</h2>
            <TodoList
              todos={todos.filter(todo => todo.status === TodoStatus.Concluded)}
              changeStatus={changeStatus}
              deleteTodo={deleteTodo}
              toggleCheck={toggleCheck}
            />
          </Column>
        </ColumnContainer>
      </Body>
    </PageContainer>
  );
};

export default TodoPage;