import React from 'react';
import {Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {images} from '../../assets';
import {Header} from '../../components/Header';
import styles from './styles';

export const Favorite = () => {
  return (
    <>
      <Header
        hasBack
        hasSearch
        onBackPress={() => alert('onBackPress')}
        onSearchPress={() => alert('onSearchPress')}
      />
      <Text style={styles.screenTitle}>Favorite</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={FavoriteData}
        contentContainerStyle={styles.listContainerStyle}
        numColumns={2}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              alert('Product details: ' + item.title);
            }}
            activeOpacity={0.8}
            horizontal={false}
            style={styles.itemContainerStyle}>
            <Image style={styles.itemImageStyle} source={item.url} />
            <Text style={styles.itemPriceStyle}>{item.price}</Text>
            <Text style={styles.itemTitleStyle}>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

const FavoriteData = [
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
