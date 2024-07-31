import styled from 'styled-components';

export const List = styled.ul`
  list-style: disc;
  list-style-position: inside;
`;

export const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

export const Button = styled.button`
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  margin-right: 0.5rem;
  color: white;
  border: none;
`;

export const TodoButton = styled(Button)`
  background-color: #3b82f6;
`;

export const InProgressButton = styled(Button)`
  background-color: #f59e0b;
`;

export const ConcludedButton = styled(Button)`
  background-color: #10b981;
`;