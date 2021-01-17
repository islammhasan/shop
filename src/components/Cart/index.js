import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {images} from '../../assets';

export const Cart = (props) => {
  const {onCartPress} = props;
  return (
    <TouchableOpacity onPress={onCartPress} style={styles.rightIconStyle}>
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
