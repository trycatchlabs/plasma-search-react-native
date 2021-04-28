import * as React from "react";
import { Text, StyleSheet, Linking, Alert } from "react-native";
import { Button, Card, Title } from "react-native-paper";
function TwitterInfo(params) {
  return (
    <>
      <Card>
        <Title style={{ flex: 0, textAlign: "center", fontSize: 20 }}>
          Important Resources online
        </Title>
        <Card.Actions>
          <Button
            mode="contained"
            style={styles.buttons}
            onPress={() => {
              Linking.openURL("https://covidmealsforindia.com/");
            }}
          >
            Food
          </Button>
          <Button mode="contained" style={styles.buttons}>
            Vaccination
          </Button>
        </Card.Actions>
        <Card.Actions>
          <Button mode="contained" style={styles.buttons}>
            Oxygen Donor
          </Button>
          <Button mode="contained" style={styles.buttons}>
            Plasma
          </Button>
        </Card.Actions>
        <Card.Actions>
          <Button mode="contained" style={styles.buttons}>
            Medicine
          </Button>
          <Button mode="contained" style={styles.buttons}>
            Ventilator
          </Button>
        </Card.Actions>
        <Card.Actions>
          <Button mode="contained" style={styles.buttons}>
            ICU
          </Button>
          <Button mode="contained" style={styles.buttons}>
            Beds
          </Button>
        </Card.Actions>
        <Title style={styles.buttonsEnd}>
          Please ensure all the resources are twitter information and nothing is
          collected via our team{" "}
        </Title>
        {/* <Card.Actions style={{ justifyContent: "center" }}>
          <Button mode="contained" style={styles.buttonsEnd}>
            Food
          </Button>
        </Card.Actions> */}
      </Card>
    </>
  );
}

export default TwitterInfo;

const styles = StyleSheet.create({
  buttons: { width: "47%", padding: 5, margin: 5 },
  buttonsEnd: {
    flex: 0,
    width: "98%",
    padding: 5,
    margin: 5,
  },
});
