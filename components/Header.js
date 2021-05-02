import React, { useEffect, useState } from "react";
import { Alert, StatusBar, StyleSheet, View } from "react-native";
import { Appbar, Title } from "react-native-paper";
import { Linking } from "react-native";

import { ScrollView } from "react-native";
import { Dialog, Portal, Text, Button } from "react-native-paper";
import { connect } from "react-redux";
import { userLogout } from "../Api/ApiActions";
import { Logout } from "../actions/AuthenticationActions";

function Header(props) {
  const [visible, setVisible] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);

  const [loginstate, changeLoginState] = useState(false);
  const { AuthenticationReducer } = props;
  const [refreshPage, setRefreshPage] = useState("");

  const hideDialog = () => setVisible(false);
  const hideDialog2 = () => setVisible2(false);

  const { dispatch } = props;

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

            <Appbar.Action icon="license" onPress={() => setVisible2(true)} />
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
                          dispatch(Logout());
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
            <ScrollView
              contentContainerStyle={{
                paddingHorizontal: 24,
                padding: 25,
              }}
            >
              <>
                <View style={{ alignItems: "stretch" }}>
                  <Title>Privacy Policy</Title>
                  <Text></Text>
                  <Text>
                    Try Catch Labs built the COVAID app as an Open Source app.
                    This SERVICE is provided by Try Catch Labs at no cost and is
                    intended for use as is.
                  </Text>
                  <Text></Text>
                  <Text>
                    This page is used to inform visitors regarding our policies
                    with the collection, use, and disclosure of Personal
                    Information if anyone decided to use our Service.
                  </Text>
                  <Text></Text>
                  <Text>
                    If you choose to use our Service, then you agree to the
                    collection and use of information in relation to this
                    policy. The Personal Information that we collect is used for
                    providing and improving the Service. We will not use or
                    share your information with anyone except as described in
                    this Privacy Policy.
                  </Text>
                  <Text></Text>
                  <Text>
                    The terms used in this Privacy Policy have the same meanings
                    as in our Terms and Conditions, which is accessible at
                    COVAID unless otherwise defined in this Privacy Policy.
                  </Text>
                  <Text></Text>
                  <Text>Information Collection and Use</Text>
                  <Text></Text>
                  <Text>
                    For a better experience, while using our Service, we may
                    require you to provide us with certain personally
                    identifiable information. The information that we request
                    will be retained by us and used as described in this privacy
                    policy. Though we go above and beyond to save your privacy
                    policy, considering this app to be open-source we are not
                    liable for any data loss. Accepting or sending a request is
                    equivalent to giving consent for infomration exchange. Some
                    obvious imformation will be public.
                  </Text>
                  <Text></Text>
                  <Text>
                    The app does use third party services that may collect
                    information used to identify you. App may redirect you to
                    third party applications.
                  </Text>
                  <Text></Text>
                  <Text>
                    Link to privacy policy of third party service providers used
                    by the app
                  </Text>
                  <Text></Text>
                  <Text>Google Play Services</Text>
                  <Text></Text>
                  <Text>Log Data</Text>
                  <Text></Text>
                  <Text>
                    We want to inform you that whenever you use our Service, in
                    a case of an error in the app we collect data and
                    information (through third party products) on your phone
                    called Log Data. This Log Data may include information such
                    as your device Internet Protocol (“IP”) address, device
                    name, operating system version, the configuration of the app
                    when utilizing our Service, the time and date of your use of
                    the Service, and other statistics.
                  </Text>
                  <Text></Text>
                  <Text>Cookies</Text>
                  <Text></Text>
                  <Text>
                    Cookies are files with a small amount of data that are
                    commonly used as anonymous unique identifiers. These are
                    sent to your browser from the websites that you visit and
                    are stored on your device's internal memory.
                  </Text>
                  <Text></Text>
                  <Text>
                    This Service does not use these “cookies” explicitly.
                    However, the app may use third party code and libraries that
                    use “cookies” to collect information and improve their
                    services. You have the option to either accept or refuse
                    these cookies and know when a cookie is being sent to your
                    device. If you choose to refuse our cookies, you may not be
                    able to use some portions of this Service.
                  </Text>
                  <Text></Text>
                  <Text>Service Providers</Text>
                  <Text></Text>
                  <Text>
                    We may employ third-party companies and individuals due to
                    the following reasons:
                  </Text>
                  <Text></Text>
                  <Text>To facilitate our Service;</Text>
                  <Text></Text>
                  <Text>To provide the Service on our behalf;</Text>
                  <Text></Text>
                  <Text>To perform Service-related services; or</Text>
                  <Text></Text>
                  <Text>
                    To assist us in analyzing how our Service is used.
                  </Text>
                  <Text></Text>
                  <Text>
                    We want to inform users of this Service that these third
                    parties have access to your Personal Information. The reason
                    is to perform the tasks assigned to them on our behalf.
                    However, they are obligated not to disclose or use the
                    information for any other purpose.
                  </Text>
                  <Text></Text>
                  <Text>Security</Text>
                  <Text></Text>
                  <Text>
                    We value your trust in providing us your Personal
                    Information, thus we are striving to use commercially
                    acceptable means of protecting it. But remember that no
                    method of transmission over the internet, or method of
                    electronic storage is 100% secure and reliable, and we
                    cannot guarantee its absolute security.
                  </Text>
                  <Text></Text>
                  <Text>Links to Other Sites</Text>
                  <Text></Text>
                  <Text>
                    This Service may contain links to other sites. If you click
                    on a third-party link, you will be directed to that site.
                    Note that these external sites are not operated by us.
                    Therefore, we strongly advise you to review the Privacy
                    Policy of these websites. We have no control over and assume
                    no responsibility for the content, privacy policies, or
                    practices of any third-party sites or services.
                  </Text>
                  <Text></Text>
                  <Text>Children’s Privacy</Text>
                  <Text></Text>
                  <Text>
                    These Services do not address anyone under the age of 13. We
                    do not knowingly collect personally identifiable information
                    from children under 13 years of age. In the case we discover
                    that a child under 13 has provided us with personal
                    information, we immediately delete this from our servers. If
                    you are a parent or guardian and you are aware that your
                    child has provided us with personal information, please
                    contact us so that we will be able to do necessary actions.
                  </Text>
                  <Text></Text>
                  <Text>Changes to This Privacy Policy</Text>
                  <Text></Text>
                  <Text>
                    We may update our Privacy Policy from time to time. Thus,
                    you are advised to review this page periodically for any
                    changes. We will notify you of any changes by posting the
                    new Privacy Policy on this page.
                  </Text>
                  <Text></Text>
                  <Text>This policy is effective as of 2021-04-28</Text>
                  <Text></Text>
                  <Text>Contact Us</Text>
                  <Text></Text>
                  <Text>
                    If you have any questions or suggestions about our Privacy
                    Policy, do not hesitate to contact us at
                    contact@trycatchlabs.com.
                  </Text>
                  <Text></Text>
                </View>
              </>
            </ScrollView>
          </Dialog.ScrollArea>
        </Dialog>
      </Portal>

      <Portal>
        <Dialog visible={visible2} onDismiss={hideDialog2}>
          <Dialog.ScrollArea>
            <ScrollView
              contentContainerStyle={{
                paddingHorizontal: 24,
                padding: 25,
              }}
            >
              <>
                <Title>COVAID Copyright (C) 2021 TryCatchLabs</Title>
                <Text>
                  This program is free software: you can redistribute it and/or
                  modify
                </Text>
                <Text>
                  it under the terms of the GNU General Public License as
                  published by
                </Text>
                <Text>
                  the Free Software Foundation, either version 3 of the License,
                  or
                </Text>
                <Text>(at your option) any later version.</Text>
                <Text>
                  This program is distributed in the hope that it will be
                  useful,
                </Text>
                <Text>
                  but WITHOUT ANY WARRANTY; without even the implied warranty of
                </Text>
                <Text>
                  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
                </Text>
                <Text>GNU General Public License for more details.</Text>
                <Text>
                  You should have received a copy of the GNU General Public
                  License
                </Text>
                <Text>
                  along with this program. If not, see{" "}
                  {"<https://www.gnu.org/licenses/>."}
                </Text>
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
