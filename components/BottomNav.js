import * as React from "react";
import { StyleSheet, View } from "react-native";
import { BottomNavigation, Text } from "react-native-paper";
import Blood from "../screens/Blood";
import Misc from "../screens/Misc";
import Oxygen from "../screens/Oxygen";
import Profile from "../screens/Profile";
import TwitterInfo from "../screens/TwitterInfo";

function BottomNav() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "Blood", title: "Plasma", icon: "water" },
    { key: "Information", title: "Information", icon: "information" },
    // { key: "Oxygen", title: "Oxygen", icon: "circle" },
    // { key: "Misc", title: "Misc", icon: "clipboard" },// still in progress
    { key: "Profile", title: "Profile", icon: "contacts" },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    Blood: Blood,
    Oxygen: Oxygen,
    Information: TwitterInfo,
    Misc: Misc,
    Profile: Profile,
  });
  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}

export default BottomNav;
