import React, {useState} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {Button} from '../../components/Button';
import {useDispatch, useSelector} from 'react-redux';
import {confirmUser} from '../../redux/user';

export const UserConfirm = ({navigation, route}) => {
  const {phoneNumber} = route.params;
  const [showIndicator, setShowIndicator] = useState(false);
  const validationCode = useSelector((state) => state.user.code);
  const [inputCode, setInputCode] = useState('');
  const dispatch = useDispatch();

  const validateUser = async () => {
    if (validationCode == inputCode) {
      setShowIndicator(true);
      await dispatch(confirmUser(phoneNumber, validationCode));
      navigation.navigate('Home');
      setShowIndicator(false);
    } else {
      alert('Wrong Code!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>Enter confirmation code</Text>
      <OTPInputView
        style={styles.optContainerStyle}
        pinCount={4}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={(code) => setInputCode(code)}
      />
      <Button
        customStyle={styles.btnStyle}
        title={'Confirm'}
        textCustomStyle={styles.btnTxtStyle}
        isLoading={showIndicator}
        onPress={() => validateUser()}
      />
    </View>
  );
};
