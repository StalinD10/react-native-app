import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import TopTabNavigation from './src/navigation/BottomNavigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import BottombNavigation from './src/navigation/BottomNavigation'

function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <BottombNavigation />
      </SafeAreaProvider>
    </NavigationContainer>
  )
}

export default App
