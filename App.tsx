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
  TouchableOpacity,
  View,
} from 'react-native'
import { Card } from 'react-native-paper'
import { MainScreen } from './src/screens'
import { IMAGES } from './src/styling/config'

const Stack = createStackNavigator()

const Bars = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.paragraph}>Bars in your area</Text>
    <Card
      style={styles.cardbuffer2}
      onPress={() => navigation.navigate('Specific Bar')}
    >
      <Text style={styles.barcard}>Leo's Tavern</Text>
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
  <View style={{flex: 1, backgroundColor: '#000000', justifyContent: 'space-evenly' }}>
    <View>
      <Text style={{ fontWeight: 'bold', fontSize: 32, color: '#FFFFFF' }}>Leo's Tavern</Text>
      <Text style={{ color: '#FFFFFF' }}>123 Willow St</Text>
      <Text style={{ color: '#FFFFFF' }}>210-555-1234</Text>
    </View>
    <View style={{ height: 400 }}>
      <ScrollView>
        <View style={{ backgroundColor: '#000000' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#FFFFFF' }}>Specials</Text>
            <Text style={{ color: '#FFFFFF' }} onPress={() => navigation.navigate('Menu Item')}>Leo's Mixer                                                      $7.99 - Add</Text>
            <Text style={{ color: '#FFFFFF' }} onPress={() => navigation.navigate('Menu Item')}>{"\n"}Leo's Mixer                                                      $7.99 - Add</Text>
            <Text style={{ color: '#FFFFFF' }} onPress={() => navigation.navigate('Menu Item')}>{"\n"}Leo's Mixer                                                      $7.99 - Add</Text>
            <Text style={{ color: '#FFFFFF' }} onPress={() => navigation.navigate('Menu Item')}>{"\n"}Leo's Mixer                                                      $7.99 - Add</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#FFFFFF' }}>{"\n"}Beer</Text>
            <Text style={{ color: '#FFFFFF' }} onPress={() => navigation.navigate('Menu Item')}>Shiner Bock                                                     $7.99 - Add</Text>
            <Text style={{ color: '#FFFFFF' }} onPress={() => navigation.navigate('Menu Item')}>{"\n"}Shiner Bock                                                     $7.99 - Add</Text>
            <Text style={{ color: '#FFFFFF' }} onPress={() => navigation.navigate('Menu Item')}>{"\n"}Shiner Bock                                                     $7.99 - Add</Text>
            <Text style={{ color: '#FFFFFF' }} onPress={() => navigation.navigate('Menu Item')}>{"\n"}Shiner Bock                                                     $7.99 - Add</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#FFFFFF' }}>{"\n"}Wine</Text>
            <Text style={{ color: '#FFFFFF' }} onPress={() => navigation.navigate('Menu Item')}>Pinot Grigio                                                     $7.99 - Add</Text>
            <Text style={{ color: '#FFFFFF' }} onPress={() => navigation.navigate('Menu Item')}>{"\n"}Pinot Grigio                                                     $7.99 - Add</Text>
            <Text style={{ color: '#FFFFFF' }} onPress={() => navigation.navigate('Menu Item')}>{"\n"}Pinot Grigio                                                     $7.99 - Add</Text>
            <Text style={{ color: '#FFFFFF' }} onPress={() => navigation.navigate('Menu Item')}>{"\n"}Pinot Grigio                                                     $7.99 - Add</Text>   
        </View>
      </ScrollView>
    </View>
    <Button style={styles.button} title="Let's checkout" onPress={() => navigation.navigate('Checkout')}/>
  </View>
)

const MenuItem = ({ navigation }) => (
  <View style={{flex: 1, backgroundColor: '#000000', justifyContent: 'space-evenly' }}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', borderColor: '#A4BC1B', borderWidth: 2, borderRadius: 5, padding: 10 }}>
      <Text style={{ color: '#FFFFFF', fontSize: 20 }}>Bottle of Corona</Text>
      <Text style={{ color: '#FFFFFF', fontSize: 20 }}>$7.99</Text>
    </View>
    <Text style={{ color: '#FFFFFF', textAlign: 'center', fontSize: 20 }}>How many?</Text>
    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
      <Text style={{ color: '#FFFFFF', fontSize: 48 }}>-</Text>
      <Text style={{ color: '#FFFFFF', fontSize: 48 }}>1</Text>
      <Text style={{ color: '#FFFFFF', fontSize: 48 }}>+</Text>
    </View>
      <Text style={{ color: '#FFFFFF', fontSize: 48, textAlign: 'center' }}>$7.99</Text>
    <View style={{ borderColor: '#A4BC1B', borderWidth: 2, borderRadius: 5, padding: 10 }}>
      <Text style={{ color: '#FFFFFF', fontSize: 48, textAlign: 'center' }} onPress={() => navigation.navigate('Specific Bar')}>Add to Order</Text>
    </View>    
  </View>
)

const Checkout = ({ navigation }) => (
  <View style={{ flex: 1, backgroundColor: '#000000', justifyContent: 'space-evenly' }}>
    <View style={{ borderWidth: 1, borderTopColor: '#A4BC1B', borderBottomColor: '#A4BC1B', padding: 12 }}>
      <Text style={{ color: '#FFFFFF', textAlign: 'center', fontSize: 32 }}>Order Summary</Text>
    </View>
    <View style={{ borderWidth: 1, borderTopColor: '#A4BC1B', borderBottomColor: '#A4BC1B', padding: 12 }}>
      <Text style={{ color: '#FFFFFF', textAlign: 'center', fontSize: 27 }}>Leo's Tavern</Text>
    </View>
    <View style={{ height: 150 }}>
      <ScrollView>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: '#FFFFFF', fontSize: 18 }}>x2  Shiner Bock (bottles){"\n"}x2  Shiner Bock (bottles){"\n"}x2  Shiner Bock (bottles)</Text>
          <Text style={{ color: '#FFFFFF', fontSize: 18 }}>$7.99{"\n"}$3.99{"\n"}$12.99</Text>
        </View>
      </ScrollView>
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text style={{ color: '#FFFFFF', fontSize: 25 }}>Subtotal{"\n"}Tip{"\n"}Processing fee</Text>
      <Text style={{ color: '#FFFFFF', fontSize: 25 }}>$7.99{"\n"}Tip list{"\n"}$3.99</Text>
    </View>
    <View style={{ alignItems: 'center' }}>
      <Text style={{ color: '#FFFFFF', fontSize: 27 }}>Total: $XX.XX</Text>
      <Text style={{ color: '#FFFFFF', fontSize: 18 }}>Hold to confirm</Text>
      <View style={styles.shapecontainer}>
        <TouchableOpacity style={styles.circle} onLongPress={() => navigation.navigate('Proof')} delayLongPress={2000} />
      </View>
    </View>   
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
    <Image style={{ height: 300, width: 300 }} source={IMAGES.wine} />
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
    borderWidth: 5,
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
