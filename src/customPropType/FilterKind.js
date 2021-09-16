import PropTypes from 'prop-types';

import kind from '../enums/sportunityFilterKinds';

export default PropTypes.oneOf(Object.values(kind));

