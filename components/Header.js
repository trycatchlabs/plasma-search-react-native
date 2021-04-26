import React, { useEffect, useState } from "react";
import { Alert, StatusBar, StyleSheet, View } from "react-native";
import { Appbar } from "react-native-paper";
import { Linking } from "react-native";

import { ScrollView } from "react-native";
import { Dialog, Portal, Text, Button } from "react-native-paper";
import { connect } from "react-redux";
import { userLogout } from "../Api/ApiActions";

function Header(props) {
  const [visible, setVisible] = React.useState(false);
  const [loginstate, changeLoginState] = useState(false);
  const { AuthenticationReducer } = props;

  useEffect(() => {
    console.log("loggedout");
  }, [changeLoginState]);
  const hideDialog = () => setVisible(false);

  return (
    <>
      <Appbar.Header style={styles.header}>
        <StatusBar></StatusBar>

        {props.blood === true && (
          <>
            <Appbar.Content title="Covaid " />

            <Appbar.Action
              icon="information"
              onPress={() => setVisible(true)}
            />

            <Appbar.Action
              icon="alert-octagram"
              onPress={() => setVisible(true)}
            />
            {props.sigin && (
              <>
                <Appbar.Action
                  icon="logout"
                  onPress={() =>
                    Alert.alert("Logout", "do you want to logout", [
                      {
                        text: "Yes",
                        onPress: () => {
                          userLogout(AuthenticationReducer.mobilenumber);
                          changeLoginState(true);
                        },
                      },
                      { text: "No", onPress: () => console.log("No Pressed") },
                    ])
                  }
                />
              </>
            )}
          </>
        )}
      </Appbar.Header>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.ScrollArea>
            <ScrollView contentContainerStyle={{ paddingHorizontal: 24 }}>
              <>
                <Text>sadads</Text>
                <Button
                  onPress={() => {
                    console.log("dsadas");
                    Linking.openURL("https://www.google.com");
                  }}
                >
                  click me
                </Button>
              </>
            </ScrollView>
          </Dialog.ScrollArea>
        </Dialog>
      </Portal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
  },
});

export function mapToState(state) {
  return state;
}

export default connect(mapToState)(Header);
