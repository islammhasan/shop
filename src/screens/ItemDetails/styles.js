import { StyleSheet } from 'react-native';
import { colors } from '../../assets';
import { Platform } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  wrapper: {},
  slideImage: {
    width: '100%',
    height: 175,
  },
  singleImage: {
    width: '100%',
    height: 275,
  },
  sView: {
    marginTop: 10,
    paddingHorizontal: 24,
  },
  slide1: {},
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: colors.white,
    fontSize: 30,
    fontWeight: 'bold',
  },
  paginationStyle: {
    position: 'absolute',
    justifyContent: 'flex-start',
    marginLeft: 27,
    bottom: 13,
  },
  productTitle: {
    marginTop: 25,
    fontSize: 25,
    color: colors.black,
  },
  priceContainer: {
    maxWidth: 300,
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  price: {
    fontSize: 20,
    color: colors.main,
    marginEnd: 17.5,
  },
  discount: {
    color: colors.black,
    fontSize: 13,
    textDecorationLine: 'line-through',
  },
  ratingContainer: {
    flexDirection: 'row',
    height: 56,
    marginTop: 23,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F3F3F3',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F3F3',
  },
  ratingText: {
    color: colors.white,
    fontSize: 18,
  },
  rating: {
    backgroundColor: colors.main,
    borderRadius: 5,
    width: 65,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  ratingTitle: {
    flex: 1,
    fontSize: 18,
    color: colors.black,
    marginStart: 16,
  },
  reviews: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.main,
    maxWidth: 100,
  },
  descriptionTitle: {
    fontSize: 16,
    color: colors.black,
    marginTop: 15.5,
  },
  description: {
    fontSize: 14,
    color: colors.text,
    marginTop: 11,
    lineHeight: 23,
  },
  buyNow: {
    backgroundColor: colors.main,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },
  addToCart: {
    backgroundColor: '#E1E1E1',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },
  buyNowText: {
    fontSize: 20,
    color: colors.white,
  },
  addToCartText: {
    fontSize: 20,
    color: colors.black,
  },
  variationTabs: {
    flexDirection: 'row',
    height: 60,
    width: '100%',
    marginTop: 25,
    borderTopWidth: 1,
    borderTopColor: '#F3F3F3',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F3F3',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tab: {
    padding: 20,
  },
  tabsContent: {
    paddingVertical: 25,
    paddingStart: 5,
  },
  tabText: {
    fontSize: 18,
    color: colors.black,
  },
  activeTab: {
    fontWeight: '700',
  },
  bottomBtns: {
    flexDirection: 'row',
  },
  list: {
    width: 60,
    height: 60,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    marginEnd: 10,
    shadowOffset: {
      width: 0.5,
      height: 0.5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 3,
  },
  headerIconsRight: {
    flexDirection: 'row'
  }
});
