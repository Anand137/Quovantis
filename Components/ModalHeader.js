import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import DimensionConstants from '../Constants/DimensionConstants';

const ModalHeader = (props) => {
  return (
    <View style={styles.MainHeaderCont}>
      <TouchableOpacity
        onPress={() => {
          props.close();
        }}>
        <Image style={styles.img} />
      </TouchableOpacity>
      <Text style={styles.textStyle}>Approved Foods List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  MainHeaderCont: {
    width: DimensionConstants.windowWidth,
    height: DimensionConstants.windowHeigth / 5,
    justifyContent: 'space-around',
  },
  img: {
    width: 30,
    height: 30,
    borderColor: 'black',
    borderWidth: 1,
    marginLeft: 10,
  },
  textStyle: {
    marginLeft: 10,
    fontSize: 34,
  },
});

export default ModalHeader;
