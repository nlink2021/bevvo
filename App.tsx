import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Constants from 'expo-constants'
import moment from 'moment'
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import { Card } from 'react-native-paper'

const Stack = createStackNavigator()

const MainScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Image
      style={styles.logo}
      source={require('./assets/bevvo-03-white.png')}
    />

    <Card
      style={styles.cardbuffer1}
      onPress={() => navigation.navigate('Bars')}
    >
      <Text style={styles.homebuttons}>Bars</Text>
    </Card>
    <Card
      style={styles.cardbuffer1}
      onPress={() => navigation.navigate('My Details')}
    >
      <Text style={styles.homebuttons}>My Details</Text>
    </Card>
    <Card
      style={styles.cardbuffer1}
      onPress={() => navigation.navigate('Payment Settings')}
    >
      <Text style={styles.homebuttons}>Payment Settings</Text>
    </Card>
  </View>
)

const Bars = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.paragraph}>This is the Bars page</Text>
    <Card
      style={styles.cardbuffer2}
      onPress={() => navigation.navigate('Specific Bar')}
    >
      <Text style={styles.barcard}>Bar Name</Text>
      <Text style={styles.barcard}>
        This is a brief description of the bar in question. It is a nice tucked
        away speakeasy in such and such place with such and such drinks with a
        such and such option in food as well.
      </Text>
      <Text style={styles.barcard}>x miles away</Text>
    </Card>
    <Card style={styles.cardbuffer2}>
      <Text style={styles.barcard}>Bar Name</Text>
      <Text style={styles.barcard}>
        This is a brief description of the bar in question. It is a nice tucked
        away speakeasy in such and such place with such and such drinks with a
        such and such option in food as well.
      </Text>
      <Text style={styles.barcard}>x miles away</Text>
    </Card>
  </View>
)

const MyDetails = () => (
  <View style={styles.container}>
    <Text style={styles.paragraph}>My Details</Text>
    <TextInput style={styles.input} value={'Email'} />
    <TextInput style={styles.input} value={'Date of birth'} />
    <TextInput style={styles.input} value={'Phone number'} />
    <Button style={styles.button} title="Save" />
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
    <View style={styles.headerbar}>
      <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Leo's Tavern</Text>
      <Text>123 Willow St</Text>
      <Text>210-555-1234</Text>
    </View>
    <View style={styles.headerbar}>
      <Text>Leo's Tavern</Text>
      <Text>123 Willow St</Text>
      <Text>210-555-1234</Text>
    </View>
    <ScrollView style={styles.headerbar}>
      <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Specials</Text>
      <Button
        style={styles.button}
        title="Heres a menu item"
        onPress={() => navigation.navigate('Menu Item')}
      />
      <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Beer</Text>
      <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Wine</Text>

      <Button
        style={styles.button}
        title="Heres a menu item"
        onPress={() => navigation.navigate('Menu Item')}
      />
      <Button
        style={styles.button}
        title="Let's checkout"
        onPress={() => navigation.navigate('Checkout')}
      />
    </ScrollView>
  </View>
)

const MenuItem = () => (
  <View style={styles.container}>
    <Text style={styles.paragraph}>This is the Menu Item page</Text>
  </View>
)

const Checkout = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.paragraph}>This is the Checkout page</Text>
    <Button
      style={styles.button}
      title="Slide to Confirm"
      onPress={() => navigation.navigate('Proof')}
    />
  </View>
)

const getCurrentDate = () => {
  var date = moment().utcOffset('+05:30').format('MMMM Do YYYY')
  return date
}

const Proof = ({ navigation }) => (
  <View
    style={{
      flex: 1,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: '#000000',
      padding: 8,
    }}
  >
    <Text style={{ color: 'white', fontSize: 32, textAlign: 'center' }}>
      Proof of Purchase{'\n'}Leo's Tavern{'\n'}Nick Link
    </Text>

    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>
        {getCurrentDate()}
      </Text>
      <Image
        source={require('./assets/bevvo-03-white.png')}
        style={{
          width: 100,
          height: 100,
          borderRadius: 400 / 2,
          resizeMode: 'contain',
        }}
      />
    </View>
    <View style={{ backgroundColor: '#000000', height: 150, minWidth: '100%' }}>
      <ScrollView style={{ flex: 1 / 2, flexDirection: 'row' }}>
        <Text style={{ color: 'white' }}>
          x1 Beverage A{'\n'}x3 Beverage B{'\n'}x2 Beverage C{'\n'}x1 Beverage A
          {'\n'}x3 Beverage B{'\n'}x2 Beverage C{'\n'}
        </Text>
        <Text style={{ color: 'white' }}>
          $8.99{'\n'}$10.99{'\n'}5.99{'\n'}$8.99{'\n'}$10.99{'\n'}5.99{'\n'}
        </Text>
      </ScrollView>
    </View>
    <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>
      Follow us on social media!
    </Text>
    <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>
      Slide when you've received your order. Enjoy!
    </Text>

    <Button
      style={styles.button}
      title="Now you wait for your order"
      onPress={() => navigation.navigate('Cheers')}
    />
  </View>
)

const Cheers = ({ navigation }) => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000000',
      padding: 8,
    }}
  >
    <Text style={{ color: 'white', fontSize: 32, textAlign: 'center' }}>
      Cheers, Nick!{'\n'}
    </Text>
    <Image
      style={{ height: 300, width: 300 }}
      source={require('./assets/wine.gif')}
    />
    <Image
      style={styles.logo}
      source={require('./assets/bevvo-03-white.png')}
    />
    <Button
      style={styles.button}
      title="Screen takes you back to specific bar after 3 seconds"
      onPress={() => navigation.navigate('Specific Bar')}
    />
  </View>
)

export default function App() {
  // https://docs.expo.dev/versions/latest/sdk/stripe/
  return (
    // <StripeProvider
    //   publishableKey={PUBLISHABLE_STRIPE_KEY}
    //   // urlScheme="luvbucks"
    //   // merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}"
    // >
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
    // </StripeProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000000',
    padding: 8,
  },
  headerbar: {
    backgroundColor: 'grey',
    flex: 1,
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    fontFamily: 'Artico',
    color: '#FFFFFF',
  },
  cardbuffer1: {
    flex: 1,
    padding: 12,
    margin: 3,
    maxHeight: 60,
    backgroundColor: '#000000',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#A4BC1B',
    color: 'white',
    alignItems: 'center',
  },
  cardbuffer2: {
    flex: 1,
    padding: 12,
    margin: 3,
    alignSelf: 'stretch',
    backgroundColor: '#000000',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#A4BC1B',
    color: 'white',
    alignItems: 'center',
    maxHeight: 150,
  },
  logo: {
    height: 100,
    width: 350,
    marginTop: 29,
    marginBottom: 29,
  },
  barcard: {
    color: 'white',
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
  },
  homebuttons: {
    color: '#FFFFFF',
    fontFamily: 'Arial',
    fontSize: 24,
  },
})
