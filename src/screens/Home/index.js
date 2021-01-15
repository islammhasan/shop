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
    <View style={{flex:1,
      paddingTop: 45,
    
    }}>
      <Header
        hasCart
        hasFilter
        onMenuPress={() => alert('onMenuPress')}
        onCartPress={() => alert('onCartPress')}
        onFilterPress={() => alert('onFilterPress')}
      />
      <View style={styles.searchBar}>
        <TouchableOpacity style={styles.searchIcon}>
          <Image
            source={images.search}
            resizeMode="contain"
            style={{width: 20, height: 20}}
          />
        </TouchableOpacity>
        {/* <View style={{flex: 1}}> */}
        <TextInput
          // onChangeText={}
          // value={}
          placeholder={'Search Your Product'}
          placeholderTextColor="grey"
          // defaultValue='ddddd'
          style={{fontSize: 18, paddingEnd: 10, flex: 1}}
        />
        {/* </View> */}
      </View>
      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <View
        style={{
          // width: 343,
          // height: 125,
          paddingStart: 16.5,

          // marginTop: 25,
          // padding: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 22}}>Categories</Text>
          <Text style={{fontSize: 14, marginEnd: 16.5}}>See all</Text>
        </View>
        <FlatList
          style={{paddingTop: 20}}
          data={DATA}
          showsHorizontalScrollIndicator={false}
          // ItemSeparatorComponent={() => <View style={{width: 20}}></View>}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                width: 114,
                height: 65,
                justifyContent: 'center',
                alignItems: 'center',
                marginEnd: 20,
              }}
              activeOpacity={0.8}>
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
          // width: 343,
          // height: 296,
          paddingStart: 16.5,
          marginTop: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 22}}>Featured</Text>
          <Text style={{fontSize: 14, marginEnd: 16.5}}>See all</Text>
        </View>
        <FlatList
          style={{paddingTop: 20}}
          data={featureData}
          showsHorizontalScrollIndicator={false}
          // ItemSeparatorComponent={() => <View style={{width: 20}}></View>}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                marginEnd: 20,
                width: 150,
              }}
              activeOpacity={0.8}>
              <Image
                style={{width: 150, height: 180, borderRadius: 8}}
                source={item.url}
              />
              <Text numberOfLines={1} style={{fontSize: 16, marginTop: 11}}>
                {item.price}
              </Text>
              <Text numberOfLines={1} style={{fontSize: 16, marginTop: 7}}>
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          horizontal
        />
      </View>
      {/* BEST SELL */}
      <View
        style={{
          // width: 343,
          // height: 296,
          paddingStart: 16.5,

          marginTop: 20,
          // padding: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 22}}>Best Sell</Text>
          <Text style={{fontSize: 14, marginEnd: 16.5}}>See all</Text>
        </View>
        <FlatList
          style={{paddingTop: 20}}
          data={bestSellData}
          showsHorizontalScrollIndicator={false}
          // ItemSeparatorComponent={() => <View style={{width: 20}}></View>}
          renderItem={({item}) => (
            <TouchableOpacity  style={{
              marginEnd: 20,
              width: 150,
            }} activeOpacity={0.8}>
              <Image style={{width: 150, height: 180,borderRadius:8}} source={item.url} />
              <Text numberOfLines={1} style={{fontSize: 16, marginTop: 11}}>{item.price}</Text>
              <Text numberOfLines={1} style={{fontSize: 16, marginTop: 7}}>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          horizontal
        />
      </View>
    </ScrollView>
    </View>
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
