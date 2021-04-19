import React from 'react';
import { View,ImageBackground, StyleSheet} from 'react-native';
import { connect } from "react-redux";
import { Input, Button } from '@ui-kitten/components';
import { useState } from 'react';



function Login(props){

const [value,setValues] = useState("")
return(
        <ImageBackground 
        source={require("../assets/background.jpeg")}
        style={{width: '100%', height: '100%'}}
        >
    
    <View style={styles.container}>
        <Input
        keyboardType='number-pad'
      placeholder='Enter Your Mobile Number'
      value={value}
      onChangeText={(nextValue) => {
          setValues(nextValue)
      }
    }
        />

<Button status='primary' style={styles.button}>
      GET OTP
        </Button>
        </View>
    </ImageBackground>
    
)
}


export const mapToState = (state) =>{
    return state
}

export default connect(mapToState)(Login);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
      },
    button: {
      margin: 2,
      width: "100%",
      marginTop: 10
    },
    controlContainer: {
      borderRadius: 4,
      margin: 2,
      padding: 6,
      justifyContent: 'center',
      backgroundColor: '#3366FF',
    },
  });
  