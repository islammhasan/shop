import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, Image} from 'react-native';
import {Button, PrimaryInput} from '../../components/';
import {images} from '../../assets/';
import styles from './styles';

export const Login = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [showIndicator, setShowIndicator] = useState(false);
  return (
    <ScrollView contentContainerStyle={styles.contentStyle}>
      <TouchableOpacity
        onPress={() => {
          alert('Back Pressed');
        }}
        style={styles.backBtn}>
        <Image
          source={images.back}
          resizeMode="contain"
          style={styles.backBtnIcon}
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>Login</Text>
      <PrimaryInput text={'Email'} />
      <PrimaryInput
        passwordInput
        secureTextEntry={showPassword}
        rightIcon={images.password}
        rightIconStyle={styles.iconStyle}
        text={'Password'}
        onPress={() => setShowPassword(!showPassword)}
      />
      <Button
        customStyle={styles.btnStyle}
        title="Login"
        isLoading={showIndicator}
        disableBtn={showIndicator}
        onPress={() => setShowIndicator(!showIndicator)}
      />
      <TouchableOpacity
        onPress={() => alert('Signup!')}
        activeOpacity={0.8}
        style={styles.signupButton}>
        <Text style={styles.signupTxt}>
          Don't have an account?
          <Text style={styles.signup}> Signup</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
