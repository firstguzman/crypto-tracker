import {View, Text, Button, ActivityIndicator, StyleSheet} from "react-native"
import React, {useEffect, useState} from "react"
import {useNavigation} from "@react-navigation/native"
import {API_HOST} from "../../utils/constants"
import {get} from "../../libs/http"
import CoinsList from "./CoinsList"

const CoinsScreen = props => {
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(false)
  const navigation = useNavigation()

  useEffect(() => {
    ;(async () => {
      await loadCoins()
    })()
  }, [])

  const loadCoins = async () => {
    try {
      setLoading(true)
      const response = await get(`${API_HOST}tickers/`)

      const coinsArray = response.data

      setCoins([...coins, ...coinsArray])
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handlePress = () => {
    console.log("Go to details", props)
    navigation.navigate("CoinDetail")
  }

  return (
    <View style={styles.container}>
      {loading ? <ActivityIndicator color="#FFF" size="large" /> : null}
      <Text>CoinsScreen</Text>
      <CoinsList coins={coins} />
      <Button title="Go to detail" onPress={handlePress} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
})

export default CoinsScreen
