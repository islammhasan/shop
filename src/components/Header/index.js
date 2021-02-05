import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';
import {images} from '../../assets';
import {windowWidth} from '../../config';
import {Cart} from '../Cart';
import {FilterComponent} from '../FilterComponent';
import {Search} from '../Search';
import {MenuComponent} from '../MenuComponent';

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
    customStyle,
  } = props;
  return (
    <View style={[styles.headerStyle, customStyle]}>
      {hasMenu && <MenuComponent onMenuPress={onMenuPress} />}
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
        {hasSearch && <Search onSearchPress={onSearchPress} />}
        {hasCart && <Cart onCartPress={onCartPress} />}
        {hasFilter && <FilterComponent onFilterPress={onFilterPress} />}
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
    marginTop: Platform.OS == 'ios' ? 20 : 0,
  },
  iconContainer: {
    paddingStart: 25,
    paddingEnd: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIconStyle: {
    width: 22,
    height: 9.93,
  },
  rightIconsContainer: {
    flexDirection: 'row',
  },
});
