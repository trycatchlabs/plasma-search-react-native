import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';


function Header() {
    return (
        <Appbar.Header>
            <Appbar.Content style={styles.header} title="Covaid" />
        </Appbar.Header>
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


export default Header