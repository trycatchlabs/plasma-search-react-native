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
import { connect } from "react-redux";
import {
  setBloodRecieverOrDoner,
  setBloodType,
  setRecoveryDate,
  setDistanceWillingTotravel,
  setHospitalName,
  setPickUpDropStatus,
} from "../actions/bloodActions";

function Profile(props) {
  const [oxygenReciever, setOxygen] = React.useState(false);
  const [missReciever, setMiss] = React.useState(false);
  const [pickUp, setPickUp] = React.useState(false);
  const [oxygenGear, setOxygenGear] = React.useState(false);
  const [oxygenGearDeliver, setOxygenGearDeliver] = React.useState(false);

  const [date, setDate] = React.useState(new Date());
  const [mode, setMode] = React.useState("date");
  const [show, setShow] = React.useState(false);

  const { dispatch } = props;

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    dispatch(setRecoveryDate(currentDate));
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
          Blood ({props.bloodReciever && <Text>Donate</Text>}
          {!props.bloodReciever && <Text>Recieve</Text>})
        </Text>
        <Switch
          value={props.bloodReciever}
          onValueChange={() => {
            dispatch(setBloodRecieverOrDoner(!props.bloodReciever));
          }}
        />
      </View>
      {props.bloodReciever && (
        <Card>
          <Card.Title title="Blood Donation Details" />
          <Text>Blood type</Text>
          <View style={styles.container}>
            {props.bloodType === 0 ? (
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
            {props.bloodType === 1 ? (
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
            {props.bloodType === 2 ? (
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
            {props.bloodType === 3 ? (
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
              {props.bloodType === 4 ? (
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
              {props.bloodType === 5 ? (
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
              {props.bloodType === 6 ? (
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
              {props.bloodType === 7 ? (
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
            <TextInput
              label={"Date of Recovery DDMMYYYY Format"}
              keyboardType="number-pad"
              onChangeText={(value) => {
                dispatch(setRecoveryDate(value));
              }}
              value={props.recoveryDate}
            ></TextInput>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={props.recoveryDate}
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
              value={props.distanceWillingToTravel}
            ></TextInput>
          </View>

          <ImageButton></ImageButton>
        </Card>
      )}
      {!props.bloodReciever && (
        <Card>
          <Card.Title title="Blood Donation Details" />
          <Text>Blood type</Text>
          <View style={styles.container}>
            {props.bloodType === 0 ? (
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
            {props.bloodType === 1 ? (
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
            {props.bloodType === 2 ? (
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
            {props.bloodType === 3 ? (
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
              {props.bloodType === 4 ? (
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
              {props.bloodType === 5 ? (
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
              {props.bloodType === 6 ? (
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
              {props.bloodType === 7 ? (
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
              value={props.hospitalName}
              onChangeText={(value) => {
                dispatch(setHospitalName(value));
              }}
            ></TextInput>
          </View>
          <View style={styles.container}>
            <Text>Can you provide pickup and drop</Text>
            <Switch
              value={props.pickUpDrop}
              onValueChange={() => {
                dispatch(setPickUpDropStatus(!props.pickUpDrop));
              }}
            />
            <Text>
              ({props.pickUpDrop && <Text>Yes I Can</Text>}
              {!props.pickUpDrop && <Text>No I can't</Text>})
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

export function mapToState(state) {
  return state.bloodReducer;
}

export default connect(mapToState)(Profile);

const styles = StyleSheet.create({
  chip: { height: 50 },
  chipSelected: { height: 50, backgroundColor: "red" },
  container: { flexDirection: "row", justifyContent: "center", padding: 10 },
});
