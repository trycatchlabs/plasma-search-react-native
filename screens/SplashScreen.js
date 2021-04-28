import * as React from "react";
import { StyleSheet, Image, View, ImageBackground } from "react-native";
import { ActivityIndicator, Colors, Title } from "react-native-paper";
import { Text } from "react-native-paper";

function SplashScreen() {
  const image = {};

  return (
    <>
      <ImageBackground
        source={require("../assets/splashScreen.png")}
        style={styles.image}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Title>
            <ActivityIndicator
              size={"large"}
              animating={true}
              color={Colors.red800}
            />
          </Title>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
  },
});

export default SplashScreen;
