import * as React from "react";
import { BackHandler, Linking } from "react-native";
import { useState, useEffect } from "react";
import * as Location from "expo-location";
import {
  ScrollView,
  View,
  StyleSheet,
  Modal,
  Image,
  Alert,
} from "react-native";
import { Card, Title, Paragraph, Portal } from "react-native-paper";
import { Button, Text, TextInput, Chip, Switch } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import { connect } from "react-redux";
import ImageButton from "../components/ImageButton";
import {
  setBloodRecieverOrDoner,
  setBloodType,
  setDetailsAvailableBlood,
  setDistanceWillingTotravel,
  setHospitalName,
  setLatitudeAndLongitude,
  setPickUpDropStatus,
} from "../actions/bloodActions";
import {
  findDonorAcceptedData,
  performPairMatching,
  requestDonor,
  saveBloodInformation,
} from "../Api/ApiActions";
import { showMatchDetailsToDonate } from "../Api/ApiActions";

function Blood(props) {
  const [cardurl, setCardUrl] = useState("");
  const [visible, setVisible] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = React.useState("date");
  const [message, setMessage] = useState("");
  const [personalMessage, setPersonalMessageActive] = useState(true);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const { bloodReducer, AuthenticationReducer, dispatch } = props;
  const [receiversData, setRecieversData] = useState([]);
  const [donorResponseData, setDonorResponseData] = useState([]);
  const [accepted, setAccepted] = useState(false);
  const [detailsAvailable, setDetailsAvailable] = useState(false);

  let lat = null;
  let long = null;

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
    (async () => {
      let value = await showMatchDetailsToDonate(
        AuthenticationReducer.mobilenumber
      );
      setRecieversData(value);
      console.log(value);
    })();
    (async () => {
      let value = await findDonorAcceptedData(
        AuthenticationReducer.mobilenumber
      );
      setDonorResponseData(value);
      console.log(donorResponseData);
    })();
  }, [accepted]);

  let text = "Collecting location information please wait";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    const { latitude, longitude } = location.coords;
    text = `latitude = ${latitude} and longitude = ${longitude}`;
    lat = latitude;
    long = longitude;
  }

  const onChange = (event, selectedDate) => {
    console.log("sandeep says", selectedDate);
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
  };

  return (
    <View style={{ flex: 0, padding: 10 }}>
      {!detailsAvailable ? (
        <ScrollView>
          {detailsAvailable === true || bloodReducer.detailsAvailable ? (
            <>
              {bloodReducer.bloodReceiver === false ? (
                <>
                  {receiversData.length === 0 && (
                    <>
                      <Title>
                        Currently we dont have dont know any patients that are
                        looking for blood plasma give us sometime we will get
                        back to you. Thankyou for registering with us
                      </Title>
                    </>
                  )}
                  {receiversData.map((cardData, index) => {
                    return (
                      <View key={index}>
                        <Card style={{ padding: 10, marginBottom: 10 }}>
                          <Card.Title
                            title={`${cardData.bloodType} blood group to donate`}
                            subtitle={cardData.hospitalName}
                          />
                          <Card.Content>
                            <Title>{cardData.distance} (Kms)</Title>
                            <Paragraph>{cardData.message}</Paragraph>
                            <Paragraph>
                              Pickup/Drop :{" "}
                              {cardData.pickUpDrop === 1 ? "Yes" : "No"}
                            </Paragraph>
                          </Card.Content>
                          {/* <TouchableHighlight
                          onPress={() => {
                            setVisible(true);
                          }}
                        >
                          <Card.Cover
                            source={{
                              uri:
                                cardData.documentURI !== ""
                                  ? cardData.documentURI
                                  : "https://covaid.trycatchlabs.com/",
                            }}
                          />
                        </TouchableHighlight> */}
                          <Card.Actions>
                            {cardData.isAccepted === 0 ? (
                              <Button
                                onPress={() => {
                                  performPairMatching(
                                    AuthenticationReducer.mobilenumber,
                                    cardData.mobileNumber
                                  );

                                  Alert.alert(
                                    "We have informed the respective reciever",
                                    "give us some time to cordinate with them"
                                  );
                                  setAccepted(true);
                                }}
                              >
                                Accept
                              </Button>
                            ) : (
                              <>
                                <Title>
                                  Call Patient at {cardData.receiver}
                                </Title>
                              </>
                            )}
                          </Card.Actions>
                        </Card>
                      </View>
                    );
                  })}
                  <View>
                    <Portal>
                      <Modal
                        visible={visible}
                        onDismiss={hideModal}
                        style={{
                          backgroundColor: "white",
                          padding: 20,
                        }}
                      >
                        <Button
                          mode="contained"
                          onPress={() => {
                            setVisible(false);
                          }}
                        >
                          Go Back
                        </Button>
                        {/* <Image
                        style={{ height: "100%", width: "100%" }}
                        source={{
                          uri:
                            "https://sitemadison585.weebly.com/uploads/1/2/3/8/123808504/206896313.jpg",
                        }}
                      /> */}
                      </Modal>
                    </Portal>
                  </View>
                </>
              ) : (
                <>
                  <View>
                    {donorResponseData.length === 0 ? (
                      <>
                        <TextInput
                          label={
                            "Enter Details of your requirement (Max char 160)"
                          }
                          maxLength={160}
                          value={message}
                          onChangeText={(value) => {
                            setMessage(value);
                          }}
                        ></TextInput>
                        <Button
                          mode="contained"
                          onPress={() => {
                            requestDonor(
                              AuthenticationReducer.mobilenumber,
                              message,
                              lat,
                              long
                            );
                            console.log("pressed");
                            setDetailsAvailable(true);
                          }}
                        >
                          Send personal message
                        </Button>
                      </>
                    ) : (
                      <>
                        {donorResponseData.length === 1 &&
                        donorResponseData[0].isAccepted === 1 ? (
                          <Card>
                            <Card.Actions>
                              <Button>
                                This is your donor call at +91
                                {donorResponseData[0].donor}
                              </Button>
                            </Card.Actions>
                          </Card>
                        ) : (
                          <>
                            <Text>
                              We have made your request to{" "}
                              {donorResponseData.length} (donor)
                            </Text>
                          </>
                        )}
                      </>
                    )}
                  </View>
                </>
              )}
            </>
          ) : (
            <>
              <Card>
                <View style={styles.container}>
                  <Text style={{ fontSize: 20 }}>
                    Blood ({!bloodReducer.bloodReciever && <Text>Donate</Text>}
                    {bloodReducer.bloodReciever && <Text>Receive</Text>})
                  </Text>
                  <Switch
                    value={bloodReducer.bloodReciever}
                    onValueChange={() => {
                      dispatch(
                        setBloodRecieverOrDoner(!bloodReducer.bloodReciever)
                      );
                    }}
                  />
                </View>
                {!bloodReducer.bloodReciever && (
                  <Card>
                    <Text style={{ textAlign: "center" }}>
                      Whats your blood type ?
                    </Text>
                    <View style={styles.container}>
                      {bloodReducer.bloodType === 0 ? (
                        <>
                          <Chip
                            style={styles.chipSelected}
                            onPress={() => {
                              dispatch(setBloodType(0));
                            }}
                          >
                            <Text style={{ color: "white" }}>A+</Text>
                          </Chip>
                        </>
                      ) : (
                        <>
                          <Chip
                            style={styles.chip}
                            onPress={() => {
                              dispatch(setBloodType(0));
                            }}
                          >
                            <Text>A+</Text>
                          </Chip>
                        </>
                      )}
                      {bloodReducer.bloodType === 1 ? (
                        <>
                          <Chip
                            style={styles.chipSelected}
                            onPress={() => {
                              dispatch(setBloodType(1));
                            }}
                          >
                            <Text style={{ color: "white" }}>A-</Text>
                          </Chip>
                        </>
                      ) : (
                        <>
                          <Chip
                            style={styles.chip}
                            onPress={() => {
                              dispatch(setBloodType(1));
                            }}
                          >
                            <Text>A-</Text>
                          </Chip>
                        </>
                      )}
                      {bloodReducer.bloodType === 2 ? (
                        <>
                          <Chip
                            style={styles.chipSelected}
                            onPress={() => {
                              dispatch(setBloodType(2));
                            }}
                          >
                            <Text style={{ color: "white" }}>O+</Text>
                          </Chip>
                        </>
                      ) : (
                        <>
                          <Chip
                            style={styles.chip}
                            onPress={() => {
                              dispatch(setBloodType(2));
                            }}
                          >
                            <Text>O+</Text>
                          </Chip>
                        </>
                      )}
                      {bloodReducer.bloodType === 3 ? (
                        <>
                          <Chip
                            style={styles.chipSelected}
                            onPress={() => {
                              dispatch(setBloodType(3));
                            }}
                          >
                            <Text style={{ color: "white" }}>O-</Text>
                          </Chip>
                        </>
                      ) : (
                        <>
                          <Chip
                            style={styles.chip}
                            onPress={() => {
                              dispatch(setBloodType(3));
                            }}
                          >
                            <Text>O-</Text>
                          </Chip>
                        </>
                      )}
                    </View>
                    <View style={styles.container}>
                      <View style={styles.container}>
                        {bloodReducer.bloodType === 4 ? (
                          <>
                            <Chip
                              style={styles.chipSelected}
                              onPress={() => {
                                dispatch(setBloodType(4));
                              }}
                            >
                              <Text style={{ color: "white" }}>B+</Text>
                            </Chip>
                          </>
                        ) : (
                          <>
                            <Chip
                              style={styles.chip}
                              onPress={() => {
                                dispatch(setBloodType(4));
                              }}
                            >
                              <Text>B+</Text>
                            </Chip>
                          </>
                        )}
                        {bloodReducer.bloodType === 5 ? (
                          <>
                            <Chip
                              style={styles.chipSelected}
                              onPress={() => {
                                dispatch(setBloodType(5));
                              }}
                            >
                              <Text style={{ color: "white" }}>B-</Text>
                            </Chip>
                          </>
                        ) : (
                          <>
                            <Chip
                              style={styles.chip}
                              onPress={() => {
                                dispatch(setBloodType(5));
                              }}
                            >
                              <Text>B-</Text>
                            </Chip>
                          </>
                        )}
                        {bloodReducer.bloodType === 6 ? (
                          <>
                            <Chip
                              style={styles.chipSelected}
                              onPress={() => {
                                dispatch(setBloodType(6));
                              }}
                            >
                              <Text style={{ color: "white" }}>AB+</Text>
                            </Chip>
                          </>
                        ) : (
                          <>
                            <Chip
                              style={styles.chip}
                              onPress={() => {
                                dispatch(setBloodType(6));
                              }}
                            >
                              <Text>AB+</Text>
                            </Chip>
                          </>
                        )}
                        {bloodReducer.bloodType === 7 ? (
                          <>
                            <Chip
                              style={styles.chipSelected}
                              onPress={() => {
                                dispatch(setBloodType(7));
                              }}
                            >
                              <Text style={{ color: "white" }}>AB-</Text>
                            </Chip>
                          </>
                        ) : (
                          <>
                            <Chip
                              style={styles.chip}
                              onPress={() => {
                                dispatch(setBloodType(7));
                              }}
                            >
                              <Text>AB-</Text>
                            </Chip>
                          </>
                        )}
                      </View>
                    </View>
                    <View>
                      {/* planning to add date time here */}
                      <Button mode="contained" onPress={showDatepicker}>
                        Recovered on{" "}
                        {JSON.stringify(date).split("T")[0].slice(1)}{" "}
                        (YYYY-MM-DD)
                      </Button>
                      {show && (
                        <DateTimePicker
                          testID="dateTimePicker"
                          value={date}
                          mode={mode}
                          is24Hour={true}
                          display="default"
                          maximumDate={new Date(Date.now() - 86400000)}
                          onChange={onChange}
                        />
                      )}

                      <TextInput
                        label={"Distance you are willing to travel (Kms)"}
                        keyboardType="number-pad"
                        maxLength={4}
                        onChangeText={(value) => {
                          dispatch(setDistanceWillingTotravel(value));
                        }}
                        value={bloodReducer.distanceWillingToTravel}
                      ></TextInput>
                      <View>
                        <Text style={styles.paragraph}>{text}</Text>
                      </View>
                    </View>
                  </Card>
                )}
                {bloodReducer.bloodReciever && (
                  <Card>
                    <Text style={{ textAlign: "center" }}>
                      Whats your blood type ?
                    </Text>
                    <View style={styles.container}>
                      {bloodReducer.bloodType === 0 ? (
                        <>
                          <Chip
                            style={styles.chipSelected}
                            onPress={() => {
                              dispatch(setBloodType(0));
                            }}
                          >
                            <Text style={{ color: "white" }}>A+</Text>
                          </Chip>
                        </>
                      ) : (
                        <>
                          <Chip
                            style={styles.chip}
                            onPress={() => {
                              dispatch(setBloodType(0));
                            }}
                          >
                            <Text>A+</Text>
                          </Chip>
                        </>
                      )}
                      {bloodReducer.bloodType === 1 ? (
                        <>
                          <Chip
                            style={styles.chipSelected}
                            onPress={() => {
                              dispatch(setBloodType(1));
                            }}
                          >
                            <Text style={{ color: "white" }}>A-</Text>
                          </Chip>
                        </>
                      ) : (
                        <>
                          <Chip
                            style={styles.chip}
                            onPress={() => {
                              dispatch(setBloodType(1));
                            }}
                          >
                            <Text>A-</Text>
                          </Chip>
                        </>
                      )}
                      {bloodReducer.bloodType === 2 ? (
                        <>
                          <Chip
                            style={styles.chipSelected}
                            onPress={() => {
                              dispatch(setBloodType(2));
                            }}
                          >
                            <Text style={{ color: "white" }}>O+</Text>
                          </Chip>
                        </>
                      ) : (
                        <>
                          <Chip
                            style={styles.chip}
                            onPress={() => {
                              dispatch(setBloodType(2));
                            }}
                          >
                            <Text>O+</Text>
                          </Chip>
                        </>
                      )}
                      {bloodReducer.bloodType === 3 ? (
                        <>
                          <Chip
                            style={styles.chipSelected}
                            onPress={() => {
                              dispatch(setBloodType(3));
                            }}
                          >
                            <Text style={{ color: "white" }}>O-</Text>
                          </Chip>
                        </>
                      ) : (
                        <>
                          <Chip
                            style={styles.chip}
                            onPress={() => {
                              dispatch(setBloodType(3));
                            }}
                          >
                            <Text>O-</Text>
                          </Chip>
                        </>
                      )}
                    </View>
                    <View style={styles.container}>
                      <View style={styles.container}>
                        {bloodReducer.bloodType === 4 ? (
                          <>
                            <Chip
                              style={styles.chipSelected}
                              onPress={() => {
                                dispatch(setBloodType(4));
                              }}
                            >
                              <Text style={{ color: "white" }}>B+</Text>
                            </Chip>
                          </>
                        ) : (
                          <>
                            <Chip
                              style={styles.chip}
                              onPress={() => {
                                dispatch(setBloodType(4));
                              }}
                            >
                              <Text>B+</Text>
                            </Chip>
                          </>
                        )}
                        {bloodReducer.bloodType === 5 ? (
                          <>
                            <Chip
                              style={styles.chipSelected}
                              onPress={() => {
                                dispatch(setBloodType(5));
                              }}
                            >
                              <Text style={{ color: "white" }}>B-</Text>
                            </Chip>
                          </>
                        ) : (
                          <>
                            <Chip
                              style={styles.chip}
                              onPress={() => {
                                dispatch(setBloodType(5));
                              }}
                            >
                              <Text>B-</Text>
                            </Chip>
                          </>
                        )}
                        {bloodReducer.bloodType === 6 ? (
                          <>
                            <Chip
                              style={styles.chipSelected}
                              onPress={() => {
                                dispatch(setBloodType(6));
                              }}
                            >
                              <Text style={{ color: "white" }}>AB+</Text>
                            </Chip>
                          </>
                        ) : (
                          <>
                            <Chip
                              style={styles.chip}
                              onPress={() => {
                                dispatch(setBloodType(6));
                              }}
                            >
                              <Text>AB+</Text>
                            </Chip>
                          </>
                        )}
                        {bloodReducer.bloodType === 7 ? (
                          <>
                            <Chip
                              style={styles.chipSelected}
                              onPress={() => {
                                dispatch(setBloodType(7));
                              }}
                            >
                              <Text style={{ color: "white" }}>AB-</Text>
                            </Chip>
                          </>
                        ) : (
                          <>
                            <Chip
                              style={styles.chip}
                              onPress={() => {
                                dispatch(setBloodType(7));
                              }}
                            >
                              <Text>AB-</Text>
                            </Chip>
                          </>
                        )}
                      </View>
                    </View>

                    <View>
                      <TextInput
                        label={"Hospital name with address"}
                        value={bloodReducer.hospitalName}
                        onChangeText={(value) => {
                          dispatch(setHospitalName(value));
                        }}
                      ></TextInput>
                    </View>
                    <View style={styles.container}>
                      <Text>Can you provide pickup and drop</Text>
                      <Switch
                        value={bloodReducer.pickUpDrop}
                        onValueChange={() => {
                          dispatch(
                            setPickUpDropStatus(!bloodReducer.pickUpDrop)
                          );
                        }}
                      />
                      <Text>
                        ({bloodReducer.pickUpDrop && <Text>Yes I can</Text>}
                        {!bloodReducer.pickUpDrop && <Text>No I can't</Text>})
                      </Text>
                    </View>
                    {/* <ImageButton></ImageButton> */}
                    <View>
                      <Text style={styles.paragraph}>{text}</Text>
                    </View>
                  </Card>
                )}
                <Card.Actions>
                  <Button
                    style={{ width: "100%" }}
                    mode="contained"
                    onPress={async () => {
                      let response = await saveBloodInformation(
                        bloodReducer,
                        AuthenticationReducer.mobilenumber,
                        date,
                        lat,
                        long
                      );

                      if (response === true) {
                        dispatch(setDetailsAvailableBlood(true));
                      } else {
                        Alert.alert(
                          "Disclaimer",
                          "We need location to find the nearest donors/patients please share them with us"
                        );
                        try {
                          let {
                            status,
                          } = await Location.requestForegroundPermissionsAsync();
                          if (status !== "granted") {
                            setErrorMsg(
                              "Permission to access location was denied"
                            );
                            return;
                          }
                          let location = await Location.getCurrentPositionAsync(
                            {}
                          );
                          setLocation(location);
                        } catch (e) {}
                      }
                      // Alert.alert(
                      //   "Please reopen the app",
                      //   "please remove app from background and reopen the app",
                      //   [
                      //     {
                      //       text: "OK",
                      //       onPress: () => {
                      //         BackHandler.exitApp();
                      //       },
                      //     },
                      //   ]
                      // );
                    }}
                  >
                    Save
                  </Button>
                </Card.Actions>
              </Card>
            </>
          )}
        </ScrollView>
      ) : (
        <>
          <Text>
            We have processed your request please give us some time we will
            notify you
          </Text>
        </>
      )}
    </View>
  );
}

export function mapToState(state) {
  return state;
}

export default connect(mapToState)(Blood);

const styles = StyleSheet.create({
  chip: { height: 50, marginLeft: 10, marginRight: 10 },
  container: { flexDirection: "row", justifyContent: "center" },
  choiceButton: { width: "50%", padding: 5, margin: 1 },
  chipSelected: {
    height: 50,
    backgroundColor: "red",
    marginLeft: 10,
    marginRight: 10,
  },
  container: { flexDirection: "row", justifyContent: "center", padding: 10 },
  paragraph: { fontSize: 15 },
});
