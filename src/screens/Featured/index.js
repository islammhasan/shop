import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {images} from '../../assets';
import {Header} from '../../components/Header';
import styles from './style';

export const Featured = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header hasSearch hasCart />
      <View
        style={{
          width: 343,
          padding: 5,
          marginTop: 20,
          flex: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 30}}>Featured</Text>
        </View>
        <FlatList
          data={featureData}
          contentContainerStyle={{alignItems: 'center', paddingVertical: 30}}
          numColumns={2}
          ItemSeparatorComponent={() => <View style={{height: 20}}></View>}
          renderItem={({item}) => (
            <TouchableOpacity
              activeOpacity={0.8}
              horizontal={false}
              style={{paddingHorizontal: 13}}>
              <Image style={{width: 140, height: 180, borderRadius: 5}} source={item.url} />
              <Text style={{fontSize: 16, marginTop: 11}}>{item.price}</Text>
              <Text style={{fontSize: 16, marginTop: 7}}>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScrollView>
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
    title: 'Man T-Shirt',
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
