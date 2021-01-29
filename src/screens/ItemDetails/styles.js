import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
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
  },
  priceContainer: {
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
    marginTop: 34,
    alignItems: 'center',
  },
  ratingContainerStart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingContainerEnd: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  rating: {
    backgroundColor: '#667EEA',
    borderRadius: 5,
    width: 65,
    height: 35,
    color: '#ffffff',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  ratingTitle: {
    fontSize: 18,
    color: '#2A2A2A',
    marginStart: 16,
  },
  reviews: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#667EEA',
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
  },
  buyNowText: {
      fontSize: 20,
      color: '#ffffff'
  }
});
