import React from 'react'
import { Image, Text, View } from 'react-native'
import { Card } from 'react-native-paper'
import { IMAGES } from '../../styling/config'
import { styles } from '../../styling/globalStyle/style'

export const MainScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Image style={styles.logo} source={IMAGES.bevvoWhite} />

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
