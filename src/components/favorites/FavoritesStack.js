import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import FavoritesScreen from "./FavoritesScreen"
import { COLORS } from "../../utils/constants"

const Stack = createStackNavigator()

const FavoritesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.blackPearl,
          shadowOpacity: COLORS.blackPearl
        },
        headerTintColor: COLORS.white
      }}>
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
    </Stack.Navigator>
  )
}

export default FavoritesStack
