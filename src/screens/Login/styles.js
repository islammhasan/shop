import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors'

export default styles = StyleSheet.create({
  container: {
  },
  contentStyle: {
      flex: 1,
      paddingTop: 100,
  },
  signupButton: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  signup: {
    color: colors.black,
    fontSize: 14,
  },
});
