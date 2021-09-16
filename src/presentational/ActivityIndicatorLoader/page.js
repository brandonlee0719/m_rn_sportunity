import PropTypes from 'prop-types';
import React from 'react';
import {View} from 'react-native';

import ActivityIndicatorLoader from './index';

const ActivityIndicatorLoaderPage = ({ isAnimating }) => (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicatorLoader
            isAnimating={isAnimating}
        />
    </View>
);

export default ActivityIndicatorLoaderPage;

ActivityIndicatorLoaderPage.propTypes = {
  isAnimating: PropTypes.bool.isRequired,
};
