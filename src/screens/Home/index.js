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
import {SearchBar} from '../../components/SearchBar';
import styles from './styles';

export const Home = () => {
  return (
    <View style={styles.firstLevelContainer}>
      <Header
        hasMenu
        hasCart
        hasFilter
        onMenuPress={() => alert('onMenuPress')}
        onCartPress={() => alert('onCartPress')}
        onFilterPress={() => alert('onFilterPress')}
      />
      <SearchBar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}>
        <View style={styles.listComponentStyle}>
          <View style={styles.listComponentLabelsStyle}>
            <Text style={styles.listLabel}>Categories</Text>
            <TouchableOpacity
              onPress={() => {
                alert('See All');
              }}
              activeOpacity={0.8}>
              <Text style={styles.seeAllLabel}>See all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            style={styles.listSpacing}
            data={DATA}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  alert('Category!');
                }}
                style={styles.listItemContainer}
                activeOpacity={0.8}>
                <Image style={styles.catListItemImage} source={item.url} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            horizontal
          />
        </View>
        {/* FEATURED */}
        <View style={styles.listComponentStyle}>
          <View style={styles.listComponentLabelsStyle}>
            <Text style={styles.listLabel}>Featured</Text>
            <TouchableOpacity
              onPress={() => {
                alert('See All');
              }}
              activeOpacity={0.8}>
              <Text style={styles.seeAllLabel}>See all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            style={styles.listSpacing}
            data={featureData}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  alert('Product details: ' + item.title);
                }}
                style={styles.listItemContainer}
                activeOpacity={0.8}>
                <Image style={styles.itemComponentImage} source={item.url} />
                <Text numberOfLines={1} style={styles.itemPrice}>
                  {item.price}
                </Text>
                <Text numberOfLines={1} style={styles.itemTitle}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            horizontal
          />
        </View>
        {/* BEST SELL */}
        <View style={styles.listComponentStyle}>
          <View style={styles.listComponentLabelsStyle}>
            <Text style={styles.listLabel}>Best Sell</Text>
            <TouchableOpacity
              onPress={() => {
                alert('See All');
              }}
              activeOpacity={0.8}>
              <Text style={styles.seeAllLabel}>See all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            style={styles.listSpacing}
            data={bestSellData}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  alert('Product details: ' + item.title);
                }}
                style={styles.listItemContainer}
                activeOpacity={0.8}>
                <Image style={styles.itemComponentImage} source={item.url} />
                <Text numberOfLines={1} style={styles.itemPrice}>
                  {item.price}
                </Text>
                <Text numberOfLines={1} style={styles.itemTitle}>
                  {item.title}
                </Text>
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
    id: 651,
    url: images.manCat,
  },
  {
    id: 4205,
    url: images.womanCat,
  },
  {
    id: 7524,
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
    id: 8946513,
    title: 'Woman T-Shirt',
    price: '$55.00',
    url: images.feature1,
  },
  {
    id: 1214,
    title: 'Man T-Shirt',
    price: '$34.00',
    url: images.feature2,
  },
  {
    id: 61512365,
    title: 'Woman T-Shirt',
    price: '$34.00',
    url: images.feature3,
  },
];

const bestSellData = [
  {
    id: 6511235,
    title: 'Woman T-Shirt',
    price: '$24.00',
    url: images.feature4,
  },
  {
    id: 3516216,
    title: 'Man T-Shirt',
    price: '$44.00',
    url: images.feature5,
  },
  {
    id: 658941,
    title: 'Woman T-Shirt',
    price: '$34.00',
    url: images.feature3,
  },
  {
    id: 984123,
    title: 'Woman T-Shirt',
    price: '$24.00',
    url: images.feature4,
  },
  {
    id: 6513,
    title: 'Man T-Shirt',
    price: '$44.00',
    url: images.feature5,
  },
  {
    id: 4113,
    title: 'Woman T-Shirt',
    price: '$34.00',
    url: images.feature3,
  },
];
