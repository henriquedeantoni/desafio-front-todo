import React, { useState } from 'react';
import TodoForm from '../../components/TodoForm/TodoForm';
import TodoList from '../../components/TodoList/TodoList';
import Header from '../../components/Header/Header';
import { PageContainer, ColumnContainer, Column } from './styles';

enum TodoStatus {
  Todo = 'todo',
  InProgress = 'inprogress',
  Concluded = 'concluded',
}

interface Todo {
  id: number;
  text: string;
  status: TodoStatus;
}

const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      text,
      status: TodoStatus.Todo,
    };
    setTodos([...todos, newTodo]);
  };

  const changeStatus = (id: number, status: TodoStatus) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, status } : todo));
  };

  return (
    <PageContainer>
      <Header userName="Fulano" userImage="path-to-user-image.jpg" />
      <h1 className='text-2xl font-bold mb-4'>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <ColumnContainer>
        <Column style={{ borderColor: '#3b82f6' }}>
          <h2 className="text-xl font-semibold">Todo</h2>
          <TodoList todos={todos.filter(todo => todo.status === TodoStatus.Todo)} changeStatus={changeStatus} />
        </Column>
        <Column style={{ borderColor: '#f59e0b' }}>
          <h2 className="text-xl font-semibold">In Progress</h2>
          <TodoList todos={todos.filter(todo => todo.status === TodoStatus.InProgress)} changeStatus={changeStatus} />
        </Column>
        <Column style={{ borderColor: '#10b981' }}>
          <h2 className="text-xl font-semibold">Concluded</h2>
          <TodoList todos={todos.filter(todo => todo.status === TodoStatus.Concluded)} changeStatus={changeStatus} />
        </Column>
      </ColumnContainer>
    </PageContainer>
  );
};

export default TodoPage;