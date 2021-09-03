import React from 'react';
import { Text, View ,StyleSheet,TouchableOpacity } from 'react-native';

export default class HomeScreen extends React.Component {
    
    goToMainScreen=()=>{
        this.props.navigation.navigate("MainScreen")
    }
    goToHelpScreen=()=>{
        this.props.navigation.navigate("HelpScreen")
    }

    render() {
      return (
        <View style={styles.container}>
          <TouchableOpacity style = {styles.startButton} onPress = {this.goToMainScreen}>
              <Text style = {styles.startButtonText}> Start </Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.startButton} onPress = {this.goToHelpScreen }>
              <Text style = {styles.startButtonText}> How To Use </Text>
          </TouchableOpacity>

        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    startButton:{
        backgroundColor: 'blue',
        width: 150,
        height:50,
        borderWidth: 1.5,
        
    },
    startButtonText:{
        padding:10,
        textAlign:"center",
        fontSize:20,
        fontWeight:"bold",
        color:"yellow"
     
    },
  });
  