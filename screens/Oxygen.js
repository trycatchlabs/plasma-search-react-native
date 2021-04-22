import * as React from "react";
import { View, ScrollView } from "react-native";
import { Button, Divider, Card } from "react-native-paper";
import { useState } from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import { Avatar, Title, Paragraph } from "react-native-paper";
import { RadioButton, Text, TextInput, Chip } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import { connect } from "react-redux";

function Oxygen(props) {
  const [bloodDonor, setBloodDonor] = React.useState(true);
  const [bloodPatient, setBloodPatient] = React.useState(false);
  const [value, setValue] = React.useState("0");
  const [text, setText] = React.useState("");
  const [date, setDate] = React.useState(new Date());
  const [mode, setMode] = React.useState("date");
  const [show, setShow] = React.useState(false);

  const { oxygenReducer } = props;

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
      <ScrollView>
        {oxygenReducer.oxygenReciever === false ? (
          <>
            <Card>
              <Card.Title
                title="Card Title"
                subtitle="Card Subtitle"
                left={LeftContent}
              />
              <Card.Content>
                <Title>Card title</Title>
                <Paragraph>Card content</Paragraph>
              </Card.Content>
              <TouchableHighlight
                onPress={() => {
                  alert("hello");
                }}
              >
                <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
              </TouchableHighlight>
              <Card.Actions>
                <Button>Accept</Button>
                <Button icon="download"></Button>
              </Card.Actions>
            </Card>
          </>
        ) : (
          <>
            <View>
              <TextInput
                label={"Enter Message (Max char 160)"}
                maxLength={160}
              ></TextInput>
              <Button mode="contained">Search</Button>
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
}

export function mapToState(state) {
  return state;
}

export default connect(mapToState)(Oxygen);
