import React, { useEffect, useState } from 'react';
import { HeaderContainer, DivName, UserImage, SearchContainer, SearchInput, SearchIcon, DivSearch, Time } from './styles';
import anonimous from '../../assets/anonimous.jpg'
import logo from '../../assets/everest-logo.svg'
import searchIcon from '../../assets/search-icon.png'

interface HeaderProps {
  userName: string;
  userImage: string;
}

const Header: React.FC<HeaderProps> = ({ userName, userImage }) => {
  const [localTime, setLocalTime] = useState<string>("");

  useEffect(()=>{
      const date = new Date().toLocaleDateString();
      setLocalTime(date)
  },[])


  return (
    <HeaderContainer>
      <DivName >
        <img src={logo} alt='logo-everest'></img>
        <p>Boa tarde, {userName}  </p>
      </DivName>
      <DivSearch >
        <UserImage src={anonimous} alt="User-image" />
        <SearchContainer>
          <SearchInput type="text" placeholder="Buscar..." />
          <SearchIcon src={searchIcon} alt="Search" />
        </SearchContainer>
        <Time>Caxias do Sul, {localTime}</Time>
      </DivSearch>
    </HeaderContainer>
  );
};

export default Header;