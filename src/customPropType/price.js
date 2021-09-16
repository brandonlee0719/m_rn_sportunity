import PropTypes from 'prop-types';

export default PropTypes.shape({
  currency: PropTypes.string.isRequired,
  cents: PropTypes.number.isRequired,
});
