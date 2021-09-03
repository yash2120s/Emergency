import React from 'react';
import { Text, View } from 'react-native';

export default class HelpScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>
            Press the Start Button   
          </Text>

          <Text>  
            Now Enter the Phone Number In Input Box
          </Text>
       
          <Text>  
            Press Sumbit Button
          </Text>
       
        </View>
      );
    }
  }