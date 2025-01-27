import React, {useState, useLayoutEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import styles from './styles';
import Swiper from 'react-native-swiper';
import {colors, images} from '../../assets';
import {Cart, Search} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../../redux/cartLocal';

export const ItemDetails = ({navigation, route}) => {
  const {id, title, description, price, image} = route.params;
  const item = {
    id,
    title,
    description,
    price,
    image,
  };
  const special_price = null;
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [switchTabs, setSwitchTabs] = useState(true);
  const [numOfLines, setNumOfLines] = useState(3);
  const cartList = useSelector((state) => state.cartLocal.items);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: null,
      headerRight: () => {
        return (
          <View style={styles.headerIconsRight}>
            <Cart />
            <Search />
          </View>
        );
      },
    });
  }, [navigation]);

  const itemInCart = cartList.find((cartItem) => item.id == cartItem.id);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.sView}>
        {/* <Swiper
          height={175}
          style={styles.wrapper}
          dotColor={colors.white}
          activeDotColor={colors.main}
          paginationStyle={styles.paginationStyle}>
          {_Images.map((item) => {
            return (
              <View key={item.id} style={styles.slide1}>
                <Image
                  source={item.url}
                  resizeMode={'cover'}
                  style={styles.slideImage}
                />
              </View>
            );
          })}
        </Swiper> */}
        <View style={styles.slide1}>
          <Image
            source={{uri: image}}
            resizeMode={'contain'}
            style={styles.singleImage}
          />
        </View>
        <Text numberOfLines={3} style={styles.productTitle}>
          {title}
        </Text>
        {(price || special_price) && (
          <View style={styles.priceContainer}>
            <Text style={styles.price}>${special_price || price}</Text>
            {special_price && <Text style={styles.discount}>${price}</Text>}
          </View>
        )}
        <View style={styles.ratingContainer}>
          <View style={styles.rating}>
            <Text style={styles.ratingText}>4.5</Text>
          </View>
          <Text numberOfLines={1} style={styles.ratingTitle}>
            Very Good
          </Text>
          <Text numberOfLines={3} style={styles.reviews}>
            49 Reviews
          </Text>
        </View>
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text numberOfLines={numOfLines} style={styles.description}>
          {description}
        </Text>
        <TouchableOpacity
          onPress={() =>
            numOfLines == 3 ? setNumOfLines(5) : setNumOfLines(3)
          }>
          <Text>{numOfLines == 3 ? 'More' : 'Less'}</Text>
        </TouchableOpacity>
        <View style={styles.variationTabs}>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => setSwitchTabs(true)}>
            <Text style={[styles.tabText, switchTabs && styles.activeTab]}>
              Select Size
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => setSwitchTabs(false)}>
            <Text style={[styles.tabText, !switchTabs && styles.activeTab]}>
              Select Color
            </Text>
          </TouchableOpacity>
        </View>

        {switchTabs ? (
          <FlatList
            data={sizes}
            contentContainerStyle={styles.tabsContent}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              const {size, id} = item;
              const isSelected = selectedSize == id;
              return (
                <TouchableOpacity
                  onPress={() => setSelectedSize(id)}
                  activeOpacity={0.8}
                  style={[
                    styles.list,
                    isSelected && {backgroundColor: colors.main},
                  ]}>
                  <Text
                    style={{
                      color: isSelected ? colors.white : colors.black,
                      fontSize: 16,
                    }}>
                    {size.toUpperCase()}
                  </Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.id.toString()}
            horizontal
          />
        ) : (
          <FlatList
            data={_colors}
            contentContainerStyle={styles.tabsContent}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              const {color, id} = item;
              const isSelected = selectedColor == id;
              return (
                <TouchableOpacity
                  onPress={() => setSelectedColor(id)}
                  activeOpacity={0.8}
                  style={[
                    styles.list,
                    isSelected && {backgroundColor: colors.main},
                  ]}>
                  <Text
                    style={{
                      color: isSelected ? colors.white : colors.black,
                      fontSize: 16,
                    }}>
                    {color}
                  </Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.id.toString()}
            horizontal
          />
        )}
      </ScrollView>
      <View style={styles.bottomBtns}>
        <TouchableOpacity
          onPress={() => dispatch(addToCart(item))}
          activeOpacity={0.8}
          style={styles.addToCart}>
          <Text style={styles.addToCartText}>
            {itemInCart == undefined
              ? 'ADD TO CART'
              : `QUANTITY (${itemInCart.qty})`}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert('Buy Now')}
          activeOpacity={0.8}
          style={styles.buyNow}>
          <Text style={styles.buyNowText}>BUY NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const sizes = [
  {id: 1, size: 's'},
  {id: 2, size: 'm'},
  {id: 3, size: 'l'},
  {id: 4, size: 'xl'},
  {id: 5, size: 'xxl'},
  {id: 6, size: 'xxxl'},
];

const _colors = [
  {id: 1, color: 'red'},
  {id: 2, color: 'green'},
  {id: 3, color: 'blue'},
  {id: 4, color: 'yellow'},
  {id: 5, color: 'black'},
  {id: 6, color: 'white'},
];

// const _Images = [
//   {
//     id: 1,
//     url: images.slide1,
//   },
//   {
//     id: 2,
//     url: images.slide2,
//   },
//   {
//     id: 3,
//     url: images.slide3,
//   },
// ];
