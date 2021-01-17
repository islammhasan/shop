import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {images} from '../../assets';

export const Search = (props) => {
  const {onSearchPress} = props;
  return (
    <TouchableOpacity onPress={onSearchPress} style={styles.rightIconStyle}>
      <Image
        source={images.search}
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
