import {StyleSheet} from 'react-native';
import {colors} from '../../assets';

export default styles = StyleSheet.create({
  screenTitle: {
    color: colors.black,
    fontSize: 30,
    marginStart: 24,
  },
  listContainerStyle: {
    alignItems: 'center',
    paddingBottom: 20,
    marginTop: 20,
  },
  itemContainerStyle: {
    marginHorizontal: 13,
    paddingBottom: 20,
  },
  itemImageStyle: {
    width: 150,
    height: 180,
    borderRadius: 5,
  },
  itemPriceStyle: {
    fontSize: 16,
    marginTop: 11,
  },
  itemTitleStyle: {
    fontSize: 16,
    marginTop: 7,
  },
});
