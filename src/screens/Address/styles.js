import {StyleSheet} from 'react-native';
import {colors} from '../../assets';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: colors.white,
  },
  screenTitle: {
    color: colors.black,
    fontSize: 30,
    marginStart: 24,
  },
  listStyle: {
    paddingVertical: 25,
  },
  addressContainer: {
    marginBottom: 27,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addressText: {
    fontSize: 18,
    color: colors.black,
  },
  selection: {
    borderWidth: 1,
    borderColor: colors.text,
    width: 18,
    height: 18,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: colors.main,
  },
  continueBtn: {
    marginHorizontal: 24,
    height: 55,
    borderRadius: 5,
    marginBottom: 17,
    width: null,
  },
  addAddressBtn: {
    marginHorizontal: 24,
    height: 55,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: null,
    width: null,
  },
  addAddressBtnText: {
    color: colors.main,
  },
});
