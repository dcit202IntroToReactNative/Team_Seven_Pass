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
    if (masterPass === '' || confirmMasterPass === '') {
      Alert.alert('Make sure you set a master password');
    } else if (masterPass !== confirmMasterPass) {
      Alert.alert('Wrong Password', 'The passwords do not match. Please try again.');
    } else {
      navigation.navigate('Login');
      AsyncStorage.setItem("maspass", JSON.stringify(masterPass));
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
          onChangeText={setConfirmMasterPass}
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
    if (pass === '"' + passo + '"') {
      navigation.navigate('CreateAccount');
    } else {
      ToastAndroid.show('Get Away, you brute!', ToastAndroid.LONG);
      console.log(typeof(passo));
      console.log(typeof(pass));
      console.log('"' + passo + '"');
      console.log(pass);
      console.log(pass === passo);
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

function CreateAccount({ navigation, route }) {
  const { tx1, tx2, tx3, tx4, tx5, tx6, tx7, tx8, tx9, password } =
    route.params || {};

  const [title, setTitle] = useState(''); 
  const [aname, setAname] = useState(''); 
  const [username, setUsername] = useState(''); 


  const [stateTx1, setStateTx1] = useState('');
  const [stateTx2, setStateTx2] = useState('');
  const [stateTx3, setStateTx3] = useState('');
  const [stateTx4, setStateTx4] = useState('');
  const [stateTx5, setStateTx5] = useState('');
  const [stateTx6, setStateTx6] = useState('');
  const [stateTx7, setStateTx7] = useState('');
  const [stateTx8, setStateTx8] = useState('');
  const [stateTx9, setStateTx9] = useState('');
  const [statePassword, setStatePassword] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const storedTx1 = await AsyncStorage.getItem('tx1');
        setStateTx1(storedTx1 || '');
        const storedTx2 = await AsyncStorage.getItem('tx2');
        setStateTx2(storedTx2 || '');
        const storedTx3 = await AsyncStorage.getItem('tx3');
        setStateTx3(storedTx3 || '');
        const storedTx4 = await AsyncStorage.getItem('tx4');
        setStateTx4(storedTx4 || '');
        const storedTx5 = await AsyncStorage.getItem('tx5');
        setStateTx5(storedTx5 || '');
        const storedTx6 = await AsyncStorage.getItem('tx6');
        setStateTx6(storedTx6 || '');
        const storedTx7 = await AsyncStorage.getItem('tx7');
        setStateTx7(storedTx7 || '');
        const storedTx8 = await AsyncStorage.getItem('tx8');
        setStateTx8(storedTx8 || '');
        const storedTx9 = await AsyncStorage.getItem('tx9');
        setStateTx9(storedTx9 || '');
        setStatePassword(password || ''); // Set the state for the password
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, [password]);

  const handleSaveButtonPress = () => {
    saveAccountDetails(title, aname, username, statePassword); // Use the statePassword variable
    navigation.pop();
    navigation.navigate('SaveAccount');
  };

  // Function to save account details to AsyncStorage
  const saveAccountDetails = (tit, name, user, password) => {
    if (stateTx1 === '') {
      AsyncStorage.setItem('tx1', `${tit}\n${name}\n${user}\n${password}`);
      setStateTx1(`${tit}\n${name}\n${user}\n${password}`);
    } else if (stateTx2 === '') {
      AsyncStorage.setItem('tx2', `${tit}\n${name}\n${user}\n${password}`);
      setStateTx2(`${tit}\n${name}\n${user}\n${password}`);
    } else if (stateTx3 === '') {
      AsyncStorage.setItem('tx3', `${tit}\n${name}\n${user}\n${password}`);
      setStateTx3(`${tit}\n${name}\n${user}\n${password}`);
    } else if (stateTx4 === '') {
      AsyncStorage.setItem('tx4', `${tit}\n${name}\n${user}\n${password}`);
      setStateTx4(`${tit}\n${name}\n${user}\n${password}`);
    } else if (stateTx5 === '') {
      AsyncStorage.setItem('tx5', `${tit}\n${name}\n${user}\n${password}`);
      setStateTx5(`${tit}\n${name}\n${user}\n${password}`);
    } else if (stateTx6 === '') {
      AsyncStorage.setItem('tx6', `${tit}\n${name}\n${user}\n${password}`);
      setStateTx6(`${tit}\n${name}\n${user}\n${password}`);
    } else if (stateTx7 === '') {
      AsyncStorage.setItem('tx7', `${tit}\n${name}\n${user}\n${password}`);
      setStateTx7(`${tit}\n${name}\n${user}\n${password}`);
    } else if (stateTx8 === '') {
      AsyncStorage.setItem('tx8', `${tit}\n${name}\n${user}\n${password}`);
      setStateTx8(`${tit}\n${name}\n${user}\n${password}`);
    } else if (stateTx9 === '') {
      AsyncStorage.setItem('tx9', `${tit}\n${name}\n${user}\n${password}`);
      setStateTx9(`${tit}\n${name}\n${user}\n${password}`);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.textContainer}>
        <TextInput
          style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', width: 400 }}
          value={stateTx1}
          onChangeText={setStateTx1}
        />
        <TextInput
          style={styles.textInputCA}
          value={stateTx2}
          onChangeText={setStateTx2}
        />
        <TextInput
          style={styles.textInputCA}
          value={stateTx3}
          onChangeText={setStateTx3}
        />
        <TextInput
          style={styles.textInputCA}
          value={stateTx4}
          onChangeText={setStateTx4}
        />
        <TextInput
          style={styles.textInputCA}
          value={stateTx5}
          onChangeText={setStateTx5}
        />
        <TextInput
          style={styles.textInputCA}
          value={stateTx6}
          onChangeText={setStateTx6}
        />
        <TextInput
          style={styles.textInputCA}
          value={stateTx7}
          onChangeText={setStateTx7}
        />
        <TextInput
          style={styles.textInputCA}
          value={stateTx8}
          onChangeText={setStateTx8}
        />
        <TextInput
          style={styles.textInputCA}
          value={stateTx9}
          onChangeText={setStateTx9}
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

  const [tx1, setTx1] = useState('');
  const [tx2, setTx2] = useState('');
  const [tx3, setTx3] = useState('');
  const [tx4, setTx4] = useState('');
  const [tx5, setTx5] = useState('');
  const [tx6, setTx6] = useState('');
  const [tx7, setTx7] = useState('');
  const [tx8, setTx8] = useState('');
  const [tx9, setTx9] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const storedTx1 = await AsyncStorage.getItem('tx1');
        setTx1(storedTx1 || '');
        const storedTx2 = await AsyncStorage.getItem('tx2');
        setTx2(storedTx2 || '');
        const storedTx3 = await AsyncStorage.getItem('tx3');
        setTx3(storedTx3 || '');
        const storedTx4 = await AsyncStorage.getItem('tx4');
        setTx4(storedTx4 || '');
        const storedTx5 = await AsyncStorage.getItem('tx5');
        setTx5(storedTx5 || '');
        const storedTx6 = await AsyncStorage.getItem('tx6');
        setTx6(storedTx6 || '');
        const storedTx7 = await AsyncStorage.getItem('tx7');
        setTx7(storedTx7 || '');
        const storedTx8 = await AsyncStorage.getItem('tx8');
        setTx8(storedTx8 || '');
        const storedTx9 = await AsyncStorage.getItem('tx9');
        setTx9(storedTx9 || '');
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  const handleSaveButtonPress = () => {
    saveAccountDetails(title, aname, username, pass);
    navigation.navigate('CreateAccount', {
      tx1, // Pass the saved details as route parameters
      tx2,
      tx3,
      tx4,
      tx5,
      tx6,
      tx7,
      tx8,
      tx9,
      password: pass, // Pass the password as a parameter
    });

    setTitle('');
    setAname('');
    setUsername('');
    setPass('');
  };

  // Function to save account details to AsyncStorage
  const saveAccountDetails = (tit, name, user, password) => {
    if (tx1 === '') {
      AsyncStorage.setItem('tx1', `${tit}\n${name}\n${user}\n${password}`);
      setTx1(`${tit}\n${name}\n${user}\n${password}`);
    } else if (tx2 === '') {
      AsyncStorage.setItem('tx2', `${tit}\n${name}\n${user}\n${password}`);
      setTx2(`${tit}\n${name}\n${user}\n${password}`);
    } else if (tx3 === '') {
      AsyncStorage.setItem('tx3', `${tit}\n${name}\n${user}\n${password}`);
      setTx3(`${tit}\n${name}\n${user}\n${password}`);
    } else if (tx4 === '') {
      AsyncStorage.setItem('tx4', `${tit}\n${name}\n${user}\n${password}`);
      setTx4(`${tit}\n${name}\n${user}\n${password}`);
    } else if (tx5 === '') {
      AsyncStorage.setItem('tx5', `${tit}\n${name}\n${user}\n${password}`);
      setTx5(`${tit}\n${name}\n${user}\n${password}`);
    } else if (tx6 === '') {
      AsyncStorage.setItem('tx6', `${tit}\n${name}\n${user}\n${password}`);
      setTx6(`${tit}\n${name}\n${user}\n${password}`);
    } else if (tx7 === '') {
      AsyncStorage.setItem('tx7', `${tit}\n${name}\n${user}\n${password}`);
      setTx7(`${tit}\n${name}\n${user}\n${password}`);
    } else if (tx8 === '') {
      AsyncStorage.setItem('tx8', `${tit}\n${name}\n${user}\n${password}`);
      setTx8(`${tit}\n${name}\n${user}\n${password}`);
    } else if (tx9 === '') {
      AsyncStorage.setItem('tx9', `${tit}\n${name}\n${user}\n${password}`);
      setTx9(`${tit}\n${name}\n${user}\n${password}`);
    }
  };

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
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Master} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="SaveAccount" component={SaveAccount} />
        {/* Add other screens here */}
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
