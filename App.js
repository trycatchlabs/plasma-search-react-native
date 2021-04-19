import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet,View } from 'react-native';
import { Provider } from 'react-redux';
import { newStore } from './store';
import Login from './components/Login';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import Home from './components/Home';

function App() {
  
  const store = newStore();

  return (
  <Provider store={store}>
    <ApplicationProvider {...eva} theme={eva.light}>
    <StatusBar backgroundColor="black" barStyle="light-content"></StatusBar>
    <View >
     <Home/>
    </View>
    </ApplicationProvider>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App