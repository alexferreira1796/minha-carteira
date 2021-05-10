import React from "react";
import * as S from './styles';

import { AuthContext } from '../../hooks/auth';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  const { sigin } = React.useContext(AuthContext);

  const [email, setEmail] = React.useState<string>('');
  const [pass, setPass] = React.useState<string>('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    if(email !== '' && pass !== '') {
      sigin(email, pass);
    }
  }

  return (
    <S.Container>
      <S.Logo>
        <img src={logoImg} alt="Minha Carteira" />
        <h2>Minha Carteira</h2>
      </S.Logo>

      <S.Form onSubmit={handleSubmit}>
        <S.FormTitle>Entrar</S.FormTitle>

        <Input 
          type="email" 
          placeholder="email@email.com" 
          required value={email} 
          onChange={({target}) => setEmail(target.value)} 
        />
        <Input 
          type="password" 
          placeholder="****" 
          required value={pass} 
          onChange={({target}) => setPass(target.value)}
        />

        <Button type="submit">
          Acessar
        </Button>
      </S.Form>
    </S.Container>
  );
}

export default SignIn;