import React from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Button, Divider, TextInput } from "react-native-paper";
import Header from "../components/Header";
import { useState } from "react";
import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
} from "expo-firebase-recaptcha";
import * as firebase from "firebase";
import firebaseConfigForExpo from "../config/firebase";
import { forgotAuthSuccess } from "../Api/ApiActions";

try {
  firebase.initializeApp(firebaseConfigForExpo);
} catch (err) {
  // ignore app already initialized error in snack
}

function ForgotPassword(props) {
  ///// firebase config

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

  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [otpPressed, setOtpPress] = useState(false);
  const { navigation } = props;
  console.log(navigation);

  return (
    <View>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
        attemptInvisibleVerification={attemptInvisibleVerification}
      />

      {otpPressed ? (
        <>
          <TextInput
            secureTextEntry={true}
            label={"Enter Otp"}
            maxLength={6}
            onChangeText={setVerificationCode}
          ></TextInput>
          <TextInput
            secureTextEntry={true}
            label={"New Password"}
            onChangeText={(nextStatePass) => {
              setPassword(nextStatePass);
            }}
          ></TextInput>
        </>
      ) : (
        <TextInput
          label={"Mobile number"}
          onChangeText={(nextState) => {
            setPhoneNumber(nextState);
          }}
          keyboardType="number-pad"
          maxLength={10}
        ></TextInput>
      )}

      {!otpPressed ? (
        <>
          <Button
            icon="login"
            mode="contained"
            onPress={async () => {
              try {
                const phoneProvider = new firebase.auth.PhoneAuthProvider();
                const verificationId = await phoneProvider.verifyPhoneNumber(
                  `+91${phoneNumber}`,
                  recaptchaVerifier.current
                );
                setVerificationId(verificationId);
                Alert.alert("Information", "Otp Message Sent");
              } catch (err) {
                Alert.alert("Something went wrong", `${err.message}`);
                return;
              }
              setOtpPress(true);
            }}
          >
            Generate OTP
          </Button>
        </>
      ) : (
        <>
          <Button
            icon="login"
            mode="contained"
            onPress={async () => {
              try {
                const credential = firebase.auth.PhoneAuthProvider.credential(
                  verificationId,
                  verificationCode
                );
                await firebase.auth().signInWithCredential(credential);

                let resp = await forgotAuthSuccess({
                  mobileNumber: phoneNumber,
                  password: password,
                });
                if (resp === true) {
                  navigation.navigate("Login");
                }
              } catch (err) {
                Alert.alert("Something went wrong", `${err.message}`);
              }
            }}
          >
            Verify OTP
          </Button>
          <Divider></Divider>
          <Divider></Divider>
          <Divider></Divider>
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
