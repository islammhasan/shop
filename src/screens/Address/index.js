import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {Header} from '../../components/Header';
import {Button} from '../../components/Button';
import styles from './styles';

export const Address = () => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [showIndicator, setShowIndicator] = useState(false);
  return (
    <>
      <Header
        hasBack
        hasSearch
        onBackPress={() => alert('onBackPress')}
        onSearchPress={() => alert('onSearchPress')}
      />
      <View style={styles.container}>
        <Text style={styles.screenTitle}>Address</Text>
        <FlatList
          data={ADDRESSES}
          contentContainerStyle={styles.listStyle}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => {
            item.id;
          }}
          renderItem={({item}) => {
            const {id} = item;
            const isSelected = selectedAddress == id;
            return (
              <TouchableOpacity
                onPress={() => setSelectedAddress(id)}
                activeOpacity={0.8}
                style={styles.addressContainer}>
                <View>
                  <Text style={styles.addressText}>{item.address}</Text>
                  <Text style={styles.addressText}>House no: {item.house}</Text>
                  <Text style={styles.addressText}>Road no: {item.road}</Text>
                </View>
                <View style={styles.selection}>
                  {isSelected && <View style={styles.selected} />}
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Button
        customStyle={styles.addAddressBtn}
        title="Add Address"
        textCustomStyle={styles.addAddressBtnText}
        isLoading={showIndicator}
        disableBtn={showIndicator}
        onPress={() => alert('Add new address')}
      />
      <Button
        customStyle={styles.continueBtn}
        title="Continue To Payment"
        isLoading={showIndicator}
        disableBtn={showIndicator}
        onPress={() => setShowIndicator(!showIndicator)}
      />
    </>
  );
};

const ADDRESSES = [
  {id: 1, address: 'Shewrapara, Mirpur, Dhaka-1216', house: '938', road: '9'},
  {id: 2, address: 'Chatkhil, Noakhali', house: '22', road: '7'},
];
