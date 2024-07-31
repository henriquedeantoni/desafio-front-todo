import React from 'react';
import { HeaderContainer, UserImage, SearchContainer, SearchInput, SearchIcon } from './styles';
import anoninous from '../assets/anonimous.jpg'

interface HeaderProps {
  userName: string;
  userImage: string;
}

const Header: React.FC<HeaderProps> = ({ userName, userImage }) => {
  return (
    <HeaderContainer>
      <div className="text-lg font-bold">
        Boa tarde, {userName}
      </div>
      <div className="flex items-center">
        <UserImage src={anoninous} alt="User-image" />
        <SearchContainer>
          <SearchInput type="text" placeholder="Buscar..." />
          <SearchIcon src="path-to-your-loupe-image.png" alt="Search" />
        </SearchContainer>
      </div>
    </HeaderContainer>
  );
};

export default Header;