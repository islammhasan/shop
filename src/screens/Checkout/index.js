import React, {useState} from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Button} from '../../components/Button';
import styles from './styles';
import {images} from '../../assets';
import {useDispatch, useSelector} from 'react-redux';
import {decreaseCount, deleteItem, increaseCount} from '../../redux/cartLocal';

export const Checkout = ({navigation}) => {
  const cartItems = useSelector((state) => state.cartLocal.items);
  const [selectedAddress, setSelectedAddress] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState(1);
  const dispatch = useDispatch();

  let subTotal = 0;
  let discount = 5;
  let discountPercentage = 100;
  let shipping = 10;

  cartItems.map((item) => {
    subTotal += item.qty * item.price;
  });

  let total = subTotal + subTotal * (discount / discountPercentage) + shipping;

  return (
    <>
      <Text style={styles.screenTitle}>Checkout</Text>
      <ScrollView>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listStyle}
          data={cartItems}
          keyExtractor={(item) => item.id?.toString()}
          renderItem={({item}) => {
            const {id, image, price, title, description} = item;
            return (
              <View key={id} style={styles.itemContainer}>
                <View style={styles.imageContainer}>
                  <Image
                    resizeMode="contain"
                    style={styles.itemImage}
                    source={{uri: image}}
                  />
                </View>
                <View style={styles.itemDetails}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('ItemDetails', {
                        id,
                        image,
                        price,
                        title,
                        description,
                      })
                    }>
                    <Text numberOfLines={1} style={styles.itemTitle}>
                      {title}
                    </Text>
                  </TouchableOpacity>
                  {/* <Text numberOfLines={1} style={styles.itemBrand}>
                  {brand}
                </Text> */}
                  <Text numberOfLines={1} style={styles.itemPrice}>
                    ${price}
                  </Text>
                  <View style={styles.counterContainer}>
                    <TouchableOpacity
                      onPress={() =>
                        item.qty > 1
                          ? dispatch(decreaseCount(item))
                          : dispatch(deleteItem(item.id))
                      }
                      style={styles.counterItem}>
                      <Text style={styles.counterMinus}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.counterText}>{item.qty}</Text>
                    <TouchableOpacity
                      onPress={() => dispatch(increaseCount(item))}
                      style={styles.counterItem}>
                      <Text style={styles.counterPlus}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.removeContainer}
                  onPress={() => dispatch(deleteItem(item.id))}>
                  <Image style={styles.remove} source={images.remove} />
                </TouchableOpacity>
              </View>
            );
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
        <FlatList
          data={PAYMENT_METHODS}
          contentContainerStyle={styles.addressListStyle}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => {
            item.id;
          }}
          renderItem={({item}) => {
            const {id} = item;
            const isSelected = paymentMethod == id;
            return (
              <TouchableOpacity
                onPress={() => setPaymentMethod(id)}
                activeOpacity={0.8}
                style={styles.addressContainer}>
                <View>
                  <Text style={styles.addressText}>{item.method}</Text>
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
              ${subTotal}
            </Text>
          </View>
          <View style={styles.paymentText}>
            <Text numberOfLines={1} style={styles.title}>
              Discount
            </Text>
            <Text numberOfLines={1} style={styles.value}>
              {discount}%
            </Text>
          </View>
          <View style={styles.paymentText}>
            <Text numberOfLines={1} style={styles.title}>
              Shipping
            </Text>
            <Text numberOfLines={1} style={styles.value}>
              ${shipping}
            </Text>
          </View>
          <View style={styles.divider}></View>
          <View style={[styles.paymentText, styles.dividerSpace]}>
            <Text numberOfLines={1} style={styles.title}>
              Total
            </Text>
            <Text numberOfLines={1} style={styles.value}>
              ${total}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.btnView}>
        <Button
          customStyle={styles.buyBtn}
          title="Confirm Order"
          textCustomStyle={styles.btnText}
          onPress={() => navigation.navigate('Confirmation')}
        />
      </View>
    </>
  );
};

const ADDRESSES = [
  {id: '1', address: 'Shewrapara, Mirpur, Dhaka-1216', house: '938', road: '9'},
];

const PAYMENT_METHODS = [
  {id: '1', method: 'Cash On Delivery'},
  {id: '2', method: 'Online Payment'},
];
