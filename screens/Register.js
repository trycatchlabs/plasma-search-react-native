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
import { userRegisterations, userValidations } from "../Api/ApiActions";
import * as firebase from "firebase";
import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
} from "expo-firebase-recaptcha";
import firebaseConfigForExpo from "../config/firebase";

try {
  firebase.initializeApp(firebaseConfigForExpo);
} catch (err) {
  // ignore app already initialized error in snack
}

function Register(props) {
  ////firebase authentcation

  const recaptchaVerifier = React.useRef(null);
  const [phoneNumber, setPhoneNumber] = React.useState();
  const [verificationId, setVerificationId] = React.useState();
  const [verificationCode, setVerificationCode] = React.useState();
  const firebaseConfig = firebase.apps.length
    ? firebase.app().options
    : undefined;
  const [message, showMessage] = React.useState(
    !firebaseConfig || Platform.OS === "web"
      ? {
          text:
            "To get started, provide a valid firebase config in App.js and open this snack on an iOS or Android device.",
        }
      : undefined
  );
  const attemptInvisibleVerification = false;

  const [name, setName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [location, setLocation] = useState(undefined);
  const [gender, setGender] = useState(1);
  const [age, setAge] = useState(0);
  const [mobileNumber, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [weight, setWeight] = useState("");
  const [login, setLogin] = useState(false);
  const [otp, activateOtp] = useState(false);

  const { navigation } = props;
  useEffect(() => {
    console.log("loggedin");
  }, [login]);
  return (
    <View>
      <ScrollView>
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
          attemptInvisibleVerification={attemptInvisibleVerification}
        />
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

        {!otp ? (
          <>
            <Button
              icon="login"
              mode="contained"
              onPress={async () => {
                let resp = await userValidations({
                  name,
                  email,
                  location,
                  gender,
                  age,
                  mobileNumber,
                  password,
                  weight,
                })
                  .then((data) => {
                    return data;
                  })
                  .catch((e) => {
                    console.log(e);
                  });

                if (resp === true) {
                  try {
                    const phoneProvider = new firebase.auth.PhoneAuthProvider();
                    const verificationId = await phoneProvider.verifyPhoneNumber(
                      `+91${mobileNumber}`,
                      recaptchaVerifier.current
                    );
                    setVerificationId(verificationId);
                    activateOtp(true);

                    Alert.alert(
                      "Information",
                      `Otp has been sent to your mobile number ${mobileNumber} please verify`
                    );
                  } catch (err) {
                    Alert.alert("Something went wrong", `${err.message}`);
                  }
                }
              }}
            >
              Register
            </Button>
          </>
        ) : (
          <>
            <TextInput
              style={{ marginVertical: 10, fontSize: 17 }}
              editable={!!verificationId}
              placeholder="Enter Otp Here"
              onChangeText={setVerificationCode}
            />
            <Button
              disabled={!verificationId}
              onPress={async () => {
                try {
                  const credential = firebase.auth.PhoneAuthProvider.credential(
                    verificationId,
                    verificationCode
                  );
                  await firebase.auth().signInWithCredential(credential);
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
                } catch (err) {
                  Alert.alert("Something went wrong", `${err.message}`);
                }
              }}
            >
              Confirm Otp
            </Button>
          </>
        )}

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
