import PropTypes from 'prop-types';
import styled from 'styled-components';

export const ContactItem = ({ id, name, number, onClick }) => {
  return (
    <Item key={id}>
      <p>
        {name}: {number}
      </p>
      <Button type="button" onClick={() => onClick(id)}>
        Delete
      </Button>
    </Item>
  );
};

const Item = styled.li`
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
  list-style: inside;
`;

const Button = styled.button`
  cursor: pointer;
  border-radius: 5px;
  height: 25px;
  border: 1px solid #cacaca;

  &:active {
    background-color: rgb(75, 75, 193);
  }
`;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
