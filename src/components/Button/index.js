import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {colors} from '../../assets';

export const Button = (props) => {
  const {isLargeButton, title, customStyle, isLoading, disableBtn} = props;
  return (
    <TouchableOpacity
      disabled={disableBtn}
      activeOpacity={0.8}
      style={[
        styles.container,
        {width: isLargeButton ? 400 : 245},
        customStyle,
      ]}
      {...props}>
      {isLoading && (
        <ActivityIndicator
          style={styles.indicatorStyle}
          size="small"
          color="#fff"
        />
      )}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    backgroundColor: colors.main,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6,
  },

  title: {
    color: colors.white,
    fontSize: 16,
  },
  indicatorStyle: {
    position: 'absolute',
    start: 0,
    marginStart: 20,
  },
});
