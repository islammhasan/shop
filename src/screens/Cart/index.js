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
import {Button} from '../../components/Button';
import styles from './styles';
import {images} from '../../assets';

export const Cart = () => {
  const [showIndicator, setShowIndicator] = useState(false);
  const [counter, setCounter] = useState(1);
  return (
    <View style={styles.container}>
      <Header
        hasBack
        hasSearch
        onBackPress={() => alert('onBackPress')}
        onSearchPress={() => alert('onSearchPress')}
      />
      <Text style={styles.screenTitle}>Cart</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listStyle}
        data={DATA}
        renderItem={({item}) => {
          return (
            <View key={item.id} style={styles.itemContainer}>
              <View style={styles.imageContainer}>
                <Image style={styles.itemImage} source={item.url} />
              </View>
              <View style={styles.itemDetails}>
                <Text numberOfLines={1} style={styles.itemTitle}>
                  {item.title}
                </Text>
                <Text numberOfLines={1} style={styles.itemBrand}>
                  {item.brand}
                </Text>
                <Text numberOfLines={1} style={styles.itemPrice}>
                  ${item.price}
                </Text>
                <View style={styles.counterContainer}>
                  <TouchableOpacity
                    onPress={() => counter > 1 && setCounter(counter - 1)}
                    style={styles.counterItem}>
                    <Text style={styles.counterMinus}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.counterText}>{counter}</Text>
                  <TouchableOpacity
                    onPress={() => setCounter(counter + 1)}
                    style={styles.counterItem}>
                    <Text style={styles.counterPlus}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity
                style={styles.removeContainer}
                onPress={() => alert('Item removed!')}>
                <Image style={styles.remove} source={images.remove} />
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={(item) => {
          item.id;
        }}
      />
      <Button
        customStyle={styles.btnStyle}
        title="Continue"
        isLoading={showIndicator}
        disableBtn={showIndicator}
        onPress={() => setShowIndicator(!showIndicator)}
      />
    </View>
  );
};

const DATA = [
  {
    id: 1,
    title: 'Woman T-Shirt',
    brand: 'Lotto.LTD',
    price: '55.00',
    url: images.feature1,
  },
  {
    id: 2,
    title: 'Man T-Shirt',
    brand: 'Bata',
    price: '34.00',
    url: images.feature2,
  },
  {
    id: 3,
    title: 'Woman T-Shirt',
    brand: 'Next',
    price: '43.00',
    url: images.feature3,
  },
  {
    id: 4,
    title: 'Woman T-Shirt',
    brand: 'Plus Point',
    price: '65.00',
    url: images.feature4,
  },
  {
    id: 5,
    title: 'Man T-Shirt',
    brand: "Cat's Eye",
    price: '47.00',
    url: images.feature5,
  },
  {
    id: 6,
    title: 'Woman T-Shirt',
    brand: 'Lotto.LTD',
    price: '39.99',
    url: images.feature1,
  },
  {
    id: 7,
    title: 'Man T-Shirt',
    brand: 'Bata',
    price: '25.00',
    url: images.feature2,
  },
  {
    id: 8,
    title: 'Woman T-Shirt',
    brand: 'Next',
    price: '41.00',
    url: images.feature3,
  },
];
