import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import {images} from '../../assets';
import {Header} from '../../components/Header';
import styles from './styles';

export const Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header hasCart hasFilter />
      <View style={styles.searchBar}>
        <View style={styles.searchIcon}>
          <Image
            source={images.search}
            resizeMode="contain"
            style={{width: 20}}
          />
        </View>
        <View style={{flex: 1}}>
          <TextInput
            placeholder={'Search Your Product'}
            style={{fontSize: 18, marginEnd: 10}}
          />
        </View>
      </View>

      <View
        style={{
          width: 343,
          height: 125,
          marginTop: 25,
          padding: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 22}}>Categories</Text>
          <Text style={{fontSize: 14}}>See all</Text>
        </View>
        <FlatList
          style={{paddingTop: 20}}
          data={DATA}
          ItemSeparatorComponent={() => <View style={{width: 20}}></View>}
          renderItem={({item}) => (
            <TouchableOpacity activeOpacity={0.8}>
              <Image style={{width: 114, height: 65}} source={item.url} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          horizontal
        />
      </View>
      {/* FEATURED */}
      <View
        style={{
          width: 343,
          height: 296,
          padding: 5,
          marginTop: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 22}}>Featured</Text>
          <Text style={{fontSize: 14}}>See all</Text>
        </View>
        <FlatList
          style={{paddingTop: 20}}
          data={featureData}
          ItemSeparatorComponent={() => <View style={{width: 20}}></View>}
          renderItem={({item}) => (
            <TouchableOpacity activeOpacity={0.8} style={{flexDirection: 'column'}}>
              <Image style={{width: 140, height: 180}} source={item.url} />
              <Text style={{fontSize: 16, marginTop: 11}}>{item.price}</Text>
              <Text style={{fontSize: 16, marginTop: 7}}>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          horizontal
        />
      </View>
      {/* BEST SELL */}
      <View
        style={{
          width: 343,
          height: 296,
          marginTop: 20,
          padding: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 22}}>Best Sell</Text>
          <Text style={{fontSize: 14}}>See all</Text>
        </View>
        <FlatList
          style={{paddingTop: 20}}
          data={bestSellData}
          ItemSeparatorComponent={() => <View style={{width: 20}}></View>}
          renderItem={({item}) => (
            <TouchableOpacity activeOpacity={0.8} style={{flexDirection: 'column'}}>
              <Image style={{width: 140, height: 180}} source={item.url} />
              <Text style={{fontSize: 16, marginTop: 11}}>{item.price}</Text>
              <Text style={{fontSize: 16, marginTop: 7}}>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          horizontal
        />
      </View>
    </ScrollView>
  );
};

const DATA = [
  {
    id: 11651,
    url: images.manCat,
  },
  {
    id: 21656,
    url: images.womanCat,
  },
  {
    id: 31651,
    url: images.kidsCat,
  },
];

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
    price: '$34.00',
    url: images.feature3,
  },
];

const bestSellData = [
  {
    id: 16511,
    title: 'Woman T-Shirt',
    price: '$24.00',
    url: images.feature4,
  },
  {
    id: 26865,
    title: 'Man T-Shirt',
    price: '$44.00',
    url: images.feature5,
  },
  {
    id: 39542,
    title: 'Woman T-Shirt',
    price: '$34.00',
    url: images.feature3,
  },
];
