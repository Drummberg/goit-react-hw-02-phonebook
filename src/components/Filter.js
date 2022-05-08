import PropTypes from 'prop-types';
import styled from 'styled-components';

export function Filter({ filter, onChange }) {
  return (
    <Label>
      Find contacts by name
      <Input type="text" name="filter" value={filter} onChange={onChange} />
    </Label>
  );
}

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  font-weight: 500;
  font-size: 20px;
  width: 250px;
`;

const Input = styled.input`
  width: 200px;
  margin-top: 2px;
`;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
