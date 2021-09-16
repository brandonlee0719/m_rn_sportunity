import { combineReducers } from 'redux';
import sportunityList from './sportunityList';
import sportunityCreateProfile from './sportunityCreateProfile';
import sportunityProfile from './sportunityProfile';
import filtersState from './filtersState';
import publicCirclesFiltersState from './publicCirclesFiltersState';
import sportunitySport from './sportunitySport';
import sportunityNewActivity from './sportunityNewActivity';
import sportunityNewCircle from './sportunityNewCircle';
import sportunityActivity from './sportunityActivity';
import sportunityLocale from './sportunityLocale';
import circleDetails from './circleDetails';
import sportunityDetails from './sportunityDetails';


export default combineReducers({
  sportunityList,
  sportunityCreateProfile,
  sportunityProfile,
  sportunitySport,
  filtersState,
  publicCirclesFiltersState,
  sportunityNewActivity,
  sportunityNewCircle,
  sportunityActivity,
  sportunityLocale,
  circleDetails,
  sportunityDetails,
});
