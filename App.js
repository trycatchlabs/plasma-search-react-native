import { StatusBar } from "expo-status-bar";
import React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import { Provider } from "react-redux";
import newstore from "./store";
// color : #c70039
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "teal",
    accent: "grey",
  },
};

const store = newstore();
function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <Home />
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
