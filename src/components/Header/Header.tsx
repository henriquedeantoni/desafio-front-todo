import React, { useEffect, useState } from 'react';
import * as S from './styles';
import anonimous from '../../assets/anonimous.jpg'
import logo from '../../assets/everest-logo.svg'
import searchIcon from '../../assets/search-icon.png'

interface HeaderProps {
  userName: string;
}

const Header: React.FC<HeaderProps> = ({ userName }) => {
  const [localTime, setLocalTime] = useState<string>("");

  useEffect(()=>{
      const date = new Date().toLocaleDateString();
      setLocalTime(date)
  },[])


  return (
    <S.HeaderContainer>
      <S.DivName >
        <img src={logo} alt='logo-everest'></img>
        <p>Hello, {userName}  </p>
      </S.DivName>
      <h1>Todo List</h1>
      <S.DivUser>
        <S.UserImage src={anonimous} alt="User-image" />
        <S.SearchContainer>
          <S.UserLoginInput type="text" placeholder="********" />
          <S.SearchIcon src={searchIcon} alt="Search" />
        </S.SearchContainer>
        <S.Time>Caxias do Sul, {localTime}</S.Time>
      </S.DivUser>
    </S.HeaderContainer>
  );
};

export default Header;