import React from 'react';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import { connect } from "react-redux";



function Notification(props) {

    const { index } = props;

    return (

        <View >
            <Text>this is Notification page page</Text>
          
        </View>

    )
}


export const mapToState = (state) => {
    return state
}

export default connect(mapToState)(Notification);

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
