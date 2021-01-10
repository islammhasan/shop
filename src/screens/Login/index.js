import React from 'react';
import {ScrollView, Text, TouchableOpacity, Image} from 'react-native';
import {Button, PrimaryInput} from '../../components/';
import {images} from '../../assets/';
import styles from './styles';

export const Login = () => {
  return (
    <ScrollView contentContainerStyle={styles.contentStyle}>
      <TouchableOpacity
        style={styles.backBtn}>
        <Image
          source={images.back}
          resizeMode="contain"
          style={{
            width: 22,
            height: 9.93,
          }}
        />
      </TouchableOpacity>
      <Text
        style={styles.headerText}>
        Login
      </Text>

      <PrimaryInput text={'Email'} />
      <PrimaryInput securedInput text={'Password'} />

      <Button
        customStyle={{marginTop: 30}}
        title="Login"
        onPress={() => alert('Logged in')}
      />
      <TouchableOpacity activeOpacity={0.8} style={styles.signupButton}>
        <Text style={{color: '#A6A6A6'}}>
          Don't have an account?
          <Text style={styles.signup}> Signup</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
