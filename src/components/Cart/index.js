import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {images} from '../../assets';

export const Cart = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Cart')}
      style={styles.rightIconStyle}>
      <Image
        source={images.cart}
        resizeMode="contain"
        style={styles.defaultIconStyle}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  defaultIconStyle: {
    width: 20,
    height: 20,
  },
  rightIconStyle: {
    paddingEnd: 20,
  },
});
