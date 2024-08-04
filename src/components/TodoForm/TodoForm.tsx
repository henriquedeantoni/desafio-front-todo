import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as S from './styles';

interface IFormInput {
  todo: string;
}

interface TodoFormProps {
  addTodo: (todo: string) => void;
}

const schema = yup.object().shape({
  todo: yup.string().required('Todo cannot be empty'),
});

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    addTodo(data.todo);
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Card>
        <S.Title>New Task</S.Title>
        <label>Task Content:</label>
        <S.Textarea placeholder="Type here..." {...register('todo')} error={!!errors.todo} />
        <S.Button type="submit">Submit Task</S.Button>
        {errors.todo && <S.ErrorMessage>{errors.todo?.message}</S.ErrorMessage>}
      </S.Card>
    </S.Form>
  );
};

export default TodoForm;