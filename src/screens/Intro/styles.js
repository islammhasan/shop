import {StyleSheet} from 'react-native';
import {colors} from '../../assets';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.main,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle: {
    width: 238,
    height: 238,
    marginBottom: 40,
  },
  buttonStyle: {
    backgroundColor: colors.white,
    width: 100,
    paddingHorizontal: 10,
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitleStyle: {
    color: 'grey',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
