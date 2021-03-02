import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Text, TouchableOpacity, Image, FlatList, ActivityIndicator } from 'react-native';
import { colors, images } from '../../assets';
import { MenuComponent } from '../../components';
import { Header } from '../../components/Header';
import styles from './styles';
import axios from 'axios';

export const Favorite = ({ navigation }) => {
  const [favoriteData, setFavoriteData] = useState([])
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return <MenuComponent />
      },
      headerTitle: null,
    })
  }, [navigation])

  useEffect(() => {
    getFavoriteProducts();
  }, [])

  const getFavoriteProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products', {
        params: {
          limit: 10
        }
      })
      setFavoriteData(response.data)
      setLoading(false)
    } catch (err) {
      console.warn(err)
    }
  }

  return (
    <>
      {/* <Header
        hasBack
        hasSearch
        onBackPress={() => alert('onBackPress')}
        onSearchPress={() => alert('onSearchPress')}
      /> */}
      <Text style={styles.screenTitle}>Favorite</Text>
      {
        loading ?
          <ActivityIndicator
            style={{
              marginTop: 100,
            }}
            size="large"
            color={colors.main}
          />
          :
          <FlatList
            showsVerticalScrollIndicator={false}
            data={favoriteData}
            contentContainerStyle={styles.listContainerStyle}
            numColumns={2}
            renderItem={({ item }) => {
              const { id, image, price, title, description } = item;
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('ItemDetails', {
                      id,
                      image,
                      price,
                      title,
                      description,
                    })
                  }}
                  activeOpacity={0.8}
                  horizontal={false}
                  style={styles.itemContainerStyle}>
                  <Image resizeMode="contain" style={styles.itemImageStyle} source={{ uri: image }} />
                  <Text style={styles.itemPriceStyle}>{price}</Text>
                  <Text numberOfLines={1} style={styles.itemTitleStyle}>{title}</Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.id}
          />
      }
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
