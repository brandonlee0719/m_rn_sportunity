import PropTypes from 'prop-types';

//import level from './level';
import TranslatedString from './TranslatedString';
import certificate from './certificate';


export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: TranslatedString,
  logo: PropTypes.string.isRequired,
  certificates: PropTypes.arrayOf(certificate),
  positions: PropTypes.arrayOf(TranslatedString),
  levels: PropTypes.array,
});