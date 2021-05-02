import React from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Button, Card, TextInput, Title, Text } from "react-native-paper";
import Header from "../components/Header";
import { useState } from "react";
import { authenticatUser } from "../Api/ApiActions";

function Login(props) {
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const { navigation } = props;

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
        onPress={async () => {
          let loginState = await authenticatUser({
            username: mobileNumber,
            password: password,
          });
          if (loginState === true) {
            navigation.navigate("Redirection");
          } else {
            Alert.alert("Invalid", "Username/password seems to be invalid");
          }
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
      <Card style={{ padding: 10 }}>
        <Text style={{ color: "red", fontSize: 12 }}>
          1. By login/register you are agreeing to our privacy policy and
          license
        </Text>
        <Text style={{ color: "red", fontSize: 12 }}>
          2. We may redirect you to external website
        </Text>
      </Card>
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
