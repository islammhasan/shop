import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';

export default styles = StyleSheet.create({
  contentStyle: {
    paddingTop: 30,
    // alignItems: 'center',
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
  iconStyle: {
    width: 18.32,
    height: 12.5,
  },
  backBtnIcon: {
    width: 22,
    height: 9.93,
  },
  btnStyle: {
    marginTop: 30,
    alignSelf: 'center',
  },
  signupTxt: {
    color: '#A6A6A6',
  },
});
