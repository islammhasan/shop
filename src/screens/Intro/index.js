import React from 'react';
import {Image, View} from 'react-native';
import {images} from '../../assets';
import styles from './styles';

export const Intro = () => {
  return (
    <View style={styles.container}>
      <Image
        source={images.logo}
        resizeMode="contain"
        style={styles.logoStyle}
      />
    </View>
  );
};
