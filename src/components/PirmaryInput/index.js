import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../assets/colors';
import {images} from '../../assets/';

export const PrimaryInput = (props) => {
  const {text, securedInput} = props;
  const [showPassword, setShowPassword] = useState(true);
  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>{text}</Text>
      {/* <TextInput secureTextEntry={showPassword} style={styles.inputStyle} /> */}
      {securedInput ? (
        <>
          <TextInput secureTextEntry={showPassword} style={styles.inputStyle} />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.iconContainer}>
            <Image
              source={images.password}
              style={styles.iconStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </>
      ) : (
        <TextInput style={styles.inputStyle} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 327,
    height: 57.5,
    borderBottomWidth: 1,
    borderBottomColor: '#DADADA',
    justifyContent: 'space-around',
    marginBottom: 25,
  },
  labelStyle: {
    // position: 'absolute',
    top: 0,
    start: 0,
    color: colors.gray,
  },
  iconStyle: {
    width: 18.32,
    height: 12.5,
  },
  iconContainer: {
    width: 50,
    height: 30,
    position: 'absolute',
    right: 0,
    bottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
