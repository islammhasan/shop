import React from 'react';
import {Image, TouchableOpacity, Text, ScrollView} from 'react-native';
import {images} from '../../assets';
import styles from './styles';

export const Intro = () => {
  return (
    <ScrollView contentContainerStyle={styles.content} style={styles.container}>
      <Image
        source={images.logo}
        resizeMode="contain"
        style={styles.logoStyle}
      />
      <TouchableOpacity onPress={() => alert('ss')} style={styles.buttonStyle}>
        <Text style={styles.buttonTitleStyle}>Press</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
