import PropTypes from 'prop-types';

import SportunitySummary from './SportunitySummary';

export default PropTypes.shape({
  edges: PropTypes.arrayOf(SportunitySummary).isRequired,
});