import styled from 'styled-components';

type ColorTitleContainer =  {
  lineColor: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const TitleContainer = styled.div<ColorTitleContainer>`
  margin-top: 25px;
  > h1 {
    color: ${props => props.theme.colors.white};
    &::after {
      content: '';
      display: block;
      width: 55px;
      border-bottom: 10px solid ${props => props.lineColor};
    }
  }
`;

export const Controllers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;