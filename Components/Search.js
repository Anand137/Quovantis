import React from 'react';
import {View, TextInput, StyleSheet, Image} from 'react-native';
import DimensionConstants from '../Constants/DimensionConstants';

const Search = (props) => {
  return (
    <View style={styles.mainStyle}>
      <View style={styles.item}>
        <Image style={styles.img} />
        <View
          style={{
            width: 1,
            height: DimensionConstants.windowHeigth / 20,
            backgroundColor: 'grey',
            marginHorizontal: 5,
            alignSelf: 'center',
          }}
        />
        <TextInput
          placeholder="Try Searching fat, sauces names..."
          style={{
            width: '95%',
            height: DimensionConstants.windowHeigth / 12,
            color: props.colorCode,
            fontSize: 14,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainStyle: {
    width: '90%',
    height: DimensionConstants.windowHeigth / 18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c9c9c9',
    alignSelf: 'center',
    borderRadius: 5,
  },
  item: {
    flexDirection: 'row',
    padding: 15,
    marginVertical: 8,
  },
  img: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'red',
    alignSelf: 'center',
  },
});

export default Search;
