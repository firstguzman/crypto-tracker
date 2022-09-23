import "react-native-gesture-handler"
import React from "react"
import {NavigationContainer} from "@react-navigation/native"
import Navigation from "./src/navigation/Navigation"
import { SafeAreaProvider } from "react-native-safe-area-context"

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
