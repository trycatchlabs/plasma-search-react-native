import React, { useEffect } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, TextInput, RadioButton, Text } from "react-native-paper";
import Header from "../components/Header";
import { useState } from "react";
import { userRegisterations } from "../Api/ApiActions";

function Register(props) {
  const [name, setName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [location, setLocation] = useState(undefined);
  const [gender, setGender] = useState(1);
  const [age, setAge] = useState(0);
  const [mobileNumber, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [weight, setWeight] = useState("");
  const [login, setLogin] = useState(false);
  const { navigation } = props;
  useEffect(() => {
    console.log("loggedin");
  }, [login]);
  return (
    <View>
      <ScrollView>
        <TextInput
          label={"Name"}
          onChangeText={(value) => {
            setName(value);
          }}
          value={name}
        ></TextInput>
        <TextInput
          label={"Email"}
          onChangeText={(value) => {
            setEmail(value);
          }}
          value={email}
          keyboardType="email-address"
        ></TextInput>
        <TextInput
          label={"Location"}
          onChangeText={(nextState) => {
            setLocation(nextState);
          }}
          value={location}
        ></TextInput>
        <RadioButton.Group
          onValueChange={(newValue) => setGender(newValue)}
          value={gender}
        >
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Pressable
              onPress={() => {
                setGender(1);
              }}
            >
              <Text style={{ fontSize: 25 }}>Male</Text>
            </Pressable>
            <RadioButton value={1} />
            <Pressable
              onPress={() => {
                setGender(0);
              }}
            >
              <Text style={{ fontSize: 25 }}>Female</Text>
            </Pressable>
            <RadioButton value={0} />
          </View>
        </RadioButton.Group>
        <TextInput
          label={"Age"}
          onChangeText={(value) => {
            setAge(value);
          }}
          value={age}
          keyboardType="number-pad"
          maxLength={2}
        ></TextInput>

        <TextInput
          label={"Mobile number"}
          onChangeText={(nextState) => {
            setNumber(nextState);
          }}
          value={mobileNumber}
          keyboardType="number-pad"
          maxLength={10}
        ></TextInput>
        <TextInput
          label={"Weight in Kgs"}
          onChangeText={(value) => {
            setWeight(value);
          }}
          value={weight.toString()}
          keyboardType="number-pad"
          maxLength={3}
        ></TextInput>

        <TextInput
          secureTextEntry={true}
          label={"Password"}
          onChangeText={(value) => {
            setPassword(value);
          }}
          value={password}
        ></TextInput>
        <Button
          icon="login"
          mode="contained"
          onPress={() => {
            userRegisterations({
              name,
              email,
              location,
              gender,
              age,
              mobileNumber,
              password,
              weight,
            }).then((resp) => {
              if (resp === true) {
                Alert.alert("Registeration successful logging you in");
                setLogin(true);
                navigation.navigate("Redirection");
              }
            });
          }}
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
      </ScrollView>
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
