import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100vw;
  background-color: #5C9EAD;
  
`;

export const Body = styled.body`
  display: flex;
  justify-content: flex-start;
  align-items: start;
  padding: 0;
`

export const ScanColumn = styled.div`
  width: 19rem;
  background-color: #326273;
  border-right: 1px solid #EEEEEE;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-grow: 1; 
`

export const ColumnContainer = styled.div`
  padding: 0;
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
`;

export const Column = styled.div`
  border: 2px solid;
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem;
  width: 17rem;

  h2{
    text-align: center;
    color: white;
  }
`;