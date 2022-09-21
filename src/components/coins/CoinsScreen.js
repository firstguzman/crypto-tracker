import {View, Text, Button} from "react-native"
import React, {useEffect, useState} from "react"
import {useNavigation} from "@react-navigation/native"
import {API_HOST} from "../../utils/constants"
import { get } from "../../libs/http"

const CoinsScreen = props => {
  const [coins, setCoins] = useState([])
  const navigation = useNavigation()

  useEffect(() => {
    ;(async () => {
      await loadCoins()
    })()
  }, [])

  const loadCoins = async () => {
    try {
      const response = await get(`${API_HOST}tickers/`)

      console.log(response)
      console.log('hola')
    } catch (error) {
      console.error(error)
    }
  }

  const handlePress = () => {
    console.log("Go to details", props)
    navigation.navigate("CoinDetail")
  }

  return (
    <View>
      <Text>CoinsScreen</Text>
      <Button title="Go to detail" onPress={handlePress} />
    </View>
  )
}

export default CoinsScreen
