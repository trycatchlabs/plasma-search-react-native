import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Divider, TextInput } from "react-native-paper";
import Header from "../components/Header";
import { useState } from "react";

function ForgotPassword(props) {
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [otpPressed, setOtpPress] = useState(false);
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
      {otpPressed && (
        <>
          <TextInput
            secureTextEntry={true}
            label={"New Password"}
            onChangeText={(nextStatePass) => {
              setPassword(nextStatePass);
            }}
          ></TextInput>

          <TextInput
            secureTextEntry={true}
            label={"OTP"}
            maxLength={6}
            onChangeText={(nextStatePass) => {
              setPassword(nextStatePass);
            }}
          ></TextInput>
        </>
      )}

      {!otpPressed ? (
        <>
          <Button
            icon="login"
            mode="contained"
            onPress={() => setOtpPress(true)}
          >
            Generate OTP
          </Button>
        </>
      ) : (
        <>
          <Button
            icon="login"
            mode="contained"
            onPress={() => setOtpPress(true)}
          >
            Verify OTP
          </Button>
          <Divider></Divider>
          <Divider></Divider>
          <Divider></Divider>
          <Button
            icon="login"
            mode="contained"
            onPress={() => setOtpPress(true)}
          >
            Resend OTP
          </Button>
        </>
      )}
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

export default ForgotPassword;
