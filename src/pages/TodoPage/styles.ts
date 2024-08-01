import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: blue;
`;

export const ColumnContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Column = styled.div`
  width: 30%;
  border: 2px solid;
  border-radius: 0.375rem;
  padding: 1rem;
`;