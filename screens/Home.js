import * as React from "react";
import { StyleSheet, View } from "react-native";
import { BottomNavigation, Text } from "react-native-paper";
import BottomNav from "../components/BottomNav";
import Header from "../components/Header";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Otp from "./Otp";
import ForgotPassword from "./ForgotPassword";
import Onboarding from "react-native-onboarding-swiper";
import SplashScreen from "./SplashScreen";

const Stack = createStackNavigator();

function Home() {
  const [onboarding, setOnboarding] = useState(true);
  const [signedIn, setSignIn] = useState(true);
  const [splash, setSplash] = useState(false);

  return (
    <>
      {!splash ? (
        <>
          <Header blood={true} sigin={signedIn} />
          {!onboarding ? (
            <>
              <Onboarding
                pages={[
                  {
                    backgroundColor: "red",
                    image: <Text>""</Text>,
                    title: "Onboarding",
                    subtitle: "Done with React Native Onboarding Swiper",
                  },
                  {
                    backgroundColor: "green",
                    image: <Text>""</Text>,
                    title: "Onboarding",
                    subtitle: "Done with React Native Onboarding Swiper",
                  },
                  {
                    backgroundColor: "yellow",
                    image: <Text>""</Text>,
                    title: "Onboarding",
                    subtitle: "Done with React Native Onboarding Swiper",
                  },
                  {
                    backgroundColor: "blue",
                    image: <Text>""</Text>,
                    title: "Onboarding",
                    subtitle: "Done with React Native Onboarding Swiper",
                  },
                ]}
                onDone={() => {
                  setOnboarding(true);
                }}
              />
            </>
          ) : (
            <>
              {!signedIn ? (
                <NavigationContainer>
                  <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Login" component={Login}></Stack.Screen>
                    <Stack.Screen
                      name="Register"
                      component={Register}
                    ></Stack.Screen>
                    <Stack.Screen name="Otp" component={Otp}></Stack.Screen>
                    <Stack.Screen
                      name="ForgotPassword"
                      component={ForgotPassword}
                    ></Stack.Screen>
                  </Stack.Navigator>
                </NavigationContainer>
              ) : (
                <BottomNav />
              )}
            </>
          )}
        </>
      ) : (
        <>
          <SplashScreen />
        </>
      )}
    </>
  );
}

export default Home;
