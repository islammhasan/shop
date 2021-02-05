import React, {useState} from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Header} from '../../components/Header';
import {Button} from '../../components/Button';
import styles from './styles';
import {images} from '../../assets';

export const Checkout = () => {
  const [counter, setCounter] = useState(1);
  const [selectedAddress, setSelectedAddress] = useState(1);
  const [showIndicator, setShowIndicator] = useState(false);
  return (
    <>
      <Header
        hasBack
        hasSearch
        onBackPress={() => alert('onBackPress')}
        onSearchPress={() => alert('onSearchPress')}
      />
      <Text style={styles.screenTitle}>Checkout</Text>
      <ScrollView>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listStyle}
          data={ItemsData}
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
        <FlatList
          data={ADDRESSES}
          contentContainerStyle={styles.addressListStyle}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => {
            item.id;
          }}
          renderItem={({item}) => {
            const {id} = item;
            const isSelected = selectedAddress == id;
            return (
              <TouchableOpacity
                onPress={() => setSelectedAddress(id)}
                activeOpacity={0.8}
                style={styles.addressContainer}>
                <View>
                  <Text style={styles.addressText}>{item.address}</Text>
                  <Text style={styles.addressText}>House no: {item.house}</Text>
                  <Text style={styles.addressText}>Road no: {item.road}</Text>
                </View>
                <View style={styles.selection}>
                  {isSelected && <View style={styles.selected} />}
                </View>
              </TouchableOpacity>
            );
          }}
        />
        <View style={styles.divider}></View>
        <View style={styles.paymentDetails}>
          <View style={styles.paymentText}>
            <Text numberOfLines={1} style={styles.title}>
              Subtotal
            </Text>
            <Text numberOfLines={1} style={styles.value}>
              $160.00
            </Text>
          </View>
          <View style={styles.paymentText}>
            <Text numberOfLines={1} style={styles.title}>
              Discount
            </Text>
            <Text numberOfLines={1} style={styles.value}>
              5%
            </Text>
          </View>
          <View style={styles.paymentText}>
            <Text numberOfLines={1} style={styles.title}>
              Shipping
            </Text>
            <Text numberOfLines={1} style={styles.value}>
              $10
            </Text>
          </View>
          <View style={styles.divider}></View>
          <View style={styles.paymentText}>
            <Text numberOfLines={1} style={styles.title}>
              Total
            </Text>
            <Text numberOfLines={1} style={styles.value}>
              $162.00
            </Text>
          </View>
        </View>
      </ScrollView>
      <Button
        customStyle={styles.buyBtn}
        title="Buy"
        textCustomStyle={styles.btnText}
        isLoading={showIndicator}
        disableBtn={showIndicator}
        onPress={() => setShowIndicator(!showIndicator)}
      />
    </>
  );
};

const ADDRESSES = [
  {id: '1', address: 'Shewrapara, Mirpur, Dhaka-1216', house: '938', road: '9'},
  //   {id: '2', address: 'Chatkhil, Noakhali', house: '22', road: '7'},
];

const ItemsData = [
  {
    id: '1',
    title: 'Woman T-Shirt',
    brand: 'Lotto.LTD',
    price: '55.00',
    url: images.feature1,
  },
  {
    id: '2',
    title: 'Man T-Shirt',
    brand: 'Bata',
    price: '34.00',
    url: images.feature2,
  },
  //   {
  //     id: '3',
  //     title: 'Woman T-Shirt',
  //     brand: 'Next',
  //     price: '43.00',
  //     url: images.feature3,
  //   },
  //   {
  //     id: '4',
  //     title: 'Woman T-Shirt',
  //     brand: 'Plus Point',
  //     price: '65.00',
  //     url: images.feature4,
  //   },
  //   {
  //     id: '5',
  //     title: 'Man T-Shirt',
  //     brand: "Cat's Eye",
  //     price: '47.00',
  //     url: images.feature5,
  //   },
  //   {
  //     id: '6',
  //     title: 'Woman T-Shirt',
  //     brand: 'Lotto.LTD',
  //     price: '39.99',
  //     url: images.feature1,
  //   },
  //   {
  //     id: '7',
  //     title: 'Man T-Shirt',
  //     brand: 'Bata',
  //     price: '25.00',
  //     url: images.feature2,
  //   },
  //   {
  //     id: '8',
  //     title: 'Woman T-Shirt',
  //     brand: 'Next',
  //     price: '41.00',
  //     url: images.feature3,
  //   },
];
