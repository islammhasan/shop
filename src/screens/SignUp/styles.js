import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';

export default styles = StyleSheet.create({
  contentStyle: {
    paddingTop: 30,
    alignItems: 'center',
  },
  signupButton: {
    marginTop: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signup: {
    color: colors.black,
    fontSize: 14,
  },
  backBtn: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: 5,
    marginBottom: 30,
    alignSelf: 'flex-start',
  },
  headerText: {
    fontSize: 30,
    marginStart: 15,
    marginBottom: 62,
    alignSelf: 'flex-start',
  },
});
