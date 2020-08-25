import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import SubDropDown from './SubDropDown';

const DropDownMain = (props) => {
  console.log('sub category ==================>', props.subCatergory);
  const [showSubCategory, setShowSubCategory] = useState(false);
  return (
    <View style={styles.mainItem}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          setShowSubCategory(!showSubCategory);
        }}>
        <Text style={{color: props.colorCode, fontSize: 20}}>
          {props.title}
        </Text>
      </TouchableOpacity>
      {showSubCategory ? (
        <SubDropDown item={props.subCatergory} color={props.colorCode} />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  mainItem: {
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
  item: {
    flexDirection: 'row',
    padding: 15,
    marginVertical: 8,
  },
});

export default DropDownMain;
