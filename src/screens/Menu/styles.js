import {StyleSheet} from 'react-native';
import {colors} from '../../assets';

export const styles = StyleSheet.create({
  listStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  menuItemStyle: {
    marginBottom: 30,
  },
  menuItemTextStyle: {
    fontSize: 24,
    textAlign: 'center',
    color: colors.text,
  },
  closeContainerStyle: {
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: 40,
    height: 40,
    bottom: 64,
    end: 37,
  },
  closeStyle: {
    width: 29,
    height: 29,
  },
});
