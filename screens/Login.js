import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Header from "../components/Header";
import { useState } from "react";
import { authenticatUser } from "../Api/ApiActions";

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
        value={mobileNumber}
        keyboardType="number-pad"
        maxLength={10}
      ></TextInput>

      <TextInput
        secureTextEntry={true}
        label={"Password"}
        onChangeText={(nextStatePass) => {
          setPassword(nextStatePass);
        }}
        value={password}
      ></TextInput>

      <Button
        icon="login"
        mode="contained"
        onPress={() => {
          let loginState = authenticatUser({
            username: mobileNumber,
            password: password,
          });
          console.log("sandeep says ", loginState);
        }}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate("ForgotPassword")}
      >
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
