import styled from 'styled-components';

export const List = styled.ul`
  list-style: disc;
  list-style-position: inside;
  text-align: center;
  padding: 0;
`;

export const Task = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: white;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  h1 {
    flex: 1;
    font-size: 1rem;
    font-weight: 600;
    margin: 0.25rem auto;
    padding: 1rem;
    color: black;
    max-width: 14rem;
    height: auto;
    box-sizing: border-box;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  label {
        font-size: 0.75rem;
        font-weight: 600;
        color: black;
        width: 12rem;
  }

  input {
    margin-right: 0.25rem;
  }

  span {
    font-size: 0.75rem;
    color: #555;
  }
`;

export const Title = styled.h1`
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0.25rem auto;
    color: black;
`
export const Button = styled.button`
  margin-right: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  color: white;
  font-weight: bold;

`;


export const DeleteButton = styled(Button)`
  background-color: #e53e3e;
  margin-top: 0.5rem;

  &:hover {
    opacity: 0.85; 
  }

  &:active {
    opacity: 0.75; 
  }
`;

export const ApproveButton = styled(Button)`
  background-color: #3182ce;
  margin-top: 0.5rem;

  
  &:hover {
    opacity: 0.85;
  }

  &:active {
    opacity: 0.75;
  }
`;

export const Error = styled.p`
  color: red;
  font-size: 0.75rem;
  font-weight: 500;
  transition: opacity 3s ease-out;
  opacity: 1; 
  
  &.fade-out {
    opacity: 0;
  }
`;