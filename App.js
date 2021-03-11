import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {Provider} from 'react-redux';
import {AppContainer} from './src/navigation';
import {store} from './src/redux/store';

const App = () => {
  if (__DEV__) {
  import('./src/config/ReactotronConfig').then(() =>
    console.log('Reactotron Configured'),
  );
}
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default App;
