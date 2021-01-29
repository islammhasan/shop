import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {Header} from '../../components/Header';
import styles from './styles';
import Swiper from 'react-native-swiper';
import {images} from '../../assets';

export const ItemDetails = () => {
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
      <ScrollView contentContainerStyle={{marginHorizontal: 24}}>
        <Swiper
          height={175}
          style={styles.wrapper}
          paginationStyle={styles.paginationStyle}>
          <View style={styles.slide1}>
            <Image
              source={images.slide1}
              resizeMode={'center'}
              sytle={{width: '100%', height: 175}}
            />
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
        <Text style={styles.productTitle}>Black trutleneck top</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>$42</Text>
          <Text style={styles.discount}>$62</Text>
        </View>
        <View style={styles.ratingContainer}>
          <View style={styles.ratingContainerStart}>
            <Text style={styles.rating}>4.5</Text>
            <Text style={styles.ratingTitle}>Very Good</Text>
          </View>
          <View style={styles.ratingContainerEnd}>
            <Text style={styles.reviews}>49 Reviews</Text>
          </View>
        </View>
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.description}>
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart. I am
          alone, and feel the charm of existence in this spot, which was created
          for the bliss of souls like mine.
        </Text>
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
