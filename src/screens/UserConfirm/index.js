import React, {useState} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {Button} from '../../components/Button';
import {useDispatch, useSelector} from 'react-redux';
import {confirmUser} from '../../redux/user';

export const UserConfirm = ({route}) => {
  const {phoneNumber} = route.params;
  const [showIndicator, setShowIndicator] = useState(false);
  // const [resendVisible, setResendVisible] = useState(false);
  // const [inputCode, setInputCode] = useState('');
  const validationCode = useSelector((state) => state.user.code);
  const dispatch = useDispatch();

  console.warn('Your veification code is: ', validationCode);
  console.log(phoneNumber, validationCode);

  const validateUser = (code) => {
    if (validationCode == code) {
      callConfirmAction();
    } else {
      console.log('validation==>', validationCode, 'inputCode==>', code);
      alert('Wrong Code!');
    }
  };

  const callConfirmAction = async () => {
    try {
      setShowIndicator(true);
      await dispatch(confirmUser(phoneNumber, validationCode));
    } catch (error) {
      console.log('error==> ', error);
    }
    setShowIndicator(false);
  };

  // const codeFilled = (code) => {
  //   // setInputCode(code);
  //   // console.log('CODE HEREEEEEEEEEEE', inputCode);
  //   validateUser(code);
  // };

  // const resendPress = () => {
  //   alert('Your verification code is:', validationCode);
  // };

  // setTimeout(() => {
  //   setResendVisible(true);
  // }, 30000);

  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>Enter confirmation code</Text>
      <OTPInputView
        style={styles.optContainerStyle}
        pinCount={4}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={(code) => validateUser(code)}
      />
      <Button
        customStyle={styles.btnStyle}
        title={'Confirm'}
        textCustomStyle={styles.btnTxtStyle}
        isLoading={showIndicator}
        onPress={() => validateUser()}
      />

      {/* {resendVisible && (
        <Button
          customStyle={styles.resendBtnStyle}
          title={'Resend Code'}
          textCustomStyle={styles.resendBtnTxtStyle}
          onPress={() => resendPress()}
        />
      )} */}
    </View>
  );
};
