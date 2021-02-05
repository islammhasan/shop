import {StyleSheet} from 'react-native';
import {colors} from '../../assets';

export default styles = StyleSheet.create({
  screenTitle: {
    color: colors.black,
    fontSize: 30,
    marginStart: 24,
  },
  listContainer: {
    marginStart: 25,
    marginTop: 39,
    paddingRight: 25,
  },
  imageContainer: {
    width: 283,
    height: 179,
    marginEnd: 25,
  },
  imageStyle: {
    width: 283,
    height: 179,
  },
  paymentDetails: {
    marginTop: 77,
  },
  paymentText: {
    flexDirection: 'row',
    marginHorizontal: 25,
    marginBottom: 15,
  },
  title: {
    flex: 1,
    fontSize: 17,
    color: colors.text,
  },
  value: {
    fontSize: 17,
    color: colors.black,
  },
  divider: {
    height: 1,
    backgroundColor: '#D8D8D8',
    marginHorizontal: 25,
    marginBottom: 12.5,
  },
  checkoutBtn: {
    marginHorizontal: 24,
    height: 55,
    borderRadius: 5,
    marginBottom: 17,
    width: null,
  },
  addCardBtn: {
    marginHorizontal: 24,
    height: 55,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: null,
    width: null,
  },
  addCardText: {
    color: colors.main,
  },
});
