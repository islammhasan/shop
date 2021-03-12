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
  Button,
} from 'react-native';
import {colors, images} from '../../assets';
import {SearchBar} from '../../components/SearchBar';
import styles from './styles';
import axios from 'axios';
import {Cart, FilterComponent, MenuComponent} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {actions, getProducts} from '../../redux/products';
import {confirmUser, userLogin} from '../../redux/user';
import {store} from '../../redux/store';
export const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [categories, setCategories] = useState([]);
  const [featureData, setFeatureData] = useState([]);
  const [bestSellData, setBestSellData] = useState([]);
  const [loading, setLoading] = useState(true);
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
    // dispatch(userLogin());
    // await getFeatureProducts();
    // dispatch(actions.getProducts())
    await getFeatureProductsRedux();
    await getBestSellProducts();
    // await getFeatureProductsAxios();
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
  const getFeatureProductsRedux = async () => {
    try {
      const response = await dispatch(getProducts());
      setFeatureData(response);
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
        color={colors.main}
      />
    );
  const data = {phone: '01117727651', code: user?.code};
  const headers = {
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
  };
  
  return (
    <View style={styles.firstLevelContainer}>
      <Button title="ss" onPress={() => dispatch(confirmUser(data))} />
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
            keyExtractor={(item) => item.id}
            horizontal
          />
        </View>
      </ScrollView>
    </View>
  );
};
