import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {images} from '../../assets';

export const MenuComponent = (props) => {
  const {onMenuPress} = props;
  return (
    <TouchableOpacity onPress={onMenuPress} style={styles.iconContainer}>
      <Image
        source={images.menu}
        resizeMode="contain"
        style={styles.menuIconStyle}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    paddingStart: 25,
    paddingEnd: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuIconStyle: {
    width: 20,
    height: 16,
  },
});
