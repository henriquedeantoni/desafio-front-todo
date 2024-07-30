import React from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface IFormInput {
    todo: string;
}

interface TodoFormProps {
  addTodo: (todo: string) => void;
}

const schema = yup.object().shape({
    todo: yup.string().required('Todo cannot be empty'),
})

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
    const {register, handleSubmit, formState:{errors}} = useForm<IFormInput>({
        resolver: yupResolver(schema),
});

const onSubmit: SubmitHandler<IFormInput> = (data) => {
    addTodo(data.todo);
};
  
    return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
      <input
        type="text"
        {...register('todo')}
        className={`border p-2 rounded w-full ${errors.todo ? 'border-red-500' : ''}`}
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2">
        Add Todo
      </button>
      {errors.todo && <p className="text-red-500 mt-2">{errors.todo?.message}</p>}
    </form>
  );
};

export default TodoForm;