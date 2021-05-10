import React from 'react';
import * as S from './styles';

type WalletMessageProps = {
  title: string;
  description: string;
  footerText: string;
  icon: string;
}

const WalletMessage: React.FC<WalletMessageProps> = ({
  title,
  description,
  footerText,
  icon
}) => {
  return (
    <S.Container>
      <header>
        <h1>
          {title}
          <img src={icon} alt={title} />
        </h1>
        <p>{description}</p>
      </header>

      <footer>{footerText}</footer>
    </S.Container>
  )
}

export default WalletMessage;