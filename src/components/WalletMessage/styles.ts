import styled from 'styled-components';

export const Container = styled.div`
  width: 49%;
  height: 260px;
  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.white};

  border-radius: 7px;

  margin: 10px auto;
  padding: 30px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > header img {
    width: 35px;
    margin-left: 7px;
  }

  > header p {
    font-size: 20px;
    font-weight: 500;
  }
`;