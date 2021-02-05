import React from 'react';
import {FlatList, Text, Image, TouchableOpacity} from 'react-native';
import {images} from '../../assets';
import {styles} from './styles';

export const Menu = () => {
  return (
    <>
      <FlatList
        contentContainerStyle={styles.listStyle}
        data={MENU_ITEMS}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => alert(`${item.title} pressed!`)}
              activeOpacity={0.8}
              style={styles.menuItemStyle}>
              <Text style={styles.menuItemTextStyle}>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
      />
      <TouchableOpacity
        onPress={() => alert('Close Pressed!')}
        activeOpacity={0.8}
        style={styles.closeContainerStyle}>
        <Image style={styles.closeStyle} source={images.close} />
      </TouchableOpacity>
    </>
  );
};

const MENU_ITEMS = [
  {
    id: '1',
    title: 'Home',
  },
  {
    id: '2',
    title: 'Profile',
  },
  {
    id: '3',
    title: 'My Cart',
  },
  {
    id: '4',
    title: 'Favorite',
  },
  {
    id: '5',
    title: 'My Orders',
  },
  {
    id: '6',
    title: 'Language',
  },
  {
    id: '7',
    title: 'Settings',
  },
];
