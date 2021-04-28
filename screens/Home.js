import * as React from "react";
import { Text } from "react-native-paper";
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
import { connect } from "react-redux";
import { LoginUser } from "../actions/AuthenticationActions";
import { getUserInformation } from "../Api/ApiActions";
import { setDetailsAvailable } from "../actions/bloodActions";
import { getMobileNumber } from "../Api/LocalStorageActions";
import AuthenticationReducer from "../reducers/Authentication";
import Redirection from "./supportscreens/Redirection";
import Blood from "./Blood";
import { Alert } from "react-native";

const Stack = createStackNavigator();

function Home(props) {
  const [onboarding, setOnboarding] = useState(true);
  const [signedIn, setSignIn] = useState(false);
  const [splash, setSplash] = useState(true);
  const [mobileNumber, setMobileNumber] = useState(null);
  const { AuthenticationReducer, dispatch } = props;

  React.useEffect(() => {
    getMobileNumber().then((num) => {
      setMobileNumber(num);
      dispatch(LoginUser(num));
    });

    getUserInformation(mobileNumber)
      .then((value) => {
        dispatch(setDetailsAvailable(value));
        if (mobileNumber !== null) {
          setSignIn(true);
          dispatch(LoginUser(mobileNumber));

          setTimeout(() => {
            setSplash(false);
          }, 1000);
        } else {
          setSignIn(false);
          setTimeout(() => {
            setSplash(false);
          }, 1000);
        }
      })
      .catch((e) => {
        Alert.alert("Alert", "Sorry we are down for maintenance");
      });
  }, [mobileNumber, signedIn]);

  return (
    <>
      {!splash ? (
        <>
          <Header blood={true} sigin={false} />
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
                    <Stack.Screen
                      name="bottomNav"
                      component={BottomNav}
                    ></Stack.Screen>
                    <Stack.Screen
                      name="Redirection"
                      component={Redirection}
                    ></Stack.Screen>
                    <Stack.Screen name="Blood" component={Blood}></Stack.Screen>
                  </Stack.Navigator>
                </NavigationContainer>
              ) : (
                <>
                  <BottomNav />
                </>
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

export function mapToState(state) {
  return state;
}

export default connect(mapToState)(Home);
