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

export const PrimaryInput = (props) => {
  const {text, passwordInput, rightIcon, rightIconStyle, onPress} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>{text}</Text>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          {...props}
          style={{
            flex: 1,
          }}
        />
        {rightIcon && (
          <TouchableOpacity
            onPress={onPress}
            disabled={!passwordInput}
            style={styles.iconContainer}>
            <Image
              source={rightIcon}
              style={rightIconStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
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
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
