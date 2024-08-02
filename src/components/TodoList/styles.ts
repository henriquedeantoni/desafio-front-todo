import styled from 'styled-components';

export const List = styled.ul`
  list-style: disc;
  list-style-position: inside;
`;

export const Task = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  
  input {
    margin-right: 8px;
  }

  p {
    flex: 1;
    margin: 0;
  }

  span {
    font-size: 0.75rem;
    color: #555;
  }
`;
