import React, {useState} from 'react';
import Toggle from '../Toggle';

import { Link } from 'react-router-dom';
import MenuLinks from '../../utils/menu';

import { MdClose, MdMenu, } from 'react-icons/md';

import logoImg from '../../assets/logo.svg';

import { 
    Container,
    Header,
    LogoImg,
    Title,
    MenuContainer,
    MenuItemLink,
    ToggleMenu,
    ThemeToggleFooter,
}  from './styles';

type Links = {
  name: string;
  path: string;
  icon: React.ReactNode
}

const Aside: React.FC = () => {
    const [toggleMenuIsOpened, setToggleMenuIsOpened ] = useState(false);

    const handleToggleMenu = () => {
        setToggleMenuIsOpened(!toggleMenuIsOpened);
    }

    return (
        <Container menuIsOpen={toggleMenuIsOpened}>
            <Header>
                <ToggleMenu onClick={handleToggleMenu}>
                { toggleMenuIsOpened ? <MdClose /> : <MdMenu /> }
                </ToggleMenu>

                <LogoImg src={logoImg} alt="Logo Minha Carteira" />
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
              {
                MenuLinks && MenuLinks.map(({name, path, icon}: Links, index) => {
                  return (
                    <MenuItemLink key={index}>
                      <Link to={path}>
                        {icon}{name}
                      </Link>
                    </MenuItemLink>
                  )
                })
              }
            </MenuContainer>

            <ThemeToggleFooter menuIsOpen={toggleMenuIsOpened}>
                <Toggle/>
            </ThemeToggleFooter>
        </Container>
    );
}

export default Aside;