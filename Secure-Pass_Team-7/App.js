import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight:'bold',fontSize:18}} >Create a Master Pass!</Text>
      <View style={styles.top}>      
    <TextInput placeholder='    Create a Master Pass!'
    style={styles.textInput}>      
      <StatusBar style="auto" />
    </TextInput>
    </View>

    <View style={styles.bottom}>
          <TextInput placeholder='    Confirm Master Pass!'
            style={styles.textInput}>      
            <StatusBar style="auto" />
          </TextInput>
        </View> 
        <View style={styles.button}>
          <Button title='Save and Continue'
          onPress={() => Alert.alert('Dude, relax eh')}  
          color="#841FFF"></Button>  
          </View>    
    </View>
    );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    button:{
      height:40, 
      width:180,
      marginLeft:200,
      marginTop:50,
      borderRadius:40,
      
    },
    textInput:{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width:350,
    },
  top: {
    flex: 0.17,
    backgroundColor: '#fff',
    borderColor:"#9C27B0",
    borderRadius:10,
    borderWidth: 5,
    marginTop:70,
    marginLeft:20,
    marginRight:20,
    borderLeftRadius: 20,
    borderRightRadius: 20,
  },
  bottom: {
    flex: 0.17,
    backgroundColor: '#fff',
    borderColor:"#9C27B0",
    borderRadius:10,
    borderWidth: 5,
    marginTop:90,
    marginLeft:20,
    marginRight:20,
    borderLeftRadius: 20,
    borderRightRadius: 20,
  },
});

