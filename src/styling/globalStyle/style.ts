import Constants from 'expo-constants'
import { StyleSheet } from 'react-native'
import { scaleWidth } from '../layout'

export const styles = StyleSheet.create({
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
    padding: scaleWidth(12), // TODO: scale stuff throughout the app!
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
