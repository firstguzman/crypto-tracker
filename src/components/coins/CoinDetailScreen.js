import {View, Text} from "react-native"
import React from "react"

const CoinDetailScreen = ({route}) => {
  const {params} = route

  console.log(params.coin)
  return (
    <View>
      <Text>CoinDetailScreen</Text>
    </View>
  )
}

export default CoinDetailScreen
