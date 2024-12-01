import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {MovieProvider} from './src/context/MovieContext';
import AppNavigator from './src/navigation';
import {Text, View} from 'react-native';

const App: React.FC = () => (
  <Provider store={store}>
    <MovieProvider>
      <AppNavigator />
      {/* <Helo /> */}
    </MovieProvider>
  </Provider>
);

const Helo = () => (
  <View>
    <Text>Hello</Text>
  </View>
);

export default App;
