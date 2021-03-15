import React, {useState} from 'react';
import {View, FlatList, Text, TouchableOpacity, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {getCountry, getLanguage} from '../../redux/settings';
import {
  getChildrenCats,
  getChildrenCatsProducts,
  getParentCats,
  getParentCatsProducts,
} from '../../redux/categories';
import styles from './styles';
import {getUserOrders} from '../../redux/orders';

const emptySpace = () => {
  return <View style={styles.divider}></View>;
};

const parentCatId = '5f8d59aecd87223ae142fe9c';
const childCatId = '5f8d5a2fcd87223ae142fea0';

export const Config = () => {
  const dispatch = useDispatch();
  const [parentCats, setParentCats] = useState([]);
  const [childrenCats, setChildrenCats] = useState([]);
  const [parentProducts, setParentProducts] = useState([]);
  const [childrenProducts, setChildrenProducts] = useState([]);

  const logChanges = () => {
    console.log(parentCats);
    console.log(childrenCats);
    console.log(parentProducts);
    console.log(childrenProducts);
  };

  const updateParentCats = async () => {
    const response = await getParentCats();
    setParentCats(response);
  };

  const updateChildrenCats = async () => {
    const response = await getChildrenCats(parentCatId);
    setChildrenCats(response);
  };

  const updateParentCatsProducts = async () => {
    const response = await getParentCatsProducts(parentCatId);
    setParentProducts(response);
  };

  const updateChildrenCatsProducts = async () => {
    const response = await getChildrenCatsProducts(childCatId);
    setChildrenProducts(response);
  };

  return (
    <View style={{marginTop: 100}}>
      <Button
        title={'get user orders'}
        onPress={() => dispatch(getUserOrders())}
      />
      <Button title={'get parent categories'} onPress={updateParentCats} />
      <Button title={'get children categories'} onPress={updateChildrenCats} />
      <Button
        title={'get parent category products'}
        onPress={updateParentCatsProducts}
      />
      <Button
        title={'get children category products'}
        onPress={updateChildrenCatsProducts}
      />
      <Button title={'log changes local state'} onPress={logChanges} />
      <Text style={styles.labelStyle}>Select Country</Text>
      <FlatList
        contentContainerStyle={styles.listStyle}
        ItemSeparatorComponent={emptySpace}
        data={COUNTRIES}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.selectionBtn}
              onPress={() => dispatch(getCountry(item.id))}>
              <Text style={styles.selectionTxt}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
      <Text style={styles.labelStyle}>Select Language</Text>
      <FlatList
        contentContainerStyle={styles.listStyle}
        ItemSeparatorComponent={emptySpace}
        data={LANGUAGES}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.selectionBtn}
              onPress={() => dispatch(getLanguage(item.id))}>
              <Text style={styles.selectionTxt}>{item.lang}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const COUNTRIES = [
  {
    id: '1',
    name: 'Egypt',
  },
  {
    id: '2',
    name: 'USA',
  },
];

const LANGUAGES = [
  {
    id: '1',
    lang: 'EN',
  },
  {
    id: '2',
    lang: 'AR',
  },
];
