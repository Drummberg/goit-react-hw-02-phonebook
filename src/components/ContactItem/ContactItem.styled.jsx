import styled from 'styled-components';

export const ItemLi = styled.li`
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
  list-style: inside;
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 5px;
  height: 25px;
  border: 1px solid #cacaca;

  &:active {
    background-color: rgb(75, 75, 193);
  }
`;
