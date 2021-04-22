import * as React from "react";
import { StyleSheet, View } from "react-native";
import { BottomNavigation, Text } from "react-native-paper";
import Header from "../components/Header";
import Blood from "../screens/Blood";
import Misc from "../screens/Misc";
import Oxygen from "../screens/Oxygen";
import Profile from "../screens/Profile";

function BottomNav() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "Blood", title: "Blood", icon: "water" },
    { key: "albums", title: "Oxygen", icon: "circle" },
    { key: "recents", title: "Misc", icon: "clipboard" },
    { key: "Profile", title: "Profile", icon: "contacts" },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    Blood: Blood,
    albums: Oxygen,
    recents: Misc,
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
