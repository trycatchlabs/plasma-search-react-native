import * as React from "react";
import { StyleSheet, View } from "react-native";
import { State } from "react-native-gesture-handler";
import { BottomNavigation, Text } from "react-native-paper";
import { Header } from "../components/Header";
import { connect } from "react-redux";
import AuthenticationReducer from "../reducers/Authentication";
import Blood from "../screens/Blood";
import Misc from "../screens/Misc";
import Oxygen from "../screens/Oxygen";
import Profile from "../screens/Profile";

function BottomNav(props) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "Blood", title: "Blood", icon: "water" },
    { key: "Oxygen", title: "Oxygen", icon: "circle" },
    // { key: "Misc", title: "Misc", icon: "clipboard" },// still in progress
    { key: "Profile", title: "Profile", icon: "contacts" },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    Blood: Blood,
    Oxygen: Oxygen,
    Misc: Misc,
    Profile: Profile,
  });
  return (
    <>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </>
  );
}

export function mapToState(state) {
  return state;
}

export default connect(mapToState)(BottomNav);
