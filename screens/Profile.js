import * as React from "react";
import { ScrollView } from "react-native";
import { Button, Divider } from "react-native-paper";
import { connect } from "react-redux";

function Profile(props) {
  return (
    <ScrollView>
      <Divider />
      <Divider />
      <Divider />
    </ScrollView>
  );
}

export function mapToState(state) {
  return state;
}

export default connect(mapToState)(Profile);
