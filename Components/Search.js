import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DimensionConstants from '../Constants/DimensionConstants';

const Search = (props) => {
  return (
    <View style={styles.mainStyle}>
      <Text>Search</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainStyle: {
    width: DimensionConstants.windowWidth,
    height: DimensionConstants.windowHeigth / 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Search;
