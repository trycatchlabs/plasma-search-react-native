import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { newStore } from './store';
import { ApplicationProvider, Text } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import Home from './components/Home';
import Login from "./components/Login"

function App() {

  const store = newStore();

  return (
    <Provider store={store}>
      <ApplicationProvider {...eva} theme={eva.dark} >
        <StatusBar backgroundColor="grey" barStyle="light-content" ></StatusBar>
        <Text style={styles.header}>COVAID</Text>
        <View style={{ backgroundColor: "white" }}>
          < Home />
        </View>
      </ApplicationProvider>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: { 
    fontSize: 35, 
    color: "black", 
    fontWeight: 'bold', 
    backgroundColor: "red", 
    textAlign: 'center',
    borderColor: "black",
    borderWidth: 2
  }
});


export default App