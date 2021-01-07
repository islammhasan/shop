import {StyleSheet} from 'react-native';
import {colors} from '../../assets';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    color: colors.text,
  },
  image: {
    width: 339.38,
    height: 216.02,
  },
  loginButton: {
    width: 245,
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
  signupButton: {
    width: 140,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  login: {
    color: colors.white,
    fontSize: 16,
  },
  signup: {
    color: colors.black,
    fontSize: 16,
  },
});
