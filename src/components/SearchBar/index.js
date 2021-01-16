import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import {images} from '../../assets';

export const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <TouchableOpacity
        onPress={() => {
          alert('Searched');
        }}
        style={styles.searchIconContainer}>
        <Image
          source={images.search}
          resizeMode="contain"
          style={styles.searchIcon}
        />
      </TouchableOpacity>
      <TextInput
        // onChangeText={}
        // value={}
        placeholder={'Search Your Product'}
        placeholderTextColor="grey"
        style={styles.searchTextInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    alignSelf: 'center',
    marginHorizontal: 16.5,
    height: 52,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 7,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    borderRadius: 8,
  },
  searchIconContainer: {
    width: 50,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  searchTextInput: {
    fontSize: 18,
    paddingEnd: 10,
    flex: 1,
  },
});
