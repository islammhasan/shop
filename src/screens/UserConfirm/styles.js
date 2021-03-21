import {StyleSheet} from 'react-native';
import {colors} from '../../assets';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  optContainerStyle: {
    marginHorizontal: 70,
    height: 100,
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    color: '#000',
    borderColor: '#000',
    fontSize: 24,
  },
  btnStyle: {
    width: null,
    marginHorizontal: 80,
    marginTop: 50,
  },
  resendBtnStyle: {
    width: null,
    marginHorizontal: 120,
    marginTop: 50,
    backgroundColor: null,
  },
  labelStyle: {
    alignSelf: 'center',
    fontSize: 22,
    color: '#444',
  },
  btnTxtStyle: {
    fontSize: 20,
  },
  resendBtnTxtStyle: {
    fontSize: 20,
    color: colors.main,
  },
});
