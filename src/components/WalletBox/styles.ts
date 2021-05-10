import styled from 'styled-components';

type ContainerProps = {
  color: string
}

export const Container = styled.div<ContainerProps>`
  width: 32%;
  height: 150px;
  margin: 10px auto;
  background-color: ${props => props.color};
  color: ${props => props.theme.colors.white};
  border-radius: 7px;
  padding: 10px 20px;
  position: relative;
  overflow: hidden;

  > img {
    position: absolute;
    right: -30px;
    top: -10px;
    height: 110%;
    opacity: 30%;
  }

  > span {
    font-size: 18px;
    font-weight: 500;
  } 

  > small {
    font-size: 12px;
    position: absolute;
    bottom: 10px;
  }
`;