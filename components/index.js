
import React from 'react';
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { increase } from '../actions';

function Welcome(props) {

  const {count} = props;
  return (
    <View style={{justifyContent: 'center', alignContent: 'center', padding: 10, marginTop: 20}}>

  <Text>Welcome {count}</Text>
  <Button title={"Awesome"}
  onPress={()=>{
      props.dispatch(increase())
  }}
  ></Button>
  </View>
  );
}

export function mapToState(state){
    return state.counterReducer
}
export default connect(mapToState)(Welcome)