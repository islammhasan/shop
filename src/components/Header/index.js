import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {images} from '../../assets';

export const Header = () => {
  return (
    <View style={styles.headerStyle}>
      <View>
        <TouchableOpacity style={styles.iconContainer}>
          <Image
            source={images.menu}
            resizeMode="contain"
            style={{width: 25}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: 70,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity style={styles.iconContainer}>
          <Image
            source={images.cart}
            resizeMode="contain"
            style={{width: 25}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Image
            source={images.filter}
            resizeMode="contain"
            style={{width: 25}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    marginVertical: 15,
    width: 326.5,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
