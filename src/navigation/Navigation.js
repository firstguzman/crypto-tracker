import React from "react"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import CoinsStack from "../components/coins/CoinsStack"
import {Image} from "react-native"
import {COLORS} from "../utils/constants"

const Tab = createBottomTabNavigator()

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: COLORS.blackPearl
        },
        headerShown: false,
        tabBarInactiveTintColor: "#FEFEFE"
      }}>
      <Tab.Screen
        name="Coins"
        component={CoinsStack}
        options={{
          tabBarIcon: ({size, color}) => (
            <Image
              style={{tintColor: color, width: size, height: size}}
              source={require("../assets/bank.png")}
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default Navigation
