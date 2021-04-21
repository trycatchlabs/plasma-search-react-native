import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Appbar } from "react-native-paper";
import { Platform, Image } from "react-native";

function Header() {
  return (
    <Appbar.Header style={styles.header}>
      <StatusBar></StatusBar>
      <Appbar.Action icon="mail" onPress={() => console.log("Pressed mail")} />
      <Appbar.Content title="Covaid" />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
  },
});

export default Header;
