import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {Header} from '../../components/Header';
import styles from './styles';
import Swiper from 'react-native-swiper';
import {colors, images} from '../../assets';

export const ItemDetails = () => {
  const price = 50;
  const special_price = 20;
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [switchTabs, setSwitchTabs] = useState(true);
  const [numOfLines, setNumOfLines] = useState(3);

  return (
    <View style={styles.container}>
      <Header
        hasBack
        hasSearch
        hasCart
        onBackPress={() => alert('onBackPress')}
        onCartPress={() => alert('onCartPress')}
        onSearchPress={() => alert('onSearchPress')}
      />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 22,
        }}>
        {/* <Swiper
          autoplay
          style={styles.wrapper}
          paginationStyle={styles.paginationStyle}>
          <View style={styles.slide1}> */}
        <Image
          source={images.slide1}
          resizeMode={'cover'}
          style={{width: '100%', height: 175}}
        />
        {/* </View> */}
        {/* </Swiper> */}
        <Text numberOfLines={3} style={styles.productTitle}>
          Black trutleneck top
        </Text>
        {(price || special_price) && (
          <View style={styles.priceContainer}>
            <Text style={styles.price}>${special_price || price}</Text>
            {special_price && <Text style={styles.discount}>${price}</Text>}
          </View>
        )}

        <View style={styles.ratingContainer}>
          <View style={styles.rating}>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 18,
              }}>
              4.5
            </Text>
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
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart. I am
          alone, and feel the charm of existence in this spot, which was created
          for the bliss of souls like mine.
        </Text>
        <TouchableOpacity
          onPress={() =>
            numOfLines == 3 ? setNumOfLines(5) : setNumOfLines(3)
          }>
          <Text>{numOfLines == 3 ? 'More' : 'Less'}</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <TouchableOpacity onPress={() => setSwitchTabs(true)}>
            <Text>Select Size</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSwitchTabs(false)}>
            <Text>Select Color</Text>
          </TouchableOpacity>
        </View>

        {switchTabs ? (
          <FlatList
            data={sizes}
            renderItem={({item}) => {
              const {size, id} = item;
              const isSelected = selectedSize == id;
              return (
                <TouchableOpacity
                  onPress={() => setSelectedSize(id)}
                  activeOpacity={0.8}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: isSelected ? colors.main : colors.gray,
                    marginEnd: 2,
                  }}>
                  <Text
                    style={{color: isSelected ? colors.white : colors.black}}>
                    {size}
                  </Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.id}
            horizontal
          />
        ) : (
          <FlatList
            data={_colors}
            renderItem={({item}) => {
              const {color, id} = item;
              const isSelected = selectedColor == id;
              return (
                <TouchableOpacity
                  onPress={() => setSelectedColor(id)}
                  activeOpacity={0.8}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: isSelected ? colors.main : colors.gray,
                    marginEnd: 2,
                  }}>
                  <Text
                    style={{color: isSelected ? colors.white : colors.black}}>
                    {color}
                  </Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.id}
            horizontal
          />
        )}
      </ScrollView>

      <TouchableOpacity
        onPress={() => alert('Buy Now')}
        activeOpacity={0.8}
        style={styles.buyNow}>
        <Text style={styles.buyNowText}>BUY NOW</Text>
      </TouchableOpacity>
    </View>
  );
};

const sizes = [
  {id: 1, size: 's'},
  {id: 2, size: 'm'},
  {id: 3, size: 'l'},
  {id: 4, size: 'x'},
  {id: 5, size: 'xx'},
  {id: 6, size: 'xxx'},
];

const _colors = [
  {id: 1, color: 'red'},
  {id: 2, color: 'green'},
  {id: 3, color: 'blue'},
  {id: 4, color: 'yellow'},
  {id: 5, color: 'black'},
  {id: 6, color: 'white'},
];
