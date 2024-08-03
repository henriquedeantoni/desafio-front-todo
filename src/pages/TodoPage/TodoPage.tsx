import React, { useState } from 'react';
import TodoForm from '../../components/TodoForm/TodoForm';
import TodoList from '../../components/TodoList/TodoList';
import Header from '../../components/Header/Header';
import { PageContainer, ScanColumn, Body, ColumnContainer, Column } from './styles';

enum TodoStatus {
  Todo = 'todo',
  InProgress = 'inprogress',
  Concluded = 'concluded',
}

interface Todo {
  id: number;
  content: string;
  status: TodoStatus;
  checked: boolean;
}

const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

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
        todo.id === id ? { ...todo, isChecked: !todo.checked } : todo
      )
    );
  };

  const changeStatus = (id: number, status: TodoStatus) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, status } : todo));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };


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