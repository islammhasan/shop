import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {images} from '../../assets';
import {windowWidth} from '../../config';

export const Header = (props) => {
  const {
    onMenuPress,
    onCartPress,
    onFilterPress,
    onSearchPress,
    onBackPress,
    hasSearch,
    hasFilter,
    hasCart,
    hasMenu,
    hasBack,
  } = props;
  return (
    <View style={styles.headerStyle}>
      {hasMenu && (
        <TouchableOpacity onPress={onMenuPress} style={styles.iconContainer}>
          <Image
            source={images.menu}
            resizeMode="contain"
            style={styles.menuIconStyle}
          />
        </TouchableOpacity>
      )}
      {hasBack && (
        <TouchableOpacity onPress={onBackPress} style={styles.iconContainer}>
          <Image
            source={images.back}
            resizeMode="contain"
            style={styles.backIconStyle}
          />
        </TouchableOpacity>
      )}
      <View style={styles.rightIconsContainer}>
        {hasSearch && (
          <TouchableOpacity
            onPress={onSearchPress}
            style={styles.rightIconStyle}>
            <Image
              source={images.search}
              resizeMode="contain"
              style={styles.defaultIconStyle}
            />
          </TouchableOpacity>
        )}
        {hasCart && (
          <TouchableOpacity onPress={onCartPress} style={styles.rightIconStyle}>
            <Image
              source={images.cart}
              resizeMode="contain"
              style={styles.defaultIconStyle}
            />
          </TouchableOpacity>
        )}
        {hasFilter && (
          <TouchableOpacity
            onPress={onFilterPress}
            style={styles.rightIconStyle}>
            <Image
              source={images.filter}
              resizeMode="contain"
              style={styles.defaultIconStyle}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
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
  defaultIconStyle: {
    width: 20,
    height: 20,
  },
  menuIconStyle: {
    width: 20,
    height: 16,
  },
  backIconStyle: {
    width: 22,
    height: 9.93,
  },
  rightIconsContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    // width: 70,
    // justifyContent: 'space-between',
  },
  rightIconStyle: {
    paddingEnd: 20,
  },
});
