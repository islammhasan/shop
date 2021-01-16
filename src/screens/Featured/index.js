import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {images} from '../../assets';
import {Header} from '../../components/Header';
import styles from './style';

export const Featured = () => {
  return (
    <View style={styles.container}>
      <Header
        hasBack
        hasSearch
        hasCart
        onBackPress={() => alert('onBackPress')}
        onCartPress={() => alert('onCartPress')}
        onSearchPress={() => alert('onSearchPress')}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={featureData}
        ListHeaderComponent={<Text style={styles.labelStyle}>Featured</Text>}
        ListHeaderComponentStyle={styles.labelStylePositioning}
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
    </View>
  );
};

const featureData = [
  {
    id: 14984,
    title: 'Woman T-Shirt',
    price: '$55.00',
    url: images.feature1,
  },
  {
    id: 26511,
    title: 'Man T-Shirt',
    price: '$34.00',
    url: images.feature2,
  },
  {
    id: 39849,
    title: 'Woman T-Shirt',
    price: '$43.00',
    url: images.feature3,
  },
  {
    id: 165,
    title: 'Woman T-Shirt',
    price: '$65.00',
    url: images.feature4,
  },
  {
    id: 4919,
    title: 'Man T-Shirt',
    price: '$47.00',
    url: images.feature5,
  },
  {
    id: 1265196,
    title: 'Woman T-Shirt',
    price: '$39.99',
    url: images.feature1,
  },
  {
    id: 89196,
    title: 'Man T-Shirt',
    price: '$25.00',
    url: images.feature2,
  },
  {
    id: 16513,
    title: 'Woman T-Shirt',
    price: '$41.00',
    url: images.feature3,
  },
];
