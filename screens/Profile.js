import * as React from "react";
import { Alert, ScrollView, View } from "react-native";
import { Button, Divider } from "react-native-paper";
import { Header } from "../components/Header";
import { connect } from "react-redux";
import { userLogout } from "../Api/ApiActions";
import { Logout } from "../actions/AuthenticationActions";

function Profile(props) {
  const { AuthenticationReducer, dispatch, navigation } = props;
  return (
    <>
      <View style={{ margin: 10, borderRadius: 10 }}>
        <ScrollView>
          <Button
            mode="contained"
            onPress={() => {
              Alert.alert("Logout", "do you want to logout", [
                {
                  text: "Yes",
                  onPress: () => {
                    userLogout(AuthenticationReducer.mobilenumber);
                    dispatch(Logout());
                    alert("Logout Inetiated please reopen app to login again");
                  },
                },
                { text: "No", onPress: () => console.log("No Pressed") },
              ]);
            }}
          >
            Logout
          </Button>
          <Divider />
          <Divider />
          <Divider />
        </ScrollView>
      </View>
    </>
  );
}

export function mapToState(state) {
  return state;
}

export default connect(mapToState)(Profile);
