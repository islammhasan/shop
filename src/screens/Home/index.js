import React, {useEffect, useLayoutEffect} from 'react';
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
import {colors} from '../../assets';
import {SearchBar} from '../../components/SearchBar';
import styles from './styles';
import axios from 'axios';
import {Cart, FilterComponent, MenuComponent} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../../redux/products';
import {useCart} from '../../redux/cart';
export const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [categories, setCategories] = useState([]);
  const [featureData, setFeatureData] = useState([]);
  const [bestSellData, setBestSellData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [homeSearchVal, setHomeSearchVal] = useState('');

  useEffect(() => {
    initialFetch();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: null,
      headerLeft: () => {
        return <MenuComponent />;
      },
      headerRight: () => {
        return (
          <View style={{flexDirection: 'row'}}>
            <Cart />
            <FilterComponent />
          </View>
        );
      },
    });
  }, [navigation]);

  const initialFetch = async () => {
    await getCategories();
    await getFeatureProductsRedux();
    await getBestSellProducts();
    setLoading(false);
  };

  const getFeatureProductsRedux = async () => {
    try {
      const response = await dispatch(getProducts());
      setFeatureData(response);
    } catch (error) {
      console.warn(error);
    }
  };

  const getBestSellProducts = async () => {
    try {
      await fetch('https://fakestoreapi.herokuapp.com/products/category/jewelery')
        .then((res) => res.json())
        .then((json) => setBestSellData(json))
        .catch((e) => console.warn('e', e));
    } catch (error) {
      console.warn('error', error);
    }
  };
  const getCategories = async () => {
    try {
      await fetch('https://fakestoreapi.herokuapp.com/products/categories')
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
        color={colors.main}
      />
    );
  const data = {phone: '0123456789', code: user?.code};
  const addressData = {
    name: 'iss',
    phone: '0123456789',
    city: 'cairo',
    area: 'cairo',
    street: 'street',
    building: '3',
  };
  const newUsername = {
    name: 'issagain',
  };
  const productData = {
    product: '5f8d6063d3662c3c7ee310b5',
    cost: 198.9,
    count: 1,
  };
  const productDataToUpdate = {
    id: '604c1ebb47d27d0503fae209',
    count: 1,
  };

  // search validation
  // homeSearchVal.length
  // homeSearchVal !== ''
  const searchPress = () => {
    if (Boolean(homeSearchVal)) {
      navigation.navigate('Search', {homeSearchVal});
      setHomeSearchVal('');
    }
  };

  return (
    <View style={styles.firstLevelContainer}>
      <SearchBar
        onSubmitEditing={() => searchPress()}
        onSearchPress={() => searchPress()}
        value={homeSearchVal}
        onChangeText={(homeSearchVal) => setHomeSearchVal(homeSearchVal)}
      />
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
            keyExtractor={(item) => item.toString()}
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
              const {id, image, price, title, description} = item;
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ItemDetails', {
                      id,
                      image,
                      price,
                      title,
                      description,
                    })
                  }
                  style={styles.listItemContainer}
                  activeOpacity={0.8}>
                  <Image
                    style={styles.itemComponentImage}
                    source={{uri: image}}
                    resizeMode="contain"
                  />
                  <Text numberOfLines={1} style={styles.itemPrice}>
                    ${price}
                  </Text>
                  <Text numberOfLines={1} style={styles.itemTitle}>
                    {title}
                  </Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.id.toString()}
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
            renderItem={({item}) => {
              const {id, image, price, title, description} = item;
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ItemDetails', {
                      id,
                      image,
                      price,
                      title,
                      description,
                    })
                  }
                  style={styles.listItemContainer}
                  activeOpacity={0.8}>
                  <Image
                    style={styles.itemComponentImage}
                    source={{uri: image}}
                    resizeMode="contain"
                  />
                  <Text numberOfLines={1} style={styles.itemPrice}>
                    ${price}
                  </Text>
                  <Text numberOfLines={1} style={styles.itemTitle}>
                    {title}
                  </Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.id.toString()}
            horizontal
          />
        </View>
      </ScrollView>
    </View>
  );
};
