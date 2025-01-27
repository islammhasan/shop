import {StyleSheet} from 'react-native';
import {colors} from '../../assets';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  screenTitle: {
    color: colors.black,
    fontSize: 30,
    marginStart: 24,
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
    marginTop: 34,
    paddingBottom: 50,
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
  btnStyle: {
    marginHorizontal: 24,
    height: 55,
    borderRadius: 5,
    bottom: 17,
    width: null,
  },
  totalText: {
    fontSize: 18,
    marginBottom: 30,
    marginStart: 22,
    color: colors.text,
  },
  totalPrice: {
    color: colors.main,
  },
  backToShopStyle: {
    marginHorizontal: 24,
    height: 55,
    borderRadius: 5,
    width: null,
    marginTop: 50,
  },
  noItemsStyle: {
    fontSize: 22,
    alignSelf: 'center',
    marginTop: 100,
  },
  backToShopText: {
    fontSize: 20,
  },
});
