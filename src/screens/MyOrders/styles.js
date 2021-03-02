import { StyleSheet } from 'react-native';
import { colors } from '../../assets';

export default styles = StyleSheet.create({
  screenTitle: {
    color: colors.black,
    fontSize: 30,
    paddingStart: 24,
    backgroundColor: "#ffffff"
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
    paddingTop: 34,
    paddingBottom: 50,
    backgroundColor: "#ffffff"
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
    marginBottom: 10,
  },
  btnStyle: {
    width: 114,
    height: 39,
    borderRadius: 4,
  },
  btnTextStyle: {
    fontSize: 16,
  },
});
