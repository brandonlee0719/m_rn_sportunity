import PropTypes from 'prop-types';
import organizer from './organizer';
import user from './user';
import price from './price';
import address from './address';
import range from './range';
import sport from './sport';

/**
 * This type represents the summary of a sportunity and will
 * be used in the SportunityPage
 *
 * Of course this object is not sealed, any attribute can be added if needed
 *
 * For example we will probably need in the future the sportuniyId and the id
 * of the place where the sportunity happen
 */


const Sportunity = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  randomDate: PropTypes.string,//PropTypes.instanceOf(Date).isRequired,
  // The type may be changed afterward when we plug the API
  //level: PropTypes.string.isRequired,
  //kind: filterKind.isRequired,
  // TODO This should be changed into an enum in a upcoming commit
  // so we can deduce the color of the state
  //status: PropTypes.string.isRequired,
  
  address: address.isRequired,
  sport: sport.isRequired,
  price: price.isRequired,
  participants: PropTypes.arrayOf(user).isRequired,
  canceling: PropTypes.arrayOf(user),
  waiting: PropTypes.arrayOf(user),
  nbLikes: PropTypes.number.isRequired,
  ageRestriction: range.isRequired,
  participantRange: range.isRequired,
  organizers: PropTypes.arrayOf(organizer).isRequired,
};

export default PropTypes.shape({
  node: Sportunity.isRequired,
  
});
