import React from 'react';
import * as S from './styles';

import { ThemeContext } from '../../hooks/theme';

const Toggle: React.FC = () => {
  const { theme, toggleTheme} = React.useContext(ThemeContext);
  const [checkTheme, setCheckTheme] = React.useState(() => theme.title === 'dark' ? true : false);

  const handleTheme = () => {
    setCheckTheme(!checkTheme);
    toggleTheme();
  }

  return (
    <S.Container>
      <span>Light</span>
      <S.ToogleSelector 
        uncheckedIcon={false} 
        checkedIcon={false} 
        checked={checkTheme} 
        onChange={handleTheme} 
      />
      <span>Dark</span>
    </S.Container>
  );
}

export default Toggle;