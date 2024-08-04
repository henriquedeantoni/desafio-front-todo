import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  background-color: #242424;
  border-bottom: 1.5px solid #ddd;
  width: 100vw;

  p{
        color: rgba(255, 255, 255, 0.87);
        font-size: 1.5rem;
        font-weight: 600;
  }

  h1{
    font-size: 2.5rem;
    font-weight: 700;
  }
`;



export const DivName = styled.div`
    margin: 0 4rem;
    display: flex;
    gap: 2rem;
`

export const UserImage = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  border: 2px white solid;
`;

export const SearchContainer = styled.div`
  position: relative;
`;

export const UserLoginInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #f59e0b;
  border-radius: 0.375rem;
`;

export const SearchIcon = styled.img`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  width: 1rem;
  height: 1rem;
`;

export const Time = styled.div`
    font-weight: 400;
    font-size: 0.75rem;

`

export const DivUser = styled.div`
  margin: 0 4rem;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 2fr; 
  grid-template-rows: auto auto; 
  gap: 0.25rem;
  height: 6rem;

  & > :nth-child(1) {
    grid-column: span 1;
    grid-row: 1 / 2;
  }

  & > :nth-child(2) {
    grid-column: span 1;
    grid-row: 1 / 2;
  }

  & > :nth-child(3) {
    text-align: center;
    grid-column: span 2;
    grid-row: 2 / 3;
  }
`;