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

function Blood() {
  const [bloodDonor, setBloodDonor] = useState(false);
  const [bloodPatient, setBloodPatient] = useState(false);
  const [value, setValue] = React.useState("0");
  const [text, setText] = React.useState("");
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

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
        {bloodDonor === false && bloodPatient === false && (
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
        )}

        {bloodDonor === true && (
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

export default Blood;

const styles = StyleSheet.create({
  chip: { width: 69, height: 60 },
  container: { flexDirection: "row", justifyContent: "center" },
});
