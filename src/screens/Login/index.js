import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Button} from '../../components/Button';
import styles from './styles';

export const Login = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <ScrollView contentContainerStyle={styles.contentStyle}>
      <Text
        style={{
          fontSize: 30,
          marginStart: 15,
          marginBottom: 62,
          alignSelf: 'flex-start',
        }}>
        Login
      </Text>
      <View
        style={{
          width: 327,
          height: 57.5,
          borderBottomWidth: 1,
          borderBottomColor: '#DADADA',
          justifyContent: 'space-around',
          marginBottom: 13,
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
          marginBottom: 40,
        }}>
        <Text style={{color: '#A6A6A6'}}>Password</Text>
        <TextInput secureTextEntry={isVisible} />
      </View>

      <Button title="Change" onPress={() => setIsVisible(!isVisible)} />
      <Button title="Login" onPress={() => alert('Logged in')} />
      <TouchableOpacity activeOpacity={0.8} style={styles.signupButton}>
        <Text style={{color: '#A6A6A6'}}>
          Don't have an account?
          <Text style={styles.signup}> Signup</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
