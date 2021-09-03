import React from 'react';
import { Text, View ,StyleSheet,TouchableOpacity} from 'react-native';

export default class MainScreen extends React.Component {
  goToHomeScreen=()=>{
   this.props.navigation.navigate("HomeScreen")
  }
  render() {
   return (
     <View style={styles.container}>
      
      <TouchableOpacity style = {styles.startButton} onPress = {this.goToHomeScreen }>
      <Text style = {styles.startButtonText}> 
      Back
      </Text>
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
        width: 100,
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
  