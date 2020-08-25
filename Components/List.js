import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import DimensionConstants from '../Constants/DimensionConstants';
import DropDownMain from '../Components/DropDownMain';

const List = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [data, setData] = useState([]);
  const [showApiDataList, setShowApiDataList] = useState(false);

  useEffect(() => {
    fetch('https://api.jsonbin.io/b/5f2c36626f8e4e3faf2cb42e')
      .then((response) => response.json())
      .then((json) => setData(json.categories))
      .catch((error) => console.error(error))
      .finally(() => {
        setShowLoader(false);
        setShowApiDataList(true);
      });
    console.log(data);
  }, []);

  const renderItem = ({item}) => (
    <DropDownMain
      title={item.category.categoryName}
      colorCode={item.category.colorCode}
      subCatergory={item.category.subcategories}
    />
  );

  return (
    <View style={styles.mainList}>
      {showLoader ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#FFFFFF" />
          <Text>Loading Data...</Text>
        </View>
      ) : null}
      {showApiDataList ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.category.categoryName}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  mainList: {
    width: DimensionConstants.windowWidth,
    height: DimensionConstants.windowHeigth,
  },
  loader: {
    width: DimensionConstants.windowWidth,
    height: DimensionConstants.windowHeigth / 9,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
});

export default List;
