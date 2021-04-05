import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {Button} from '../../components/Button';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {getAddresses} from '../../redux/user';

export const Address = ({navigation}) => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [addressesList, setAddressesList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getAdresses();
  }, []);

  const getAdresses = async () => {
    try {
      const response = await dispatch(getAddresses());
      setAddressesList(response);
      console.log('resAddressScreen', response);
    } catch (err) {
      console.log('error==>', err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.screenTitle}>Address</Text>
      <FlatList
        data={addressesList}
        contentContainerStyle={styles.listStyle}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        renderItem={({item}) => {
          const {_id} = item;
          const isSelected = selectedAddress == _id;
          return (
            <TouchableOpacity
              onPress={() => setSelectedAddress(_id)}
              activeOpacity={0.8}
              style={styles.addressContainer}>
              <View>
                <Text style={styles.addressText}>{item.phone}</Text>
                <Text style={styles.addressText}>
                  {`${item.city}, ${item.area}, ${item.street}, building ${item.building}`}
                </Text>
              </View>
              <View style={styles.selection}>
                {isSelected && <View style={styles.selected} />}
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <Button
        customStyle={styles.addAddressBtn}
        title="Add Address"
        textCustomStyle={styles.addAddressBtnText}
        onPress={() => navigation.navigate('CreateAddress')}
      />
      <Button
        customStyle={styles.continueBtn}
        title="Continue To Payment"
        onPress={() => navigation.navigate('Checkout')}
      />
    </SafeAreaView>
  );
};
