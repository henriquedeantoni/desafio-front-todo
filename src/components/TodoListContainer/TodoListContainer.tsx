import React, { useState, useEffect } from 'react';
import TodoList from '../../components/TodoList/TodoList';
import { todosList, Todo } from '../../services/TodoService';

enum TodoStatus {
  Todo = 'todo',
  InProgress = 'inprogress',
  Concluded = 'concluded',
}

const TodoListContainer: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todosData = await todosList();
        setTodos(todosData);
      } catch (error) {
        setError('Error to take de tasks');
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const changeStatus = (id: number, status: TodoStatus) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, status } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleCheck = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    ));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <TodoList
      todos={todos}
      changeStatus={changeStatus}
      deleteTodo={deleteTodo}
      toggleCheck={toggleCheck}
    />
  );
};

export default TodoListContainer;