import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet,Alert, Text, View, TextInput, Button,ToastAndroid, KeyboardAvoidingView, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState,useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';

function Master({ navigation }) {
  const [masterPass, setMasterPass] = useState('');
  const [confirmMasterPass, setConfirmMasterPass] = useState('');
  

  const handleSaveAndContinue = () => {
    if (masterPass=== '' || confirmMasterPass=== '') {
      Alert.alert('Make sure you set a master password');
    } else if (masterPass !== confirmMasterPass) {
      Alert.alert('Wrong Password', 'The passwords do not match. Please try again.');
    } else {
      navigation.navigate('Login');
      AsyncStorage.setItem("maspass",JSON.stringify(masterPass));
    console.log(masterPass);
    }
  };

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
          secureTextEntry={true}
          value={masterPass}
          onChangeText={setMasterPass}
        />
      </View>
      <View style={styles.bottom}>
        <TextInput
          placeholder='Confirm Master Pass!'
          style={styles.textInput}
          secureTextEntry={true}
          value={confirmMasterPass}
          onChangeText={text => setConfirmMasterPass(text)}
        />
      </View>
      <View style={styles.button}>
        <Button title='Save and Continue!' onPress={handleSaveAndContinue} color="#841FFF" />
      </View>
    </KeyboardAvoidingView>
  );
}

function Login({ navigation }) {
  const [passo, setPasso] = useState('');
  const [pass, setPass] = useState('');

  useEffect(() => {
    const getPassword = async () => {
      try {
        const storedPass = await AsyncStorage.getItem('maspass');
        setPass(storedPass || ''); // If the password is null, set an empty string
      } catch (error) {
        // Handle errors, if any
        console.error(error);
      }
    };
  
    getPassword();
  }, []);
  

    
  const handleSaveButtonPress = () => {
    verify(passo);
    setPasso('');
  };

  function verify(passo) {
    if (pass == '"'+passo+'"') {
      navigation.navigate('CreateAccount');
    } else {
      ToastAndroid.show('Get Away, you brute!', ToastAndroid.LONG);
      console.log(typeof(passo));
      console.log(typeof(pass));
      console.log('"'+passo+'"');
      console.log(pass);
      console.log(pass == passo);
    }
  }
  
  

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 50 }}>Login Here!</Text>
      <View style={styles.topper}>
        <TextInput
          placeholder='Enter your Master Pass!'
          style={styles.textInput}
          value={passo}
          onChangeText={(text) => setPasso(text)} 
        />
      </View>
      <View style={styles.buttonTopper}>
        <Button title='HeyClickMe!' onPress={handleSaveButtonPress} color='#841FFF' />
      </View>
    </View>
  );
}



function CreateAccount({ navigation }) {
const tx1=AsyncStorage.getItem("tx1");
const tx2=AsyncStorage.getItem('tx2');
const tx3=AsyncStorage.getItem('tx3');
const tx4=AsyncStorage.getItem('tx4');
const tx5=AsyncStorage.getItem('tx5');
const tx6=AsyncStorage.getItem('tx6');
const tx7=AsyncStorage.getItem('tx7');
const tx8=AsyncStorage.getItem('tx8');
const tx9=AsyncStorage.getItem('tx9');
console.log(tx1);

const handleSaveButtonPress = () => {
  //saveData();
  navigation.pop();
  navigation.navigate("SaveAccount");
};


return (
  <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <View style={styles.textContainer}>
      <TextInput
        style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', width: 400 }}
        value={tx1}
      />
      <TextInput
        style={styles.textInputCA}
        value={tx2}
      />
      <TextInput
        style={styles.textInputCA}
        value={tx3}
      />
      <TextInput
        style={styles.textInputCA}
        value={tx4}
      />
      <TextInput
        style={styles.textInputCA}
        value={tx5}
      />
      <TextInput
        style={styles.textInputCA}
        value={tx6}
      />
      <TextInput
        style={styles.textInputCA}
        value={tx7}
      />
      <TextInput
        style={styles.textInputCA}
        value={tx8}
      />
      <TextInput
        style={styles.textInputCA}
        value={tx9}
      />
    </View>
    <View style={styles.buttonContainer}>
      <View style={styles.buttonTop}>
      <Button
            title='Save'
            onPress={handleSaveButtonPress}
            color='#841FFF'
          />
       </View>
    </View>
  </ScrollView>
);
}

function SaveAccount({ navigation }) {
  const [title, setTitle] = useState('');
  const [aname, setAname] = useState('');
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');

  const handleSaveButtonPress = () => {
    doi(title, aname, username, pass);
    navigation.navigate("CreateAccount");

    setTitle('');
    setAname('');
    setUsername('');
    setPass('');
  };

  function doi(tit, name, user, password) {
    if (tx1 == '') {
      AsyncStorage.setItem('tx1', (tit + '\n' + name + '\n' + user + '\n' + password));
    } else if (tx2 == '') {
      AsyncStorage.setItem('tx2', (tit + '\n' + name + '\n' + user + '\n' + password));
    } else if (tx3 == '') {
      AsyncStorage.setItem('tx3', (tit + '\n' + name + '\n' + user + '\n' + password));
    } else if (tx4 == '') {
      AsyncStorage.setItem('tx4', (tit + '\n' + name + '\n' + user + '\n' + password));
    } else if (tx5 == '') {
      setTx5(tit + '\n' + name + '\n' + user + '\n' + password);
      AsyncStorage.setItem('tx5', (tit + '\n' + name + '\n' + user + '\n' + password));
    } else if (tx6 == '') {
      setTx6(tit + '\n' + name + '\n' + user + '\n' + password);
      AsyncStorage.setItem('tx6', (tit + '\n' + name + '\n' + user + '\n' + password));
    } else if (tx7 == '') {
      setTx7(tit + '\n' + name + '\n' + user + '\n' + password);
      AsyncStorage.setItem('tx7', (tit + '\n' + name + '\n' + user + '\n' + password));
    } else if (tx8 == '') {
      setTx8(tit + '\n' + name + '\n' + user + '\n' + password);
      AsyncStorage.setItem('tx8', (tit + '\n' + name + '\n' + user + '\n' + password));
    } else if (tx9 == '') {
      setTx9(tit + '\n' + name + '\n' + user + '\n' + password);
      AsyncStorage.setItem('tx9', (tit + '\n' + name + '\n' + user + '\n' + password));
    }
  }

  var tx1=""; 
  var tx2="";
  var tx3="";
  var tx4="";
  var tx5="";
  var tx6="";
  var tx7="";
  var tx8="";
  var tx9="";

 // console.log(tx2);
  //console.log(tx3);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
        Enter account details
      </Text>
      <View style={styles.bottom1}>
        <TextInput
          placeholder=' title... '
          style={styles.textInput}
          value={title}
          onChangeText={setTitle}
        />
      </View>
      <View style={styles.bottom1}>
        <TextInput
          placeholder=' account name... '
          style={styles.textInput}
          value={aname}
          onChangeText={setAname}
        />
      </View>
      <View style={styles.bottom1}>
        <TextInput
          placeholder=' username... '
          style={styles.textInput}
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.bottom1}>
        <TextInput
          placeholder=' password... '
          style={styles.textInput}
          value={pass}
          onChangeText={setPass}
        />
      </View>
      <View style={styles.buttonTop}>
        <Button title='Save' onPress={handleSaveButtonPress} color='#841FFF' />
      </View>
    </KeyboardAvoidingView>
  );
}



function ChangeMaster({ navigation}) {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 50 }}>Change Master Password</Text>
      <View style={styles.topper}>
        <TextInput
          placeholder='new passowrd..'
          style={styles.textInput}
        />
      </View>
      <View style={styles.topper}>
        <TextInput
          placeholder='confirm new passowrd..'
          style={styles.textInput}
        />
      </View>
      <View style={styles.buttonTop}>
        <Button title='Save' color="#841FFF" />
      </View>
      <View style={styles.buttonTop}>
        <Button title='Save' onPress = {() => navigation.navigate("Settings")} color="#841FFF" />
      </View>
    </View>
  );
}

function Settings({ navigation}) {
  return (
    <View>
      <View style={styles.buttonTop}>
        <Button title='About' onPress = {() => navigation.navigate("About")} color="#841FFF" />
      </View>
    </View>
  );
}

function About() {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 50 }}>
      Team 7-Password Manager App Richard Djirackor (Captain) Adzedowa Courage (Second Captain)
      This application serves as a Password Manager. It allows users to securely store their passwords and associated details such as usernames and email addresses for future use.
      Initially this was merely a project work, but now, I will focus on building more revolutionary apps in the future
      So watch this repository github.com/ rdjirackor, as more is certain to come, God willingly!
      </Text>
     
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
        <Stack.Screen name="ChangeMaster" component={ChangeMaster} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="About" component={About} />
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
    marginLeft: 250,
    marginTop: 15,
    borderRadius: 40,
    marginBottom:140,
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
    marginTop: 70,
    marginLeft: 20,
    marginRight: 20,
    borderLeftRadius: 20,
    borderRightRadius: 20,
    padding: 0,
  },
  bottom1: {
    flex: 0.17,
    backgroundColor: '#fff',
    borderColor: '#9C27B0',
    borderRadius: 10,
    borderWidth: 5,
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20,
    padding: 8,
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
