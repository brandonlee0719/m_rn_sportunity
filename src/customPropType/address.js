import PropTypes from 'prop-types';

import position from './position';

export default PropTypes.shape({
  country: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
  position: position.isRequired,
});
