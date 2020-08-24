import React from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';
import DimensionConstants from '../Constants/DimensionConstants';

import ModalHeader from '../Components/ModalHeader';
import Search from '../Components/Search';
import List from '../Components/List';

const ModalMain = (props) => {
  return (
    <View style={styles.Screen}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <ModalHeader close={props.close} />
        <Search />
        <List />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  Screen: {
    width: DimensionConstants.windowWidth,
    height: DimensionConstants.windowHeigth,
    backgroundColor: '#D3D3D3',
  },
});

export default ModalMain;
