import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #5C9EAD;
  
`;

export const Body = styled.body`
  display: flex;
  justify-content: flex-start;
  align-items: start;
  height: 100%;
  padding: 0;
`

export const ScanColumn = styled.div`
  width: 19rem;
  height: 100%;
  background-color: #326273;
  border-right: 3px solid #EEEEEE;
`

export const ColumnContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
`;

export const Column = styled.div`
  border: 4px solid;
  border-radius: 1rem;
  padding: 1rem;
  width: 17rem;

  h2{
    text-align: center;
    color: white;
  }
`;