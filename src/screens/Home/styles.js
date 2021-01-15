import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,

    // alignItems: 'center',
  },
  searchBar: {
    width: 343,
    height: 52,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 7,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    borderRadius: 8,
  },
  searchIcon: {
    width: 50,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
