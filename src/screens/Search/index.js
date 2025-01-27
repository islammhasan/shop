import axios from 'axios';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { images } from '../../assets';
import { SearchBar } from '../../components';
import styles from './styles';


export const Search = ({ navigation, route }) => {
  const { homeSearchVal } = route.params;
  const [val, setVal] = useState(homeSearchVal)
  const [searchData, setSearchData] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: null,
    });
  }, [navigation]);

  useEffect(() => {
    fetchData()
  }, [val])

  const fetchData = async () => {
    const pageNumber = 1;
    try {
      const response = await axios.get(
        `http://www.rncourseproject.com/app/product/search?query=${val}&page=${pageNumber}`
      );
      console.log('res==>', response.data.data);
      setSearchData(response.data.data)
    } catch (error) {
      console.log('error', error);
    }
  }

  console.warn(homeSearchVal);
  const url = 'http://www.rncourseproject.com/uploads/products/resized/';

  return (
    <View style={styles.container}>
      <SearchBar value={val} onChangeText={(val) => setVal(val)} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={searchData}
        contentContainerStyle={styles.listContainerStyle}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              alert('Product details: ' + item.title);
            }}
            activeOpacity={0.8}
            horizontal={false}
            style={styles.itemContainerStyle}>
            <Image style={styles.itemImageStyle} source={{ uri: url + item.images[0] }} />
            <Text numberOfLines={1} style={styles.itemPriceStyle}>${item.price}</Text>
            <Text numberOfLines={2} style={styles.itemTitleStyle}>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

const DATA = [
  {
    id: '14984',
    title: 'Woman T-Shirt',
    price: '$55.00',
    url: images.feature1,
  },
  {
    id: '26511',
    title: 'Man T-Shirt',
    price: '$34.00',
    url: images.feature2,
  },
  {
    id: '39849',
    title: 'Woman T-Shirt',
    price: '$43.00',
    url: images.feature3,
  },
  {
    id: '165',
    title: 'Woman T-Shirt',
    price: '$65.00',
    url: images.feature4,
  },
  {
    id: '4919',
    title: 'Man T-Shirt',
    price: '$47.00',
    url: images.feature5,
  },
  {
    id: '1265196',
    title: 'Woman T-Shirt',
    price: '$39.99',
    url: images.feature1,
  },
  {
    id: '89196',
    title: 'Man T-Shirt',
    price: '$25.00',
    url: images.feature2,
  },
  {
    id: '16513',
    title: 'Woman T-Shirt',
    price: '$41.00',
    url: images.feature3,
  },
];
