import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {Header} from '../../components/Header';
import {Button} from '../../components/Button';
import styles from './styles';
import {images} from '../../assets';

export const MyOrders = () => {
  return (
    <>
      <Header
        hasBack
        hasSearch
        onBackPress={() => alert('onBackPress')}
        onSearchPress={() => alert('onSearchPress')}
      />
      <Text style={styles.screenTitle}>My Orders</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listStyle}
        data={DATA}
        renderItem={({item}) => {
          return (
            <View key={item.id} style={styles.itemContainer}>
              <View style={styles.imageContainer}>
                <Image style={styles.itemImage} source={item.url} />
              </View>
              <View style={styles.itemDetails}>
                <Text numberOfLines={1} style={styles.itemTitle}>
                  {item.title}
                </Text>
                <Text numberOfLines={1} style={styles.itemBrand}>
                  {item.brand}
                </Text>
                <Text numberOfLines={1} style={styles.itemPrice}>
                  ${item.price}
                </Text>
                <Button
                  customStyle={styles.btnStyle}
                  textCustomStyle={styles.btnTextStyle}
                  title="Order Again"
                  onPress={() => alert(`Order ${item.title} again!`)}
                />
              </View>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

const DATA = [
  {
    id: '1',
    title: 'Woman T-Shirt',
    brand: 'Lotto.LTD',
    price: '55.00',
    url: images.feature1,
  },
  {
    id: '2',
    title: 'Man T-Shirt',
    brand: 'Bata',
    price: '34.00',
    url: images.feature2,
  },
  {
    id: '3',
    title: 'Woman T-Shirt',
    brand: 'Next',
    price: '43.00',
    url: images.feature3,
  },
  {
    id: '4',
    title: 'Woman T-Shirt',
    brand: 'Plus Point',
    price: '65.00',
    url: images.feature4,
  },
  {
    id: '5',
    title: 'Man T-Shirt',
    brand: "Cat's Eye",
    price: '47.00',
    url: images.feature5,
  },
  {
    id: '6',
    title: 'Woman T-Shirt',
    brand: 'Lotto.LTD',
    price: '39.99',
    url: images.feature1,
  },
  {
    id: '7',
    title: 'Man T-Shirt',
    brand: 'Bata',
    price: '25.00',
    url: images.feature2,
  },
  {
    id: '8',
    title: 'Woman T-Shirt',
    brand: 'Next',
    price: '41.00',
    url: images.feature3,
  },
];
