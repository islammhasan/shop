import {StyleSheet} from 'react-native';
import {colors} from '../../assets';

export default styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: colors.white,
  },
  screenTitle: {
    color: colors.black,
    backgroundColor: colors.white,
    fontSize: 30,
    paddingStart: 24,
  },
  itemContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#f1f1f1',
    marginHorizontal: 24,
    padding: 17,
    marginBottom: 19,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    elevation: 1,
  },
  itemImage: {
    width: 100,
    height: 104,
  },
  imageContainer: {
    width: 100,
    height: 104,
    shadowOffset: {
      width: 0.5,
      height: 0.5,
    },
    shadowOpacity: 0.5,
    elevation: 1,
  },
  listStyle: {
    paddingTop: 25,
    backgroundColor: colors.white,
  },
  itemDetails: {
    flex: 1,
    marginStart: 19,
  },
  itemTitle: {
    fontSize: 16,
    color: colors.black,
    marginBottom: 1,
  },
  itemBrand: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    color: colors.main,
    marginBottom: 7,
  },
  removeContainer: {
    width: 25,
    height: 25,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  remove: {
    width: 12,
    height: 12,
  },
  counterContainer: {
    flexDirection: 'row',
    width: 114,
    height: 39,
    borderRadius: 4,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  counterText: {
    fontSize: 16,
    color: colors.text,
  },
  counterMinus: {
    fontSize: 30,
    color: colors.text,
  },
  counterPlus: {
    fontSize: 20,
    color: colors.text,
  },
  counterItem: {
    paddingHorizontal: 10,
  },
  buyBtn: {
    marginHorizontal: 24,
    height: 55,
    borderRadius: 5,
    marginBottom: 17,
    width: null,
  },
  btnText: {
    fontSize: 20,
  },
  addressListStyle: {
    paddingTop: 12,
    backgroundColor: colors.white,
  },
  addressContainer: {
    marginBottom: 27,
    marginHorizontal: 24,
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
  paymentDetails: {
    paddingTop: 17.5,
    backgroundColor: colors.white,
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
  },
  dividerSpace: {
    marginTop: 12.5,
  },
  btnView: {
    backgroundColor: colors.white,
  },
});
