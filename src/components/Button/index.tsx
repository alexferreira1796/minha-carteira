import React from 'react';
import * as S from './styles';

// Tipo Input HTML os Elementos o HTML
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({children, ...rest}) => {
  return (
    <S.Button {...rest}>
      {children}
    </S.Button>
  )
}

export default Button;