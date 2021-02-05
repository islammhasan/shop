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
  const [isFocused, setIsFocused] = useState(false);
  const {
    text,
    passwordInput,
    rightIcon,
    rightIconStyle,
    onPress,
    customStyle,
  } = props;
  return (
    <View
      style={[
        styles.container,
        isFocused && styles.containerFocused,
        customStyle,
      ]}>
      <Text style={styles.labelStyle}>{text}</Text>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          onFocus={() => setIsFocused(!isFocused)}
          onBlur={() => setIsFocused(!isFocused)}
          {...props}
          style={styles.textInputStyle}
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
    height: 57.5,
    borderBottomWidth: 1,
    borderBottomColor: '#DADADA',
    justifyContent: 'space-around',
    marginBottom: 25,
    marginHorizontal: 25,
  },
  containerFocused: {
    borderBottomColor: '#00BFFF',
  },
  labelStyle: {
    position: 'absolute',
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
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingTop: 10,
  },
  textInputStyle: {
    flex: 1,
    paddingBottom: 0,
  },
});
