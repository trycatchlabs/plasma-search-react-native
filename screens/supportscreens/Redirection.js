import { createStackNavigator } from "@react-navigation/stack";
import { ActivityIndicator, Colors } from "react-native-paper";
import * as React from "react";
import { View } from "react-native";
import { Text, Title } from "react-native-paper";
import { connect } from "react-redux";
import { LoginUser } from "../../actions/AuthenticationActions";
import { setDetailsAvailable } from "../../actions/bloodActions";
import { getUserInformation } from "../../Api/ApiActions";
import { getMobileNumber } from "../../Api/LocalStorageActions";

function Redirection(props) {
  const [onboarding, setOnboarding] = React.useState(true);
  const [signedIn, setSignIn] = React.useState(false);
  const [splash, setSplash] = React.useState(true);
  const [mobileNumber, setMobileNumber] = React.useState(null);
  const { AuthenticationReducer, dispatch, navigation } = props;

  React.useEffect(() => {
    setTimeout(() => {
      getMobileNumber().then((num) => {
        setMobileNumber(num);
        dispatch(LoginUser(num));
      });

      getUserInformation(mobileNumber).then((value) => {
        dispatch(setDetailsAvailable(value));
        if (mobileNumber !== null) {
          dispatch(LoginUser(mobileNumber));
          console.log("someone logged in", mobileNumber);
          navigation.navigate("bottomNav");
        } else {
          console.log("no one logged in");
          setTimeout(() => {
            navigation.navigate("Login");
          }, 2000);
        }
      });
    }, 4000);
  }, [mobileNumber, signedIn]);

  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Title>
          <ActivityIndicator
            size={"large"}
            animating={true}
            color={Colors.red800}
          />
        </Title>
      </View>
    </>
  );
}

export function mapToState(state) {
  return state;
}

export default connect(mapToState)(Redirection);
