import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Header from "../components/Header";
import { useState } from "react";

function Otp(props) {
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const { navigation } = props;
  console.log(navigation);

  return (
    <View>
      <TextInput
        label={"OTP"}
        onChangeText={(nextState) => {
          setMobileNumber(nextState);
        }}
        keyboardType="number-pad"
        maxLength={6}
      ></TextInput>

      <Button icon="lock" mode="contained" onPress={() => console.log("login")}>
        Verify OTP
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

export default Otp;
