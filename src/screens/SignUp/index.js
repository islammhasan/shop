import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, Image} from 'react-native';
import {Button, PrimaryInput} from '../../components/';
import {images} from '../../assets/';
import styles from './styles';

export const SignUp = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [showIndicator, setShowIndicator] = useState(false);
  return (
    <ScrollView contentContainerStyle={styles.contentStyle}>
      <TouchableOpacity
        onPress={() => alert('Back Pressed!')}
        style={styles.backBtn}>
        <Image
          source={images.back}
          resizeMode="contain"
          style={styles.backBtnIcon}
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>Signup</Text>
      <PrimaryInput text={'Name'} />
      <PrimaryInput text={'Email'} />
      <PrimaryInput
        passwordInput
        secureTextEntry={showPassword}
        rightIcon={images.password}
        rightIconStyle={{width: 20}}
        text={'Password'}
        onPress={() => setShowPassword(!showPassword)}
      />
      <Button
        customStyle={{marginTop: 30}}
        title="Sign up"
        onPress={() => alert('Signed up!')}
        isLoading={showIndicator}
        disableBtn={showIndicator}
        onPress={() => setShowIndicator(!showIndicator)}
      />
      <TouchableOpacity
        onPress={() => alert('Sign in!')}
        activeOpacity={0.8}
        style={styles.signupButton}>
        <Text style={{color: '#A6A6A6'}}>
          Already have an account?
          <Text style={styles.signup}> Sign in</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
