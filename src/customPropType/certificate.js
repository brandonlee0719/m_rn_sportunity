import PropTypes from 'prop-types';

import TranslatedString from './TranslatedString';

export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: TranslatedString.isRequired,
});
