import {View, Text} from "react-native"
import React from "react"

const CoinItem = ({item}) => {
  return (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.symbol}</Text>
    </View>
  )
}

export default CoinItem
