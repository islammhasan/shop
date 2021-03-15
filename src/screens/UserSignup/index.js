import React, {useState} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {PrimaryInput} from '../../components/PrimaryInput';
import {Button} from '../../components/Button';
import {useDispatch} from 'react-redux';
import {userLogin} from '../../redux/user';

export const UserSignup = ({navigation}) => {
  const [showIndicator, setShowIndicator] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const dispatch = useDispatch();

  const confirmSignup = async () => {
    if (phoneNumber.length == 11 && phoneNumber[0] == 0) {
      setShowIndicator(true);
      await dispatch(userLogin(phoneNumber));
      navigation.navigate('User Confirm', phoneNumber);
      setShowIndicator(false);
    } else {
      alert(
        `Please start your phone number with zero and make sure it's 11 numbers`,
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>Enter phone number</Text>
      <PrimaryInput
        value={phoneNumber}
        onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
        inputCustomStyle={styles.inputStyle}
        keyboardType="phone-pad"
      />
      <Button
        textCustomStyle={styles.btnTxtStyle}
        isLoading={showIndicator}
        onPress={() => confirmSignup()}
        customStyle={styles.btnStyle}
        title={'Signup'}
      />
    </View>
  );
};
