import React, {useEffect} from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {colors, images} from '../../assets';
import {Header} from '../../components/Header';
import {SearchBar} from '../../components/SearchBar';
import styles from './styles';
import axios from 'axios';

export const Home = ({navigation}) => {
  const [categories, setCategories] = useState([]);
  const [featureData, setFeatureData] = useState([]);
  const [bestSellData, setBestSellData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initialFetch();
  }, []);

  const initialFetch = async () => {
    await getCategories();
    // await getFeatureProducts();
    await getBestSellProducts();
    await getFeatureProductsAxios();
    setLoading(false);
  };

  const getFeatureProductsAxios = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products', {
        params: {
          limit: 5,
        },
      });
      setFeatureData(response.data);
    } catch (error) {
      console.warn(error);
    }
  };

  const getFeatureProducts = async () => {
    try {
      await fetch('https://fakestoreapi.com/products?limit=5')
        .then((res) => res.json())
        .then((json) => setFeatureData(json))
        .catch((e) => console.warn('e', e));
    } catch (error) {
      console.warn('error', error);
    }
  };
  const getBestSellProducts = async () => {
    try {
      await fetch('https://fakestoreapi.com/products/category/jewelery')
        .then((res) => res.json())
        .then((json) => setBestSellData(json))
        .catch((e) => console.warn('e', e));
    } catch (error) {
      console.warn('error', error);
    }
  };
  const getCategories = async () => {
    try {
      await fetch('https://fakestoreapi.com/products/categories')
        .then((res) => res.json())
        .then((json) => setCategories(json))
        .catch((e) => console.warn('e', e));
    } catch (error) {
      console.warn('error', error);
    }
  };
  if (loading)
    return (
      <ActivityIndicator
        style={{
          marginTop: 100,
        }}
        size="large"
        color="red"
      />
    );
  return (
    <View style={styles.firstLevelContainer}>
      {/* <Header
        hasMenu
        hasCart
        hasFilter
        onMenuPress={() => alert('onMenuPress')}
        onCartPress={() => alert('onCartPress')}
        onFilterPress={() => alert('onFilterPress')}
      /> */}
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
            data={categories}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  alert(`Category : ${item}`);
                }}
                style={[
                  styles.listItemContainer,
                  {backgroundColor: colors.main, padding: 15, borderRadius: 20},
                ]}
                activeOpacity={0.8}>
                <Text style={{fontSize: 16, color: colors.white}}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item}
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
            renderItem={({item}) => {
              console.log('item', item);
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ItemDetails', {id: item.id})
                  }
                  style={styles.listItemContainer}
                  activeOpacity={0.8}>
                  <Image
                    style={styles.itemComponentImage}
                    source={{uri: item.image}}
                    resizeMode="contain"
                  />
                  <Text numberOfLines={1} style={styles.itemPrice}>
                    ${item.price}
                  </Text>
                  <Text numberOfLines={1} style={styles.itemTitle}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
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
                <Image
                  style={styles.itemComponentImage}
                  source={{uri: item.image}}
                  resizeMode="contain"
                />
                <Text numberOfLines={1} style={styles.itemPrice}>
                  ${item.price}
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
