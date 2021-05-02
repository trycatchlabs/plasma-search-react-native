import * as React from "react";
import { StyleSheet, Linking, ScrollView } from "react-native";
import {
  Button,
  Card,
  Dialog,
  Portal,
  Title,
  TextInput,
} from "react-native-paper";
function TwitterInfo(params) {
  const [visible, setVisible] = React.useState(false);
  const [buttonType, setButonType] = React.useState("");
  const [state, setState] = React.useState("");
  const [date, setDate] = React.useState("");
  const showModal = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const containerStyle = { padding: 20, margin: 20, width: "30%" };

  React.useEffect(() => {
    setDate(
      JSON.stringify(new Date(Date.now() - 86400000))
        .split("T")[0]
        .slice(1)
    );
  }, []);

  return (
    <>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.ScrollArea>
            <ScrollView contentContainerStyle={{ padding: 24 }}>
              <>
                <TextInput
                  label={"Enter your state here"}
                  onChangeText={(value) => {
                    setState(value);
                  }}
                  value={state}
                ></TextInput>
                <Button
                  mode="contained"
                  style={styles.buttonsEnd}
                  onPress={() => {
                    if (buttonType === "Vaccination") {
                      Linking.openURL(
                        `https://twitter.com/search?q=verified%20${state}%20(vaccine%20OR%20vaccination%20OR%20covaxin%20OR%20covishield)%20-%27not%20verified%27%20-%27un%20verified%27%20-urgent%20-unverified%20-needed%20-required%20-need%20-needs%20since%3A${date}&f=live`
                      );
                    } else if (buttonType === "Oxygen") {
                      Linking.openURL(
                        `https://twitter.com/search?q=verified%20${state}%20oxygen%20-%27not%20verified%27%20-%27un%20verified%27%20-urgent%20-unverified%20-needed%20-required%20-need%20-needs%20since%3A${date}&f=live`
                      );
                    } else if (buttonType === "Plasma") {
                      Linking.openURL(
                        `https://twitter.com/search?q=verified%20${state}%20plasma%20-%27not%20verified%27%20-%27un%20verified%27%20-urgent%20-unverified%20-needed%20-required%20-need%20-needs%20since%3A${date}&f=live`
                      );
                    } else if (buttonType === "Remdesevir") {
                      Linking.openURL(
                        `https://twitter.com/search?q=verified%20${state}%20(remdesivir%20OR%20remdesevir%20OR%20ramdesivir%20OR%20ramdesevir)%20-%27not%20verified%27%20-%27un%20verified%27%20-urgent%20-unverified%20-needed%20-required%20-need%20-needs%20since%3A${date}&f=live`
                      );
                    } else if (buttonType === "Fabiflu") {
                      Linking.openURL(
                        `https://twitter.com/search?q=verified%20${state}%20(fabiflu%20OR%20faviflu)%20-%27not%20verified%27%20-%27un%20verified%27%20-urgent%20-unverified%20-needed%20-required%20-need%20-needs%20since%3A${date}&f=live`
                      );
                    } else if (buttonType === "Ventilator") {
                      Linking.openURL(
                        `https://twitter.com/search?q=verified%20${state}%20ventilator%20-%27not%20verified%27%20-%27un%20verified%27%20-urgent%20-unverified%20-needed%20-required%20-need%20-needs%20since%3A${date}&f=live`
                      );
                    } else if (buttonType === "Icu") {
                      Linking.openURL(
                        `https://twitter.com/search?q=verified%20${state}%20(ICU%20OR%20icu)%20-%27not%20verified%27%20-%27un%20verified%27%20-urgent%20-unverified%20-needed%20-required%20-need%20-needs%20-requirement%20since%3A${date}&f=live`
                      );
                    } else if (buttonType === "Beds") {
                      Linking.openURL(
                        `https://twitter.com/search?q=verified%20${state}%20(bed%20OR%20beds)%20-unverified%20-%27un%20verified%27%20-needed%20-required%20-need%20-needs%20-requirement%20delhi%20since%3A${date}&f=live`
                      );
                    } else if (buttonType === "Hemkunt") {
                      Linking.openURL(`https://hemkuntfoundation.com/`);
                    }
                  }}
                >
                  see resource in twitter
                </Button>
              </>
            </ScrollView>
          </Dialog.ScrollArea>
        </Dialog>
      </Portal>
      <Card>
        <Title style={{ flex: 0, textAlign: "center", fontSize: 20 }}>
          Important Resources online
        </Title>
        <Card.Actions>
          <Button
            mode="contained"
            style={styles.buttons}
            onPress={() => {
              showModal();
              setButonType("Plasma");
            }}
          >
            Plasma
          </Button>
          <Button
            mode="contained"
            style={styles.buttons}
            onPress={() => {
              showModal();
              setButonType("Oxygen");
            }}
          >
            Oxygen
          </Button>
        </Card.Actions>
        <Card.Actions>
          <Button
            mode="contained"
            style={styles.buttonsEnd}
            onPress={() => {
              showModal();
              setButonType("Icu");
            }}
          >
            Icu
          </Button>
        </Card.Actions>
        <Card.Actions>
          <Button
            mode="contained"
            style={styles.buttons}
            onPress={() => {
              showModal();
              setButonType("Beds");
            }}
          >
            Bed's
          </Button>
          <Button
            mode="contained"
            style={styles.buttons}
            onPress={() => {
              showModal();
              setButonType("Ventilator");
            }}
          >
            Ventilator
          </Button>
        </Card.Actions>
        <Card.Actions>
          <Button
            mode="contained"
            style={styles.buttonsEnd}
            onPress={() => {
              Linking.openURL("https://covidmealsforindia.com/");
            }}
          >
            Food
          </Button>
        </Card.Actions>

        <Card.Actions>
          <Button
            mode="contained"
            style={styles.buttons}
            onPress={() => {
              showModal();
              setButonType("Vaccination");
            }}
          >
            Vaccination
          </Button>
          <Button
            mode="contained"
            style={styles.buttons}
            onPress={() => {
              showModal();
              setButonType("Remdesevir");
            }}
          >
            Remdesevir
          </Button>
        </Card.Actions>
        <Card.Actions>
          <Button
            mode="contained"
            style={styles.buttonsEnd}
            onPress={() => {
              showModal();
              setButonType("Fabiflu");
            }}
          >
            fabiflu
          </Button>
        </Card.Actions>

        <Card.Actions>
          <Button
            mode="contained"
            style={styles.buttonsEnd}
            onPress={() => {
              Linking.openURL(`https://hemkuntfoundation.com/`);
            }}
          >
            Hemkunt Foundation (Covid Relief)
          </Button>
        </Card.Actions>

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
