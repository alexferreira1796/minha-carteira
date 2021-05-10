import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  margin: 7px 0;
  padding: 10px;
  border-radius: 5px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.warning};
  transition: opacity .3s;
  font-weight: bold;
  &:hover {
    opacity: .7;
  }
`;