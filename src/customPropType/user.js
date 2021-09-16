import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  pseudo: PropTypes.string,
  email: PropTypes.string,
  phonePrefix: PropTypes.number,
  phoneNumber: PropTypes.number,
  age: PropTypes.number,
  sex: PropTypes.string,
  address: PropTypes.object,
  sports: PropTypes.array,
  feedbacks: PropTypes.object,
});
