import React from 'react';

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

const TodoList: React.FC<TodoListProps> = ({ todos, changeStatus}) => {
  return (
    <ul className="list-disc list-inside">
      {todos.map(todo=>(
        <li key={todo.id} className="mb-2">
            <p>{todo.text}</p>
            <div>
                <button onClick={() => changeStatus(todo.id, TodoStatus.Todo)} className="bg-blue-500 text-white p-1 rounded mr-2">
                    Todo
                </button>
                <button onClick={() => changeStatus(todo.id, TodoStatus.InProgress)} className="bg-yellow-500 text-white p-1 rounded mr-2">
                    In Progress
                </button>
                <button onClick={() => changeStatus(todo.id, TodoStatus.Concluded)} className="bg-green-500 text-white p-1 rounded">
                    Concluded
                </button>
            </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;