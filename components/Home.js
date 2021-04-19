
import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import Screen from '../screens/Screen';


function Home(props) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <View style={{backgroundColor: "#e06666"}}>
      <SafeAreaView style={{height: "91.3%"}}>
      <ScrollView>
        <Screen index={selectedIndex}/>
      </ScrollView>
      </SafeAreaView>
   <BottomNavigation
   style={styles.bottom}
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}>
      <BottomNavigationTab title='MY INFO'/>
      <BottomNavigationTab title='SEARCH DONER'/>
      <BottomNavigationTab title='NOTIFICATION'/>
    </BottomNavigation>
  </View>
  );
}

export function mapToState(state){
    return state
}

export default connect(mapToState)(Home)

const styles = StyleSheet.create({

});