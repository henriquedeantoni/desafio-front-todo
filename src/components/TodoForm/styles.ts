import styled from 'styled-components';

export const Form = styled.form`
  margin: 2rem;
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
    width: 18rem;
    height: 18rem;
    border: 1px solid #E39774;
    border-radius: 1rem;
    padding: 0.25rem;
    display: flex;  
    flex-direction: column;
    justify-content: start;
    label{
        font-size: 1rem;
        font-weight: 600;
        color: #0a0a0a;
        margin-left: 0.75rem;
    }
`

export const Title = styled.h1`
    color: #0a0a0a;
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0 auto;
`

export const Textarea  = styled.textarea<{ error?: boolean }>`
  border: 1px solid;
  border-color: ${props => (props.error ? 'red' : '#ddd')};
  padding: 0.5rem;
  border-radius: 0.375rem;
  margin: 0.5rem;
  resize: none;
  width: 80%;
  height: 7rem;
  color: #0a0a0a;
  font-size: 1rem;
  outline: none; 
`;

export const Button = styled.button`
  background-color: #3b82f6;
  color: white;
  padding: 0.5rem;
  border-radius: 0.375rem;
  margin: 0.5rem;
  width: 8rem;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 0.5rem;
`;