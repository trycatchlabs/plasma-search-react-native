import * as React from 'react'
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Divider, RadioButton, Text, TextInput } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

function Blood() {

    const [bloodDonor, setBloodDonor] = useState(false);
    const [bloodPatient, setBloodPatient] = useState(false);
    const [value, setValue] = React.useState('0');
    const [text, setText] = React.useState('');
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
      
    };
  
    const showDatepicker = () => {
      showMode('date');
      console.log(date)
    };
  
  

    return (
        <View>
            <ScrollView>
                {bloodDonor === false && bloodPatient === false && (
                    <>
                        <Button icon="water" mode="contained" onPress={() => setBloodDonor(true)}>
                            Donor
                        </Button>
                        <Divider />
                        <Divider />
                        <Button icon="water" mode="contained" onPress={() => setBloodPatient(true)}>
                            Patient
                       </Button>
                    </>
                )}

                {bloodDonor === true && (

                    <>
                        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>

                            <Text>A+</Text>
                            <RadioButton value="0" />
                            <Text>A-</Text>
                            <RadioButton value="1" />
                            <Text>B+</Text>
                            <RadioButton value="2" />
                            <Text>B-</Text>
                            <RadioButton value="3" />
                            <Text>O+</Text>
                            <RadioButton value="4" />
                            <Text>O-</Text>
                            <RadioButton value="5" />
                            <Text>AB+</Text>
                            <RadioButton value="6" />
                            <Text>AB-</Text>
                            <RadioButton value="7" />


                        </RadioButton.Group>
                      
      <View>
        <Button mode='contained' onPress={showDatepicker} >Recovered on</Button>
       
      </View>
  
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
  
                        

                    </>
                )}

                {bloodPatient === true && (
                    <>
                        <Button icon="water" mode="contained" onPress={() => setBloodDonor(true)}>
                            Donor
                     </Button>
                        <Divider />
                        <Divider />
                        <Button icon="water" mode="contained" onPress={() => setBloodPatient(true)}>

                        </Button>
                    </>
                )}


            </ScrollView>
        </View>

    )

}


export default Blood;