import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button,ToastAndroid, KeyboardAvoidingView, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

function Master({ navigation }) {
  return (
    <KeyboardAvoidingView
     style={styles.container}
     behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Choose the behavior based on the platform
     >
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Create a Master Pass!</Text>
      <View style={styles.top}>
        <TextInput
          placeholder='Create a Master Pass!'
          style={styles.textInput}
        />
      </View>
      <View style={styles.bottom}>
        <TextInput
          placeholder='Confirm Master Pass!'
          style={styles.textInput}
        />
      </View>
      <View style={styles.button}>
        <Button title='Save and Continue!' onPress={() => navigation.navigate('Login')} color="#841FFF" />
      </View>
    </KeyboardAvoidingView>
  );
}

function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 50 }}>Login Here!</Text>
      <View style={styles.topper}>
        <TextInput
          placeholder='Enter your Master Pass!'
          style={styles.textInput}
        />
      </View>
      <View style={styles.buttonTopper}>
        <Button title='HeyClickMe!' onPress={() => navigation.navigate("CreateAccount")} color="#841FFF" />
      </View>
    </View>
  );
}
function CreateAccount({navigation}) {
  const [tx1, setTx1] = useState('');
  const [tx2, setTx2] = useState('');
  const [tx3, setTx3] = useState('');
  const [tx4, setTx4] = useState('');
  const [tx5, setTx5] = useState('');
  const [tx6, setTx6] = useState('');
  const [tx7, setTx7] = useState('');
  const [tx8, setTx8] = useState('');
  const [tx9, setTx9] = useState('');

  const handleButtonPress = () => {
    ToastAndroid.show('HeyClickMe!', ToastAndroid.SHORT);
  };
  const [selectedValue,setSelectedValue]=useState("options1");
const barf =()=> "Heyya!";
  const handleSpinnerSelection = (selectedItem) => {
    switch (selectedItem) {
      case 'Change Master Password':
        // Implement the action for 'Change Master Password'
        break;
      case 'Settings':
        // Implement the action for 'Settings'
        break;
      case 'Exit':
        // Implement the action for 'Exit'
        break;
      default:
        break;
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
    >
       <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Option 1" value="option1" />
          <Picker.Item label="Option 2" value="option2" />
          <Picker.Item label="Option 3" value="option3" />
        </Picker>
      </View>
      <View style={styles.textContainer}>
      <TextInput
          style={{flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            width: 400,
          }}
          onChangeText={(text) => setTx1(text)}
          value={tx1}
        />
        <TextInput
          style={styles.textInputCA}
          onChangeText={(text) => setTx2(text)}
          value={tx2}
        />
        <TextInput
          style={styles.textInputCA}
          onChangeText={(text) => setTx3(text)}
          value={tx3}
        />
        <TextInput
          style={styles.textInputCA}
          onChangeText={(text) => setTx4(text)}
          value={tx4}
        />
        <TextInput
          style={styles.textInputCA}
          onChangeText={(text) => setTx5(text)}
          value={tx5}
        />
        <TextInput
          style={styles.textInputCA}
          onChangeText={(text) => setTx6(text)}
          value={tx6}
        />
        <TextInput
          style={styles.textInputCA}
          onChangeText={(text) => setTx7(text)}
          value={tx7}
        />
        <TextInput
          style={styles.textInputCA}
          onChangeText={(text) => setTx8(text)}
          value={tx8}
        />
        <TextInput
          style={styles.textInputCA}
          onChangeText={(text) => setTx9(text)}
          value={tx9}
        />
      </View>
      <View style={styles.buttonContainer}>
      <View style={styles.buttonTopper}>
        <Button title='Save' onPress = {() => navigation.navigate("SaveAccount")} color="#841FFF" />
      </View>
</View>

      {/* Add Spinner component for the dropdown and handle its selection */}
    </ScrollView>

  );
}

function SaveAccount() {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 50 }}>Enter account details</Text>
      <View style={styles.topper}>
        <TextInput
          placeholder=' title... '
          style={styles.textInput}
        />
      </View>
      <View style={styles.topper}>
        <TextInput
          placeholder=' account name... '
          style={styles.textInput}
        />
      </View>
      <View style={styles.topper}>
        <TextInput
          placeholder=' username... '
          style={styles.textInput}
        />
      </View>
      <View style={styles.topper}>
        <TextInput
          placeholder=' password... '
          style={styles.textInput}
        />
      </View>
      <View style={styles.buttonTop}>
        <Button title='Save' color="#841FFF" />
      </View>
    </View>
  );
}



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Master} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CreateAccount" component={CreateAccount}/>
        <Stack.Screen name="SaveAccount" component={SaveAccount} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewContent: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    color:"fff",
  },
  button: {
    height: 40,
    width: 180,
    marginLeft: 200,
    marginTop: 50,
    borderRadius: 40,
  },
  buttonTopper: {
    height: 40,
    width: 180,
    marginLeft: 200,
    marginTop: 50,
    borderRadius: 40,
    marginBottom:50,
  },
  buttonTop: {
    height: 40,
    width: 100,
    marginLeft: 200,
    marginTop: 50,
    borderRadius: 40,
    marginBottom:50,
  },
  textInput: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
  },
  textInputCA: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
  },
  top: {
    flex: 0.17,
    backgroundColor: '#fff',
    borderColor: '#9C27B0',
    borderRadius: 10,
    borderWidth: 5,
    marginTop: 70,
    marginLeft: 20,
    marginRight: 20,
    borderLeftRadius: 20,
    borderRightRadius: 20,
  },
  bottom: {
    flex: 0.17,
    backgroundColor: '#fff',
    borderColor: '#9C27B0',
    borderRadius: 10,
    borderWidth: 5,
    marginTop: 90,
    marginLeft: 20,
    marginRight: 20,
    borderLeftRadius: 20,
    borderRightRadius: 20,
    padding: 0,
  },
  floatingButton: {
    flex:1,
    position: 'absolute',
    bottom: 0,
    right: 20, // Adjust the right value as needed
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#841FFF',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5, // Adds a shadow to the button (Android only)
  },
  topper: {
    flex: 0.17,
    backgroundColor: '#fff',
    borderColor: '#9C27B0',
    borderRadius: 10,
    borderWidth: 5,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom:30,
    borderLeftRadius: 20,
    borderRightRadius: 20,
  },
  pickerContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    elevation: 3,
    zIndex: 1,
  },
});
