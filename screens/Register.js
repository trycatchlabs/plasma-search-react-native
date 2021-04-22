import React from "react";
import { Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, TextInput, RadioButton, Text } from "react-native-paper";
import Header from "../components/Header";
import { useState } from "react";

function Register(props) {
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = React.useState(0);

  const { navigation } = props;

  return (
    <View>
      <TextInput
        placeholder={"Name"}
        onChangeText={(nextState) => {
          setMobileNumber(nextState);
        }}
      ></TextInput>
      <TextInput
        placeholder={"Email"}
        onChangeText={(nextState) => {
          setMobileNumber(nextState);
        }}
        keyboardType="email-address"
      ></TextInput>
      <TextInput
        placeholder={"Location"}
        onChangeText={(nextState) => {
          setMobileNumber(nextState);
        }}
      ></TextInput>
      <RadioButton.Group
        onValueChange={(newValue) => setGender(newValue)}
        value={gender}
      >
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Pressable
            onPress={() => {
              setGender(0);
            }}
          >
            <Text style={{ fontSize: 25 }}>Male</Text>
          </Pressable>
          <RadioButton value={0} />
          <Pressable
            onPress={() => {
              setGender(1);
            }}
          >
            <Text style={{ fontSize: 25 }}>Female</Text>
          </Pressable>
          <RadioButton value={1} />
        </View>
      </RadioButton.Group>
      <TextInput
        placeholder={"Age"}
        onChangeText={(nextState) => {
          setMobileNumber(nextState);
        }}
        keyboardType="number-pad"
        maxLength={2}
      ></TextInput>

      <TextInput
        placeholder={"Mobile number"}
        onChangeText={(nextState) => {
          setMobileNumber(nextState);
        }}
        keyboardType="number-pad"
        maxLength={10}
      ></TextInput>

      <TextInput
        secureTextEntry={true}
        placeholder={"Password"}
        onChangeText={(nextStatePass) => {
          setPassword(nextStatePass);
        }}
      ></TextInput>
      <Button
        icon="login"
        mode="contained"
        onPress={() => navigation.navigate("Otp")}
      >
        Register
      </Button>
      <Button
        mode="outlined"
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        Already a user
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

export default Register;
