import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import DimensionConstants from '../Constants/DimensionConstants';

const Item = ({Item}) => {
  return (
    <View>
      <Text style={{marginVertical: 10}}>{Item}</Text>
      <View
        style={{
          width: DimensionConstants.windowWidth - 50,
          height: 1,
          backgroundColor: '#c9c9c9',
        }}
      />
    </View>
  );
};

const SubDropDownItem = (props) => {
  const renderItem = ({item}) => <Item Item={item} />;
  return (
    <View style={styles.mainView}>
      {props.subCatergoryName !== '' ? (
        <Text style={{color: props.color, fontSize: 20, marginVertical: 10}}>
          {props.subCatergoryName}
        </Text>
      ) : null}
      <FlatList
        data={props.Item}
        renderItem={renderItem}
        keyExtractor={(item) => item.index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginLeft: 16,
  },
});

export default SubDropDownItem;
