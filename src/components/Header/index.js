import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {images} from '../../assets';
import {windowWidth, windowHeight} from '../../config';

export const Header = (props) => {
  const {
    onMenuPress,
    onCartPress,
    onFilterPress,
    hasSearch,
    hasFilter,
    hasCart,
  } = props;
  return (
    <View style={styles.headerStyle}>
      <TouchableOpacity onPress={onMenuPress} style={styles.iconContainer}>
        <Image
          source={images.menu}
          resizeMode="contain"
          style={{width: 20, height: 16}}
        />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          // alignItems: 'center',
          // width: 70,
          // justifyContent: 'space-between',
        }}>
        {hasSearch && (
          <TouchableOpacity
            onPress={onCartPress}
            style={{
              paddingHorizontal: 18,
            }}>
            <Image
              source={images.search}
              resizeMode="contain"
              style={{width: 20, height: 20}}
            />
          </TouchableOpacity>
        )}
        {hasCart && (
          <TouchableOpacity
            onPress={onCartPress}
            style={{
              paddingHorizontal: 18,
            }}>
            <Image
              source={images.cart}
              resizeMode="contain"
              style={{width: 20, height: 20}}
            />
          </TouchableOpacity>
        )}
        {hasFilter && (
          <TouchableOpacity
            onPress={onFilterPress}
            style={{
              paddingEnd: 25,
            }}>
            <Image
              source={images.filter}
              resizeMode="contain"
              style={{width: 20, height: 20}}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    // marginVertical: 15,
    // paddingHorizontal:23,
    width: windowWidth,
    // height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    // width: 60,
    // height: 30,
    paddingStart: 25,
    paddingEnd: 10,
    // paddingBottom:10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
