import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';

function Home() {

    return (

        <>
            <Header/>
            <BottomNav/>
        </>


    );
}




export default Home