import React from 'react';
import {ScrollView, View, Text, TextInput, TouchableOpacity} from 'react-native';
import {Button} from '../../components/Button';
import styles from './styles';

export const Login = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentStyle}>
      <Text style={{fontSize: 30, marginStart: 15, marginBottom: 62}}>Login</Text>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            width: 327,
            height: 57.5,
            borderBottomWidth: 1,
            borderBottomColor: '#DADADA',
            justifyContent: 'space-around',
            marginBottom: 25
          }}>
          <Text style={{color: '#A6A6A6'}}>Email</Text>
          <TextInput />
        </View>
        <View
          style={{
            width: 327,
            height: 57.5,
            borderBottomWidth: 1,
            borderBottomColor: '#DADADA',
            justifyContent: 'space-around',
            marginBottom: 25
          }}>
          <Text style={{color: '#A6A6A6'}}>Password</Text>
          <TextInput />
        </View>
      <Button title="Login" onPress={() => alert('Logged in')} />
      <TouchableOpacity activeOpacity={0.8} style={styles.signupButton}>
          <Text style={{color:'#A6A6A6'}}>Don't have an account? </Text>
          <Text style={styles.signup}>Signup</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
