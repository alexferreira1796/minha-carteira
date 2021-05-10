import React from 'react';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

type ThemeContextProps = {
  toggleTheme(): void;
  theme: {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      white: string;
      black: string;
      gray: string;
      success: string;
      info: string;
      warning: string;
    },
  };
}

const ThemeContext = React.createContext<ThemeContextProps>({} as ThemeContextProps);

const ThemeGlobalProvider: React.FC = ({children}) => {
  const [theme, setTheme] = React.useState(() => {
    const theme = localStorage.getItem('@minha-caretira:theme');
    switch(theme) {
      case 'dark':
        return dark;
      case 'light':
        return light;
      default:
        return dark;
    }
  });

  // Funcao para salvar o theme
  const savedTheme = (name: string) => {
    localStorage.setItem('@minha-caretira:theme', name);
  }

  // Alterando o tema e salvando
  const toggleTheme = () => {
    if(theme.title === "dark") {
      setTheme(light);
      savedTheme('light');
    } else {
      setTheme(dark);
      savedTheme('dark');
    }
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export {
  ThemeContext,
  ThemeGlobalProvider
}