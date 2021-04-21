import { StatusBar } from "expo-status-bar";
import React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Home from "./screens/Home";
// color : #c70039
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "teal",
    accent: "#00c78e",
  },
};

function App() {
  return (
    <PaperProvider theme={theme}>
      <Home />
    </PaperProvider>
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
