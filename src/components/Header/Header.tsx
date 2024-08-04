import React, { useEffect, useState } from 'react';
import { HeaderContainer, DivName, UserImage, SearchContainer, UserLoginInput, SearchIcon, DivUser, Time } from './styles';
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
    <HeaderContainer>
      <DivName >
        <img src={logo} alt='logo-everest'></img>
        <p>Hello, {userName}  </p>
      </DivName>
      <h1>Todo List</h1>
      <DivUser>
        <UserImage src={anonimous} alt="User-image" />
        <SearchContainer>
          <UserLoginInput type="text" placeholder="********" />
          <SearchIcon src={searchIcon} alt="Search" />
        </SearchContainer>
        <Time>Caxias do Sul, {localTime}</Time>
      </DivUser>
    </HeaderContainer>
  );
};

export default Header;