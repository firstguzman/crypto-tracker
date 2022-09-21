import {View, ActivityIndicator, StyleSheet} from "react-native"
import React, {useEffect, useState} from "react"
import {API_HOST, COLORS} from "../../utils/constants"
import {get} from "../../libs/http"
import CoinsList from "./CoinsList"

const CoinsScreen = () => {
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(false)

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

  if (loading) {
    return <ActivityIndicator color="#FFF" size="large" />
  }

  return (
    <View style={styles.container}>
      <CoinsList coins={coins} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.charade
  }
})

export default CoinsScreen
