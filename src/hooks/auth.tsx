import React from 'react'

type AuthContextProps = {
  logged: boolean;
  sigin(email: string, pass: string): void;
  sigout(): any;
}

const AuthContext = React.createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider: React.FC = ({children}) => {
  const [logged, setLogged] = React.useState(() => {
    const isLogged = localStorage.getItem("@minha-caretira:login");
    return !!isLogged;
  })

  const sigin = (email: string, pass: string):void => {
    if(email === "admin@minhacarteira.com" && pass === "@carteira") {
      localStorage.setItem("@minha-caretira:login", 'true');
      setLogged(true);
    } else {
      alert("Usuário não encontrado");
    }
  }

  const sigout = (): any => {
    localStorage.removeItem("@minha-caretira:login");
    setLogged(false);
  }
  
  return (
    <AuthContext.Provider value={{logged, sigin, sigout}}>
      {children}
    </AuthContext.Provider>
  )
}

export {
  AuthContext,
  AuthProvider
}