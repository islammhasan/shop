import React from 'react';
import {ScrollView, Text, Image, TouchableOpacity, View} from 'react-native';
import {images} from '../../assets';
import {Button} from '../../components';
import styles from './styles';

export const Greeting = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>
        Welcome To Learning App {'\n'} Explore Us
      </Text>
      <Image
        source={images.greeting}
        style={styles.image}
        resizeMode="contain"
      />
      <View>
        <Button title="Login" onPress={() => alert('sssss')} />
        <TouchableOpacity activeOpacity={0.8} style={styles.signupButton}>
          <Text style={styles.signup}>Signup</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
