import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {images} from '../../assets';

export const FilterComponent = (props) => {
  const {onFilterPress} = props;
  return (
    <TouchableOpacity onPress={onFilterPress} style={styles.rightIconStyle}>
      <Image
        source={images.filter}
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
