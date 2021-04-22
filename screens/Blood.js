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
import {
  Button,
  Divider,
  RadioButton,
  Text,
  TextInput,
  Chip,
} from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import { connect } from "react-redux";

function Blood(props) {
  const [cardurl, setCardUrl] = useState("");
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const [date, setDate] = useState(new Date());
  const LeftContent = (props) => <Avatar.Icon {...props} icon="account" />;

  const { bloodReducer } = props;

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
      </ScrollView>
    </View>
  );
}

export function mapToState(state) {
  return state;
}

export default connect(mapToState)(Blood);

const styles = StyleSheet.create({
  chip: { width: 69, height: 60 },
  container: { flexDirection: "row", justifyContent: "center" },
});
