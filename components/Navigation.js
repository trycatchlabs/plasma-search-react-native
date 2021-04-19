
import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';


function Navigation(props) {

  return (
    <View >
    <Text>hey how</Text>
  </View>
  );
}

export function mapToState(state){
    return state
}

export default connect(mapToState)(Navigation)