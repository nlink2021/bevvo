import { StyleSheet, Text, View, Button, Image, TextInput, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';

const Stack = createStackNavigator();

const MainScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.paragraph}>
      Bevvo
    </Text>
    
      <Image style={styles.logo} source={require('./assets/bevvo-03-white.png')} />
    
    <Text style={styles.paragraph}>
      Welcome to Bevvo
    </Text>
    <Card style={styles.cardbuffer}>
      <Button title="Bars" onPress={() => navigation.navigate('Bars')} />
    </Card>
    <Card style={styles.cardbuffer}>
      <Button title="My Details" onPress={() => navigation.navigate('My Details')} />
    </Card>
    <Card style={styles.cardbuffer}>
      <Button title="Payment Settings" onPress={() => navigation.navigate('Payment Settings')} />
    </Card>
  </View>
)

const Bars = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.paragraph}>This is the Bars page</Text>
    <Card style={styles.cardbuffer} onPress={() => navigation.navigate('Specific Bar')}>
      <Text style={styles.barcard}>Bar Name</Text>
      <Text style={styles.barcard}>This is a brief description of the bar in question. It is a nice tucked away speakeasy in such and such place with such and such drinks with a such and such option in food as well.</Text>
      <Text style={styles.barcard}>x miles away</Text>
    </Card>
    <Card style={styles.cardbuffer}>
      <Text style={styles.barcard}>Bar Name</Text>
      <Text style={styles.barcard}>This is a brief description of the bar in question. It is a nice tucked away speakeasy in such and such place with such and such drinks with a such and such option in food as well.</Text>
      <Text style={styles.barcard}>x miles away</Text>
    </Card>
  </View>
)

const MyDetails = () => (
  <View style={styles.container}>
    <Text style={styles.paragraph}>This is the My Details page</Text>
  </View>
)

const PaymentSettings = () => (
  <View style={styles.container}>
    <Text style={styles.paragraph}>Payment Settings</Text>
    <Text style={styles.paragraph}>Enter your credit card info below</Text>
    <TextInput style={styles.input} value={'Full name on card'} />
    <TextInput style={styles.input} value={'Card number'} />
    <TextInput style={styles.input} value={'Expiration date'} />
    <TextInput style={styles.input} value={'CVV'} />
    <Button style={styles.button} title="Save" />
  </View>
)

const SpecificBar = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.paragraph}>This is the Specific Bar page</Text>
    <Button style={styles.button} title="Heres a menu item" onPress={() => navigation.navigate('Menu Item')}/>
    <Button style={styles.button} title="Let's checkout" onPress={() => navigation.navigate('Checkout')}/>
  </View>
)


const MenuItem = () => (
  <View style={styles.container}>
    <Text style={styles.paragraph}>This is the Menu Item page</Text>
  </View>
)

const Checkout = () => (
  <View style={styles.container}>
    <Text style={styles.paragraph}>This is the Checkout page</Text>
  </View>
)

const Proof = () => (
  <View style={styles.container}>
    <Text style={styles.paragraph}>This is the Proof page</Text>
  </View>
)

const Cheers = () => (
  <View style={styles.container}>
    <Text style={styles.paragraph}>This is the Cheers page</Text>
  </View>
)

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
