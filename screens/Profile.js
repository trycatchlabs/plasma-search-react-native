import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { Alert, Linking, ScrollView } from "react-native";
import {
  Button,
  Card,
  DataTable,
  Divider,
  Paragraph,
  Title,
} from "react-native-paper";
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
        <>
          <DataTable>
            <DataTable.Row>
              <DataTable.Cell>Name</DataTable.Cell>
              <DataTable.Cell>{resp.name}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Email</DataTable.Cell>
              <DataTable.Cell>{resp.email}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Gender</DataTable.Cell>
              <DataTable.Cell>
                {resp.gender === 1 ? "Male" : "Female"}
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Location</DataTable.Cell>
              <DataTable.Cell>{resp.location}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Mobile number</DataTable.Cell>
              <DataTable.Cell>{resp.mobileNumber}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Registerd On</DataTable.Cell>
              <DataTable.Cell>{resp.registerdOn}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Age</DataTable.Cell>
              <DataTable.Cell>{resp.age}</DataTable.Cell>
            </DataTable.Row>
          </DataTable>
          <Card>
            <Card.Actions>
              <Button
                mode="contained"
                onPress={() => {
                  Linking.openURL("https://forms.gle/YRPctCKRZGXLSczq7");
                }}
                style={{ width: "100%" }}
              >
                report an incident / feedback
              </Button>
            </Card.Actions>
            <Card.Actions>
              <Button
                mode="contained"
                onPress={() => {
                  userLogout(AuthenticationReducer.mobilenumber);
                  dispatch(Logout());
                  Alert.alert(
                    "Logout Successful",
                    "Logout initiate relaunch app to login again"
                  );
                }}
                style={{ width: "100%" }}
              >
                Logout
              </Button>
            </Card.Actions>
          </Card>
        </>
      )}
    </ScrollView>
  );
}

export function mapToState(state) {
  return state;
}

export default connect(mapToState)(Profile);
