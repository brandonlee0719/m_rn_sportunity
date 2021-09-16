import PropTypes from 'prop-types';

import user from './user';

export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  organizer: user.isRequired,
  isAdmin: PropTypes.bool.isRequired,
});
