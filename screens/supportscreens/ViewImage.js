import * as React from "react";
import { useState } from "react";
import { ScrollView, View, StyleSheet, TouchableHighlight } from "react-native";
import { Avatar, Card, Title, Paragraph } from "react-native-paper";
import {
  Button,
  Divider,
  RadioButton,
  Text,
  TextInput,
  Chip,
} from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";

function ViewImage() {
  const LeftContent = (props) => <Avatar.Icon {...props} icon="account" />;

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
    console.log(date);
  };

  return (
    <View>
      <Text>dasdsa</Text>
    </View>
  );
}

export default ViewImage;

const styles = StyleSheet.create({
  chip: { width: 69, height: 60 },
  container: { flexDirection: "row", justifyContent: "center" },
});
