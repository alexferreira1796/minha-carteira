import React from 'react';
import * as S from './styles';

// Tipo Input HTML os Elementos o HTML
type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<InputProps> = ({...rest}) => {
  return (
    <S.Input {...rest} />
  )
}

export default Input;