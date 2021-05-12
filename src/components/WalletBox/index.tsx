import React from 'react';
import CountUp from 'react-countup';
import * as S from './styles';

import dollarImg from '../../assets/dollar.svg';
import arrowUpImg from '../../assets/arrow-up.svg';
import arrowDownImg from '../../assets/arrow-down.svg';

type WalletBoxProps = {
  title: string;
  amount: number;
  footerLabel: string;
  icon: 'dollar' | 'arrowUp' | 'arrowDown';
  color: string;
}

const WalletBox: React.FC<WalletBoxProps> = ({
  title,
  amount,
  footerLabel,
  icon,
  color
}) => {

  const listIcons: any = {
    dollar: dollarImg,
    arrowUp: arrowUpImg,
    arrowDown: arrowDownImg
  }

  return (
    <S.Container color={color}>
      <span>{title}</span>
      <h1>
        <strong>R$ </strong>
        <CountUp
          duration={1.75}
          end={amount}
          separator="."
          decimal=","
          decimals={2}
        />
      </h1>
      <small>{footerLabel}</small>
      {icon && <img src={listIcons[icon]} alt={title}/> }
    </S.Container>
  )
}

export default WalletBox;