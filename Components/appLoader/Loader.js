import React from 'react-native';

import {View, ActivityIndicator, StyleSheet} from 'react-native';
import DimensionConstants from '../../Constants/DimensionConstants';

const Loader = () => {
  return (
    <View style={styles.mainLoader}>
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  );
};

const styles = StyleSheet.create({
  mainLoader: {
    width: DimensionConstants.windowWidth,
    height: DimensionConstants.windowHeigth,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loader;
