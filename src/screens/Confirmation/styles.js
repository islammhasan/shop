import {StyleSheet} from 'react-native';
import {colors} from '../../assets';

export default styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  imageStyle: {
    width: 238,
    height: 238,
  },
  heading: {
    fontSize: 30,
    color: colors.black,
    marginTop: 42,
  },
  text: {
    width: 228,
    marginTop: 13,
    fontSize: 14,
    color: colors.text,
    textAlign: 'center',
  },
  backHomeBtn: {
    marginHorizontal: 24,
    height: 55,
    borderRadius: 5,
    marginBottom: 17,
    width: null,
  },
  btnText: {
    fontSize: 20,
  },
});
