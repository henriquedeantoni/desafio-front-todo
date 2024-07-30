import React, { useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

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
    <div className='container mx-auto p-4'>
      <h1 className='text-2x1 font-bold mb-4'>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-xl font-semibold">Todo</h2>
          <TodoList todos={todos.filter(todo => todo.status === TodoStatus.Todo)} changeStatus={changeStatus} />
        </div>
        <div>
          <h2 className="text-xl font-semibold">In Progress</h2>
          <TodoList todos={todos.filter(todo => todo.status === TodoStatus.InProgress)} changeStatus={changeStatus} />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Concluded</h2>
          <TodoList todos={todos.filter(todo => todo.status === TodoStatus.Concluded)} changeStatus={changeStatus} />
        </div>
      </div>
    </div>
  );
};

export default TodoPage;