import * as React from "react";
import { View, ScrollView } from "react-native";
import { Button, Divider, Card } from "react-native-paper";
import { useState } from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import { Avatar, Title, Paragraph, Switch } from "react-native-paper";
import { RadioButton, Text, TextInput, Chip } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import { connect } from "react-redux";
import {
  setOxygenReciever,
  setGearStatus,
  setCanDeliverGear,
  setHospitalAddressOxygen,
  setDetailsAvailableOxygen,
} from "../actions/oxygenActions";

function Oxygen(props) {
  const [bloodDonor, setBloodDonor] = React.useState(true);
  const [bloodPatient, setBloodPatient] = React.useState(false);
  const [value, setValue] = React.useState("0");
  const [text, setText] = React.useState("");
  const [date, setDate] = React.useState(new Date());
  const [mode, setMode] = React.useState("date");
  const [show, setShow] = React.useState(false);
  const [comingSoon, setComingSoon] = useState(true);

  const { oxygenReducer, dispatch } = props;

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
    <>
      {comingSoon == true ? (
        <>
          <>
            <Card>
              <Card.Actions>
                <Button icon="sign-caution">
                  <Text> Page Under Construction</Text>
                </Button>
              </Card.Actions>
            </Card>
          </>
        </>
      ) : (
        <>
          <View style={{ flex: 0, padding: 10 }}>
            <ScrollView>
              {oxygenReducer.oxygenDetailsAvailable ? (
                <>
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
                          <Card.Cover
                            source={{ uri: "https://picsum.photos/700" }}
                          />
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
                </>
              ) : (
                <>
                  <View style={styles.container}>
                    <Text style={{ fontSize: 20 }}>
                      Oxygen (
                      {oxygenReducer.oxygenReciever && <Text>Donate</Text>}
                      {!oxygenReducer.oxygenReciever && <Text>Recieve</Text>})
                    </Text>
                    <Switch
                      value={oxygenReducer.oxygenReciever}
                      onValueChange={() => {
                        dispatch(
                          setOxygenReciever(!oxygenReducer.oxygenReciever)
                        );
                      }}
                    />
                  </View>
                  {!oxygenReducer.oxygenReciever && (
                    <Card>
                      <View>
                        <TextInput
                          label={"Hospital Name & address where you are"}
                          onChangeText={(value) => {
                            dispatch(setHospitalAddressOxygen(value));
                          }}
                          value={oxygenReducer.hospitalName}
                        ></TextInput>
                      </View>
                    </Card>
                  )}
                  {oxygenReducer.oxygenReciever && (
                    <Card>
                      <View style={styles.container}>
                        <Text>Do you have full oxygen gear</Text>
                        <Switch
                          value={oxygenReducer.fullGear}
                          onValueChange={() => {
                            dispatch(setGearStatus(!oxygenReducer.fullGear));
                          }}
                        />
                        <Text>
                          ({oxygenReducer.fullGear && <Text>Yes I Have</Text>}
                          {!oxygenReducer.fullGear && <Text>No I Dont</Text>})
                        </Text>
                      </View>
                      <View style={styles.container}>
                        <Text>Can I deliver or not</Text>
                        <Switch
                          value={oxygenReducer.canDeliver}
                          onValueChange={() => {
                            dispatch(
                              setCanDeliverGear(!oxygenReducer.canDeliver)
                            );
                          }}
                        />
                        <Text>
                          ({oxygenReducer.canDeliver && <Text>Yes I Can</Text>}
                          {!oxygenReducer.canDeliver && <Text>No I Can't</Text>}
                          )
                        </Text>
                      </View>
                    </Card>
                  )}
                  <Card.Actions>
                    <Button
                      style={{ width: "100%" }}
                      mode="contained"
                      onPress={() => {
                        dispatch(setDetailsAvailableOxygen(true));
                      }}
                    >
                      Save
                    </Button>
                  </Card.Actions>
                </>
              )}
            </ScrollView>
          </View>
        </>
      )}
    </>
  );
}

export function mapToState(state) {
  return state;
}

export default connect(mapToState)(Oxygen);

const styles = StyleSheet.create({
  chip: { height: 50 },
  chipSelected: { height: 50, backgroundColor: "red" },
  container: { flexDirection: "row", justifyContent: "center", padding: 10 },
});
