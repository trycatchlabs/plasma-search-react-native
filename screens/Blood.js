import * as React from "react";
import { useState } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableHighlight,
  Modal,
  Image,
} from "react-native";
import { Avatar, Card, Title, Paragraph, Portal } from "react-native-paper";
import { Button, Text, TextInput, Chip, Switch } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import { connect } from "react-redux";
import Header from "../components/Header";
import ImageButton from "../components/ImageButton";
import {
  setBloodRecieverOrDoner,
  setBloodType,
  setRecoveryDate,
  setDistanceWillingTotravel,
  setHospitalName,
  setPickUpDropStatus,
  setDetailsAvailable,
} from "../actions/bloodActions";

function Blood(props) {
  const [cardurl, setCardUrl] = useState("");
  const [visible, setVisible] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [mode, setMode] = React.useState("date");

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const [date, setDate] = useState(new Date());
  const LeftContent = (props) => <Avatar.Icon {...props} icon="account" />;

  const { bloodReducer, dispatch } = props;

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
        {bloodReducer.detailsAvailable ? (
          <>
            {bloodReducer.bloodReciever === false ? (
              <>
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
                      <Image
                        style={{ height: "100%", width: "100%" }}
                        source={{ uri: "https://picsum.photos/700" }}
                      />
                    </Modal>
                  </Portal>
                </View>
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
                      setVisible(true);
                    }}
                  >
                    <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
                  </TouchableHighlight>
                  <Card.Actions>
                    <Button>Accept</Button>
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
            <Card>
              <View style={styles.container}>
                <Text style={{ fontSize: 20 }}>
                  Blood ({!bloodReducer.bloodReciever && <Text>Donate</Text>}
                  {bloodReducer.bloodReciever && <Text>Recieve</Text>})
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
                  <Text>Blood type</Text>
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
                        maximumDate={new Date(Date.now() - 86400000)}
                        onChange={onChange}
                      />
                    )}

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
                      onChangeText={(value) => {
                        dispatch(setDistanceWillingTotravel(value));
                      }}
                      value={bloodReducer.distanceWillingToTravel}
                    ></TextInput>
                  </View>

                  <ImageButton></ImageButton>
                </Card>
              )}
              {bloodReducer.bloodReciever && (
                <Card>
                  <Text>Blood type</Text>
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
                      label={"Hospital Name & address"}
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
                        dispatch(setPickUpDropStatus(!bloodReducer.pickUpDrop));
                      }}
                    />
                    <Text>
                      ({bloodReducer.pickUpDrop && <Text>Yes I Can</Text>}
                      {!bloodReducer.pickUpDrop && <Text>No I can't</Text>})
                    </Text>
                  </View>
                  <ImageButton></ImageButton>
                </Card>
              )}
              <Card.Actions>
                <Button
                  style={{ width: "100%" }}
                  mode="contained"
                  onPress={() => {
                    dispatch(setRecoveryDate(date));
                    dispatch(setDetailsAvailable(true));
                  }}
                >
                  Save
                </Button>
              </Card.Actions>
            </Card>
          </>
        )}
      </ScrollView>
    </View>
  );
}

export function mapToState(state) {
  return state;
}

export default connect(mapToState)(Blood);

const styles = StyleSheet.create({
  chip: { height: 50 },
  container: { flexDirection: "row", justifyContent: "center" },
  choiceButton: { width: "50%", padding: 5, margin: 1 },
  chipSelected: { height: 50, backgroundColor: "red" },
  container: { flexDirection: "row", justifyContent: "center", padding: 10 },
});
