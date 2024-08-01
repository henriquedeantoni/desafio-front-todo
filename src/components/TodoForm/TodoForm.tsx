import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Form, Card, Input, Button, ErrorMessage } from './styles';

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
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <Input type="text" {...register('todo')} error={!!errors.todo} />
        <Button type="submit">Submit Task</Button>
        {errors.todo && <ErrorMessage>{errors.todo?.message}</ErrorMessage>}
      </Card>
    </Form>
  );
};

export default TodoForm;