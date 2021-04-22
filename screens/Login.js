import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Header from "../components/Header";
import { useState } from "react";

function Login(props) {
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const { navigation } = props;
  console.log(navigation);

  return (
    <View>
      <TextInput
        label={"Mobile number"}
        onChangeText={(nextState) => {
          setMobileNumber(nextState);
        }}
        keyboardType="number-pad"
        maxLength={10}
      ></TextInput>

      <TextInput
        secureTextEntry={true}
        label={"Password"}
        onChangeText={(nextStatePass) => {
          setPassword(nextStatePass);
        }}
      ></TextInput>

      <Button
        icon="login"
        mode="contained"
        onPress={() => console.log("login")}
      >
        Login
      </Button>
      <Button mode="outlined" onPress={() => console.log("forgot")}>
        Forgot Password
      </Button>
      <Button mode="outlined" onPress={() => navigation.navigate("Register")}>
        Register
      </Button>
    </View>
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

export default Login;
