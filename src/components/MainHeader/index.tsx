import React from 'react';
import * as S from './styles';

import emojis from '../../utils/emojis';
import Toggle from '../Toggle';

const MainHeader: React.FC = () => {
  const emoji = React.useMemo(() => {
    return emojis[Math.floor(Math.random() * emojis.length)];
  }, []);
  return (
    <S.Container>
      <Toggle />
      <S.Profile>
        <S.Welcome>Olá, {emoji}</S.Welcome>
        <S.UserName>Alex Ferreira</S.UserName>
      </S.Profile>
    </S.Container>
  )
}

export default MainHeader;