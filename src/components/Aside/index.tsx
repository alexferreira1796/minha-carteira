import React from "react";
import * as S from "./styles";

import { Link } from 'react-router-dom';
import logo from "../../assets/logo.svg";
import MenuLinks from '../../utils/menu';

type Links = {
  name: string;
  path: string;
  icon: React.ReactNode
}

const Aside: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <S.LogoImg src={logo} alt="Logo Minha Carteira"/>
        <S.Title>Minha Carteira</S.Title>
      </S.Header>

      <S.MenuContainer>
        {
          MenuLinks && MenuLinks.map(({name, path, icon}: Links, index) => {
            return (
              <S.MenuItemLink key={index}>
                <Link to={path}>
                  {icon}{name}
                </Link>
              </S.MenuItemLink>
            )
          })
        }
        </S.MenuContainer>
    </S.Container>
  )
}

export default Aside;