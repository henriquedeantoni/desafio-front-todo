import styled from 'styled-components';

export const Form = styled.form`
  margin-bottom: 1rem;
`;

export const Card = styled.div`
    
`

export const Input = styled.input<{ error?: boolean }>`
  border: 1px solid;
  border-color: ${props => (props.error ? 'red' : '#ddd')};
  padding: 0.5rem;
  border-radius: 0.375rem;
  width: 100%;
`;

export const Button = styled.button`
  background-color: #3b82f6;
  color: white;
  padding: 0.5rem;
  border-radius: 0.375rem;
  margin-top: 0.5rem;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 0.5rem;
`;