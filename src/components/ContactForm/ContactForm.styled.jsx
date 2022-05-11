import styled from 'styled-components';

export const Form = styled.form`
  width: 320px;
  padding: 10px;
  border: 1px solid black;
`;

export const Input = styled.input`
  position: relative;
  font-size: 14px;
  background: #ffffff;
  border-radius: 5px;
  line-height: 25px;
  height: 25px;
  width: 250px;
  padding: 0 10px;
  border: 1px solid #cacaca;
  margin-bottom: 20px;
  &:active {
    box-shadow: rgb(155, 25, 233);
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  font-weight: 500;
  font-size: 20px;
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 5px;
  &:active {
    background-color: rgb(75, 75, 193);
  }
`;
