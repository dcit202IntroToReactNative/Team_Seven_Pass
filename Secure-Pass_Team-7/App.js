import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Master({ navigation }) {
  return (
    <KeyboardAvoidingView
     style={styles.container}
     behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Choose the behavior based on the platform
     >
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Create a Master Pass!</Text>
      <View style={styles.top}>
        <TextInput placeholder='    Create a Master Pass!' style={styles.textInput}>
          <StatusBar style="auto" />
        </TextInput>
      </View>
      <View style={styles.bottom}>
        <TextInput placeholder='    Confirm Master Pass!' style={styles.textInput}>
          <StatusBar style="auto" />
        </TextInput>
      </View>
      <View style={styles.button}>
        <Button title='Save and Continue!' onPress={() => navigation.navigate('Login')} color="#841FFF" />
      </View>
    </KeyboardAvoidingView>
  );
}

function Login() {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom:50 }}>Login Here!</Text>
      <View style={styles.topper}>
        <TextInput placeholder='    Enter your Master Pass!' style={styles.textInput}>
          <StatusBar style="auto" />
        </TextInput>
      </View>
      <View style={styles.buttonTopper}>
        <Button title='HeyClickMe!' onPress={() => Alert.alert('Bruh')} color="#841FFF" />
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
  textInput: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
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
});
