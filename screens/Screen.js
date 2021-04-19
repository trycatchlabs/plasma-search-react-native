import React from 'react';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import { connect } from "react-redux";
import { Input, Button } from '@ui-kitten/components';
import { useState } from 'react';



function Screen(props) {

    const { index } = props;

    return (

        <View>
            {index === 0 && (
                
                <Text style={{fontSize: 50}}>this is where my info will be there and can be updated</Text>
            )}

            {index === 1 && (

<Text style={{fontSize: 50}}>this is the search page and its scrollable proofproofproofproofproofproofproofproofproofproofproofproofproofproofproofproofproofproofproofproofproofproofproof
proofproofproofproofproofproofproof
proofproofproofproofproofproof
proofproofproofproofproofproofproof
proofproofproofproofproofproofproof
proofproofproofproofproofproofproof
proofproofproofproofproofproofproof</Text>
            )}

            {index === 2 && (
                <Text style={{fontSize: 50}}>this is the notification page</Text>
            )}


        </View>

    )
}


export const mapToState = (state) => {
    return state
}

export default connect(mapToState)(Screen);

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
