import React, {useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';

import DimensionConstants from './Constants/DimensionConstants';
import ModalMain from './Components/ModalMain';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const modalHandler = () => {
    console.log('call Modal');
    setShowModal(!showModal);
  };
  return (
    <>
      <View style={styles.Screen}>
        {showModal ? (
          <ModalMain close={modalHandler} />
        ) : (
          <Button title="Show Food Modal" onPress={modalHandler} />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Screen: {
    width: DimensionConstants.windowWidth,
    height: DimensionConstants.windowHeigth,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
