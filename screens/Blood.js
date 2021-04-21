import * as React from "react";
import { useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
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
            <Button
              icon="water"
              mode="contained"
              onPress={() => setBloodDonor(true)}
            >
              Donor
            </Button>
            <Divider />
            <Divider />
            <Button
              icon="water"
              mode="contained"
              onPress={() => setBloodPatient(true)}
            >
              Patient
            </Button>
          </>
        )}

        {bloodDonor === true && (
          <>
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
                icon="information"
                onPress={() => console.log("Pressed")}
              >
                AB-
              </Chip>
            </View>

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
          </>
        )}

        {bloodPatient === true && (
          <>
            <Button
              icon="water"
              mode="contained"
              onPress={() => setBloodDonor(true)}
            >
              Donor
            </Button>
            <Divider />
            <Divider />
            <Button
              icon="water"
              mode="contained"
              onPress={() => setBloodPatient(true)}
            ></Button>
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
