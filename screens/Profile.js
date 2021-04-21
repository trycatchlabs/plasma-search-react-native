import * as React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import {
  BottomNavigation,
  Text,
  Chip,
  Switch,
  Card,
  TextInput,
  Button,
  Checkbox,
} from "react-native-paper";

import DateTimePicker from "@react-native-community/datetimepicker";
import ImageButton from "../components/ImageButton";

function Profile() {
  const [bloodReciever, setBlood] = React.useState(false);
  const [oxygenReciever, setOxygen] = React.useState(false);
  const [missReciever, setMiss] = React.useState(false);
  const [pickUp, setPickUp] = React.useState(false);
  const [oxygenGear, setOxygenGear] = React.useState(false);
  const [oxygenGearDeliver, setOxygenGearDeliver] = React.useState(false);

  const [date, setDate] = React.useState(new Date());
  const [mode, setMode] = React.useState("date");
  const [show, setShow] = React.useState(false);

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
    <ScrollView>
      <View style={styles.container}>
        <Text style={{ fontSize: 20 }}>
          Blood ({bloodReciever && <Text>Donate</Text>}
          {!bloodReciever && <Text>Recieve</Text>})
        </Text>
        <Switch
          value={bloodReciever}
          onValueChange={() => setBlood(!bloodReciever)}
        />
      </View>
      {bloodReciever && (
        <Card>
          <Card.Title title="Blood Donation Details" />
          <Text>Blood type</Text>
          <View style={styles.container}>
            <Chip
              style={styles.chip}
              icon="information"
              onPress={() => console.log("Pressed")}
            >
              A+
            </Chip>
            <Chip
              style={styles.chip}
              icon="information"
              onPress={() => console.log("Pressed")}
            >
              A-
            </Chip>
            <Chip
              style={styles.chip}
              icon="information"
              onPress={() => console.log("Pressed")}
            >
              O+
            </Chip>
            <Chip
              style={styles.chip}
              icon="information"
              onPress={() => console.log("Pressed")}
            >
              O-
            </Chip>
          </View>
          <View style={styles.container}>
            <Chip
              style={styles.chip}
              icon="information"
              onPress={() => console.log("Pressed")}
            >
              B+
            </Chip>
            <Chip
              style={styles.chip}
              icon="information"
              onPress={() => console.log("Pressed")}
            >
              B-
            </Chip>
            <Chip
              style={styles.chip}
              icon="information"
              onPress={() => console.log("Pressed")}
            >
              AB+
            </Chip>
            <Chip
              style={styles.chip}
              icon="water"
              onPress={() => console.log("Pressed")}
            >
              AB-
            </Chip>
          </View>
          <View>
            <Button mode="contained" onPress={showDatepicker}>
              Recovered on {JSON.stringify(date).split("T")[0].slice(1)}{" "}
              (YYYY-MM-DD)
            </Button>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
            <TextInput
              label={"Distance you are willing to travel in KMS"}
              keyboardType="number-pad"
              maxLength={4}
            ></TextInput>
          </View>

          <ImageButton></ImageButton>
        </Card>
      )}
      {!bloodReciever && (
        <Card>
          <Card.Title title="Blood Donation Details" />
          <Text>Blood type</Text>
          <View style={styles.container}>
            <Chip
              style={styles.chip}
              icon="information"
              onPress={() => console.log("Pressed")}
            >
              A+
            </Chip>
            <Chip
              style={styles.chip}
              icon="information"
              onPress={() => console.log("Pressed")}
            >
              A-
            </Chip>
            <Chip
              style={styles.chip}
              icon="information"
              onPress={() => console.log("Pressed")}
            >
              O+
            </Chip>
            <Chip
              style={styles.chip}
              icon="information"
              onPress={() => console.log("Pressed")}
            >
              O-
            </Chip>
          </View>
          <View style={styles.container}>
            <Chip
              style={styles.chip}
              icon="information"
              onPress={() => console.log("Pressed")}
            >
              B+
            </Chip>
            <Chip
              style={styles.chip}
              icon="information"
              onPress={() => console.log("Pressed")}
            >
              B-
            </Chip>
            <Chip
              style={styles.chip}
              icon="information"
              onPress={() => console.log("Pressed")}
            >
              AB+
            </Chip>
            <Chip
              style={styles.chip}
              icon="water"
              onPress={() => console.log("Pressed")}
            >
              AB-
            </Chip>
          </View>
          <View>
            <TextInput label={"Hospital Name & address"}></TextInput>
          </View>
          <View style={styles.container}>
            <Text>Can you provide pickup and drop</Text>
            <Switch value={pickUp} onValueChange={() => setPickUp(!pickUp)} />
            <Text>
              ({pickUp && <Text>Yes I Can</Text>}
              {!pickUp && <Text>No I can't</Text>})
            </Text>
          </View>
          <ImageButton></ImageButton>
        </Card>
      )}

      <View style={styles.container}>
        <Text style={{ fontSize: 20 }}>
          Oxygen ({oxygenReciever && <Text>Donate</Text>}
          {!oxygenReciever && <Text>Recieve</Text>})
        </Text>
        <Switch
          value={oxygenReciever}
          onValueChange={() => setOxygen(!oxygenReciever)}
        />
      </View>

      {oxygenReciever && (
        <Card>
          <View style={styles.container}>
            <Text>Do you have full oxygen gear</Text>
            <Switch
              value={oxygenGear}
              onValueChange={() => setOxygenGear(!oxygenGear)}
            />
            <Text>
              ({oxygenGear && <Text>Yes I Have</Text>}
              {!oxygenGear && <Text>No I Dont</Text>})
            </Text>
          </View>
          <View style={styles.container}>
            <Text>Can I deliver or not</Text>
            <Switch
              value={oxygenGearDeliver}
              onValueChange={() => setOxygenGearDeliver(!oxygenGear)}
            />
            <Text>
              ({oxygenGearDeliver && <Text>Yes I Can</Text>}
              {!oxygenGearDeliver && <Text>No I Can't</Text>})
            </Text>
          </View>
        </Card>
      )}
      {!oxygenReciever && (
        <Card>
          <View>
            <TextInput label={"Hospital Name & address"}></TextInput>
          </View>
        </Card>
      )}

      <View style={styles.container}>
        <Text style={{ fontSize: 20 }}>
          Miscellaneous ({missReciever && <Text>Donate</Text>}
          {!missReciever && <Text>Recieve</Text>})
        </Text>
        <Switch
          value={missReciever}
          onValueChange={() => setMiss(!missReciever)}
        />
      </View>

      {missReciever && (
        <TextInput label={"Enter things you can donate bro"}></TextInput>
      )}
      {!missReciever && (
        <TextInput label={"Enter things you want to recieve"}></TextInput>
      )}
    </ScrollView>
  );
}

export default Profile;

const styles = StyleSheet.create({
  chip: { width: "19%", height: 50 },
  container: { flexDirection: "row", justifyContent: "center", padding: 10 },
});
