import * as React from "react";
import { Alert, ScrollView } from "react-native";
import { Button, Card, Divider, Paragraph, Title } from "react-native-paper";
import { connect } from "react-redux";
import { Logout } from "../actions/AuthenticationActions";
import { userLogout, userProfileInformation } from "../Api/ApiActions";

function Profile(props) {
  const { AuthenticationReducer, dispatch } = props;

  const [resp, setResponse] = React.useState({});
  React.useEffect(async () => {
    let response = await userProfileInformation(
      AuthenticationReducer.mobilenumber
    );
    setResponse(response);
  }, []);

  return (
    <ScrollView>
      <Card>
        <Card.Content>
          <Title>Name: {resp.name}</Title>
          <Title>Email: {resp.email}</Title>
          <Title>Gender: {resp.gender === 1 ? "Male" : "Female"}</Title>
          <Title>Location: {resp.location} </Title>
          <Title>Mobile number: {resp.mobileNumber}</Title>
          <Title>Registerd On: {resp.registerdOn}</Title>
          <Title>Age: {resp.age}</Title>
        </Card.Content>
        <Card.Actions>
          <Button
            mode="contained"
            onPress={() => {
              userLogout(AuthenticationReducer.mobilenumber);
              dispatch(Logout());
              Alert.alert("Logout Inetiated relaunch app to login again");
            }}
            style={{ width: "100%" }}
          >
            Logout
          </Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
}

export function mapToState(state) {
  return state;
}

export default connect(mapToState)(Profile);
