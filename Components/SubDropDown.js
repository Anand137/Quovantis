import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import SubDropDownItem from '../Components/SubDropDownItem';

const SubDropDown = (props) => {
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>++++++++++++++', props.item);
  const renderItem = ({item}) => (
    <SubDropDownItem
      subCatergoryName={item.subCategoryname}
      Item={item.items}
      color={props.color}
    />
  );
  return (
    <View>
      <FlatList
        data={props.item}
        renderItem={renderItem}
        keyExtractor={(item) => item.subCategoryname}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SubDropDown;
