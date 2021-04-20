import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import Header from '../components/Header';
import { useState } from 'react';


function Register() {
    const [mobileNumber, setMobileNumber] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View>
            <Header />
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
                onPress={() => console.log("forgot")}>
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