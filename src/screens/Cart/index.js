import React, {useState, useLayoutEffect} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {Button} from '../../components/Button';
import styles from './styles';
import {images} from '../../assets';
import {MenuComponent} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {decreaseCount, deleteItem, increaseCount} from '../../redux/cartLocal';

export const Cart = ({navigation}) => {
  // const [showIndicator, setShowIndicator] = useState(false);
  // const [counter, setCounter] = useState(1);
  const cartItems = useSelector((state) => state.cartLocal.items);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return <MenuComponent />;
      },
      headerTitle: null,
    });
  }, [navigation]);

  let total = 0;

  cartItems.map((item) => {
    total += item.qty * item.price;
  });

  const proceed = () => {
    navigation.navigate('Address');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Cart</Text>
      {cartItems.length == 0 ? (
        <>
          <Text style={styles.noItemsStyle}>Your cart is empty!</Text>
          <Button
            customStyle={styles.backToShopStyle}
            textCustomStyle={styles.backToShopText}
            title="Back to shop"
            onPress={() => navigation.navigate('Home')}
          />
        </>
      ) : (
        <>
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
          <Text style={styles.totalText}>
            Total <Text style={styles.totalPrice}>${total}</Text>
          </Text>
          <Button
            customStyle={styles.btnStyle}
            title="Continue"
            onPress={() => proceed()}
          />
        </>
      )}
    </View>
  );
};
