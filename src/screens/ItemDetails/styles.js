import {StyleSheet} from 'react-native';
import {colors} from '../../assets';
import {Platform} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS == 'ios' ? 20 : 0,
  },
  wrapper: {},
  slideImage: {
    width: '100%',
    height: 175,
  },
  sView: {
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
    color: '#fff',
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
    color: '#667EEA',
    marginEnd: 17.5,
  },
  discount: {
    color: '#2A2A2A',
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
    color: '#ffffff',
    fontSize: 18,
  },
  rating: {
    backgroundColor: '#667EEA',
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
    color: '#2A2A2A',
    marginStart: 16,
  },
  reviews: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#667EEA',
    maxWidth: 100,
  },
  descriptionTitle: {
    fontSize: 16,
    color: '#2A2A2A',
    marginTop: 15.5,
  },
  description: {
    fontSize: 14,
    color: '#656565',
    marginTop: 11,
    lineHeight: 23,
  },
  buyNow: {
    backgroundColor: '#667EEA',
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
    color: '#ffffff',
  },
  addToCartText: {
    fontSize: 20,
    color: '#2A2A2A',
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
    color: '#2A2A2A',
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
});
