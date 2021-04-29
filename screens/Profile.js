import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { Alert, ScrollView } from "react-native";
import { Button, Card, Divider, Paragraph, Title } from "react-native-paper";
import { connect } from "react-redux";
import { Logout } from "../actions/AuthenticationActions";
import { userLogout, userProfileInformation } from "../Api/ApiActions";
import Login from "./Login";
const Stack = createStackNavigator();

function Profile(props) {
  const { AuthenticationReducer, dispatch, navigation } = props;
  console.log(props.route);

  const [resp, setResponse] = React.useState(null);

  const [data, dataSet] = React.useState(false);

  React.useEffect(() => {
    userProfileInformation(AuthenticationReducer.mobilenumber).then(
      (response) => {
        setResponse(response);

        dataSet(true);
      }
    );
  }, []);

  return (
    <ScrollView>
      {data && (
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
                Alert.alert(
                  "Logout Successful",
                  "Logout Inetiated relaunch app to login again"
                );
              }}
              style={{ width: "100%" }}
            >
              Logout
            </Button>
          </Card.Actions>
        </Card>
      )}
    </ScrollView>
  );
}

export function mapToState(state) {
  return state;
}

export default connect(mapToState)(Profile);
