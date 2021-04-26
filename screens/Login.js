import React, { useEffect } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Header from "../components/Header";
import { useState } from "react";
import { authenticatUser, getUserInformation } from "../Api/ApiActions";
import { connect } from "react-redux";
import AuthenticationReducer from "../reducers/Authentication";
import { getMobileNumber } from "../Api/LocalStorageActions";
import { LoginUser } from "../actions/AuthenticationActions";

function Login(props) {
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const { navigation } = props;

  const [signedIn, setSignIn] = useState(false);
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    getMobileNumber().then((num) => {
      getUserInformation(mobileNumber).then((value) => {
        dispatch(setDetailsAvailable(value));
        if (mobileNumber !== null) {
          dispatch(LoginUser(mobileNumber));

          setTimeout(() => {
            setSplash(false);
          }, 3000);
        } else {
          setSignIn(false);
          setTimeout(() => {
            setSplash(false);
          }, 3000);
        }
      });
      if (num !== null) {
        navigation.navigate("bottomNav");
      }
    });
  }, []);

  return (
    <View>
      <Header blood={true} sigin={false} />
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
          let resp = await authenticatUser({
            username: mobileNumber,
            password: password,
          });
          if (resp === true) {
            navigation.navigate("bottomNav");
          } else {
            Alert.alert("Seems like your login password is wrong");
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

export function mapToState(state) {
  return state;
}
export default connect(mapToState)(Login);
