import styled from 'styled-components';

export const Filter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  .tag-filter {
    font-size: 18px;
    font-weight: bold;
    background: none;
    color: ${props => props.theme.colors.white};
    margin: 0 10px;
    transition: opacity .3s;
    opacity: .4;
    &:hover {
      opacity: .7;
    }
    &::after {
      content: '';
      display: block;
      width: 55px;;
      margin: 0 auto;
    }
  }
  .tag-filter-recurrent::after {
    border-bottom: 10px solid ${props => props.theme.colors.success};
  }
  .tag-filter-eventual::after {
    border-bottom: 10px solid ${props => props.theme.colors.warning};
  }
  .tag-active {
    opacity: 1;
  }
`;