import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import CoinsScreen from "./CoinsScreen"
import {COLORS} from "../../utils/constants"
import CoinDetailScreen from "../coinDetail/CoinDetailScreen"

const Stack = createStackNavigator()

const CoinsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.blackPearl,
          shadowOpacity: COLORS.blackPearl
        },
        headerTintColor: COLORS.white
      }}>
      <Stack.Screen name="Coins" component={CoinsScreen} />
      <Stack.Screen name="CoinDetail" component={CoinDetailScreen} />
    </Stack.Navigator>
  )
}

export default CoinsStack
