import React, {useState} from 'react';
import {Text, ScrollView, SafeAreaView} from 'react-native';
import {useDispatch} from 'react-redux';
// import {Header} from '../../components/Header';
import {Button} from '../../components/Button';
import {PrimaryInput} from '../../components/PrimaryInput';
import {addAddress} from '../../redux/user';
import styles from './styles';

export const CreateAddress = ({navigation}) => {
  const [showIndicator, setShowIndicator] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [street, setStreet] = useState('');
  const [building, setBuilding] = useState('');
  const dispatch = useDispatch();

  const clearFields = () => {
    setName('');
    setPhone('');
    setCity('');
    setArea('');
    setStreet('');
    setBuilding('');
  };

  const createAddress = async () => {
    const data = {
      name,
      phone,
      city,
      area,
      street,
      building,
    };
    if (
      name != '' &&
      phone.length == 11 &&
      phone.startsWith(0) &&
      city != '' &&
      area != '' &&
      street != '' &&
      building != ''
    ) {
      setShowIndicator(true);
      await dispatch(addAddress(data));
      clearFields();
      setShowIndicator(false);
      navigation.navigate('Address');
    } else {
      alert('Please fill all fields!');
    }
  };
  return (
    <>
      {/* <Header
        hasBack
        hasSearch
        onBackPress={() => alert('onBackPress')}
        onSearchPress={() => alert('onSearchPress')}
      /> */}
      <Text style={styles.screenTitle}>CreateAddress</Text>
      <ScrollView contentContainerStyle={styles.container}>
        <PrimaryInput
          value={name}
          onChangeText={(name) => setName(name)}
          customStyle={styles.inputStyle}
          text={'Name'}
        />
        <PrimaryInput
          value={phone}
          onChangeText={(phone) => setPhone(phone)}
          customStyle={styles.inputStyle}
          text={'Phone'}
          keyboardType="phone-pad"
        />
        <PrimaryInput
          value={city}
          onChangeText={(city) => setCity(city)}
          customStyle={styles.inputStyle}
          text={'City'}
        />
        <PrimaryInput
          value={area}
          onChangeText={(area) => setArea(area)}
          customStyle={styles.inputStyle}
          text={'Area'}
        />
        <PrimaryInput
          value={street}
          onChangeText={(street) => setStreet(street)}
          customStyle={styles.inputStyle}
          text={'Street'}
        />
        <PrimaryInput
          value={building}
          onChangeText={(building) => setBuilding(building)}
          customStyle={styles.inputStyle}
          text={'Building'}
        />
      </ScrollView>
      <Button
        customStyle={styles.buttonStyle}
        title="Add Address"
        isLoading={showIndicator}
        onPress={createAddress}
      />
    </>
  );
};
