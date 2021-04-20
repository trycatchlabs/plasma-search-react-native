import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput, RadioButton,Text } from 'react-native-paper';
import Header from '../components/Header';
import { useState } from 'react';


function Register() {
    const [mobileNumber, setMobileNumber] = useState("");
    const [password, setPassword] = useState("");
    const [value, setValue] = React.useState('Male');

    return (
        <View>
            <Header />

            <TextInput
                placeholder={"Name"}
                onChangeText={(nextState) => {
                    setMobileNumber(nextState)
                }}
            ></TextInput>
            <TextInput
                placeholder={"Email"}
                onChangeText={(nextState) => {
                    setMobileNumber(nextState)
                }}
                keyboardType='email-address'
            ></TextInput>
            <TextInput
                placeholder={"Location"}
                onChangeText={(nextState) => {
                    setMobileNumber(nextState)
                }}
            ></TextInput>
            <RadioButton.Group
            onValueChange={newValue => setValue(newValue)} value={value}>
                <View style={{justifyContent: "space-between"}}>
                    <Text>Male</Text>
                    <RadioButton value="Male" />
                    <Text>Female</Text>
                    <RadioButton value="Female" />
                </View>
            </RadioButton.Group>
            <TextInput
                placeholder={"Age"}
                onChangeText={(nextState) => {
                    setMobileNumber(nextState)
                }}
                keyboardType='number-pad'
                maxLength={2}

            ></TextInput>


            <TextInput
                placeholder={"Mobile number"}
                onChangeText={(nextState) => {
                    setMobileNumber(nextState)
                }}
                keyboardType='number-pad'
                maxLength={10}

            ></TextInput>

            <TextInput
                secureTextEntry={true}
                placeholder={"Password"}
                onChangeText={(nextStatePass) => {
                    setPassword(nextStatePass)
                }}
            ></TextInput>
            <Button
                icon="login"
                mode="contained"
                onPress={() => console.log("login")}>
                Register
            </Button>
            <Button
                mode="outlined"
                onPress={() => { console.log("forgot") }
                }>
                Already a user
            </Button>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        alignItems: 'center'
    }
});


export default Register