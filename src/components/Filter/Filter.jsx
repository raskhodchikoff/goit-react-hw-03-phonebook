import { PropTypes } from 'prop-types';
import { Label } from 'components/Filter/Filter.styled';
import { Box } from './../Box';

export const Filter = ({ onFilter, value }) => (
  <Box as="div">
    <Label htmlFor="text">
      <span>Find contacts by name</span>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onFilter}
        autoComplete="off"
      />
    </Label>
  </Box>
);

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
