import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { images } from '../../assets';
import { SearchBar } from '../../components';
import styles from './styles';


export const Search = () => {
  const [val, setVal] = useState('')
  const [searchData, setSearchData] = useState([])

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

  return (
    <View style={styles.container}>
      <SearchBar value={val} onChange={(val) => setVal(val)} />
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
            <Image style={styles.itemImageStyle} source={item.images[0]} />
            <Text style={styles.itemPriceStyle}>${item.price}</Text>
            <Text style={styles.itemTitleStyle}>{item.title}</Text>
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
