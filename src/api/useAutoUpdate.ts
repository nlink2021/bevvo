import * as Updates from 'expo-updates'
import { useEffect, useState } from 'react'
import { Alert, AppState } from 'react-native'

// README:
// how to use this. install expo updates.
// see docs for that.
// then stick this in your root file (app.js):
// useAutoUpdate();
// and then publish OTA updates and the app will get them with:
// expo publish (it's possible this is different now, look at docs for OTA updates/expo updates.)

const checkUpdates = async (setReloading: any) => {
  try {
    const update = await Updates.checkForUpdateAsync()
    if (update.isAvailable) {
      await Updates.fetchUpdateAsync()
      setReloading(true)
    } else {
      //No updates were found
    }
  } catch (e) {
    console.info(JSON.stringify(e))
  }
}

const useAutoUpdate = () => {
  const [showReloadDialog, setShowReloadDialog] = useState(false)

  const handleAppStateChange = (nextAppState: any) => {
    if (nextAppState === 'active') {
      checkUpdates(setShowReloadDialog)
    }
  }

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange)
    // fresh start check
    checkUpdates(setShowReloadDialog)

    return () => {
      AppState.removeEventListener('change', handleAppStateChange)
    }
  }, [])

  useEffect(() => {
    if (showReloadDialog === true) {
      Alert.alert(
        'New Update Ready',
        'There is a new update available for your app. A refresh is required.',
        [
          {
            text: 'Refresh',
            onPress: () => {
              Updates.reloadAsync()
            },
          },
        ],
        { cancelable: false },
      )
    }
  }, [showReloadDialog])
}

export default useAutoUpdate
