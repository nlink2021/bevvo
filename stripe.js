import { getAuth } from '@firebase/auth'
import {
  initPaymentSheet,
  presentPaymentSheet,
} from '@stripe/stripe-react-native'
import axios from 'axios'
import { Alert } from 'react-native'

// HEADS UP:
// If your app does not include any Apple Pay functionality,
//  please indicate this information in the Review Notes section for each version of your app in App Store Connect when submitting for review.

// https://github.com/stripe/stripe-react-native
const STRIPE = {
  initializePaymentSheet: async (amount: number) => {
    const { currentUser } = getAuth()
    try {
      if (currentUser) {
        const result: any = await axios({
          url: 'https://bevvo.cloudfunctions.net/getStripePaymentIntent',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          data: {
            amount,
            email: currentUser.email,
          },
        })

        if (result.data) {
          // if (__DEV__) {
          // console.info("initPaymentsheetResult", result.data);
          // }
        } else {
          // if (__DEV__) {
          // console.info("initPaymentsheetResult2", result);
          // }
        }

        if (result?.data?.intentSecret) {
          const { error } = await initPaymentSheet({
            customerId: result.data.customer,
            customerEphemeralKeySecret: result.data.ephemeralKey,
            paymentIntentClientSecret: result.data.intentSecret,
            merchantDisplayName: 'Bevvo Inc',
            // allowsDelayedPaymentMethods: true,
            // Set `allowsDelayedPaymentMethods` to true if your business can handle payment methods that
            // complete payment after a delay, like SEPA Debit and Sofort.
          })
          // if (__DEV__) {
          // console.info("intent error", error); //undefined means no err.
          // }
        }
      }
    } catch (err) {
      console.info(err)
    }
  },

  openPaymentSheet: async (onError, onSuccess) => {
    const { error } = await presentPaymentSheet()
    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message)
      if (onError) {
        onError(error)
      }
    } else {
      // TODO: handle this, navigate back.
      Alert.alert('Success', 'Your order is confirmed!')
      if (onSuccess) {
        onSuccess()
      }
    }
  },

  presentPaymentSheet,

  initAndDisplaySheet: async (finalAmount: number) => {
    await STRIPE.initializePaymentSheet(finalAmount)
    const res = await STRIPE.presentPaymentSheet()
    return res
  },
}

export default STRIPE
