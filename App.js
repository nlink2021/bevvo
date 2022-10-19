import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Card } from 'react-native-paper';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="My Details" component={MyDetails} />
          <Stack.Screen name="Bars" component={Bars} />
          <Stack.Screen name="Specific Bar" component={SpecificBar} />
          <Stack.Screen name="Payment Settings" component={PaymentSettings} />
          <Stack.Screen name="Menu Item" component={MenuItem} />
          <Stack.Screen name="Checkout" component={Checkout} />
          <Stack.Screen name="Proof" component={Proof} />
          <Stack.Screen name="Cheers" component={Cheers} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000000',
    padding: 8,
    
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    fontFamily: 'Artico',
    color: '#FFFFFF'
  },
  cardbuffer: {
    padding: 12,
    margin: 10,
    alignSelf: 'stretch',
    backgroundColor: '#A4BC1B',
    color: '#FFFFFF',
   
  },
  logo: {
    height: 100,
    width: 350, 
  },
  barcard: {
    
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'grey',
    backgroundColor: '#FFFFFF',
  },
  button: {
    backgroundColor: '#FFFFFF',
    color: '#FFFFFF',
    textDecorationColor: 'none',
  }
});
