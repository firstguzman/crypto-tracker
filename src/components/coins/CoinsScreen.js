import {View, ActivityIndicator, StyleSheet} from "react-native"
import React, {useEffect, useState} from "react"
import {API_HOST, COLORS} from "../../utils/constants"
import {get} from "../../libs/http"
import CoinsList from "./CoinsList"
import CoinSearch from "./CoinSearch"

const CoinsScreen = () => {
  const [coins, setCoins] = useState([])
  const [allCoins, setAllCoins] = useState([])
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
      setAllCoins(coins)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = query => {
    const coinsFiltered = allCoins.filter(coin => {
      return (
        coin.name.toLowerCase().includes(query.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(query.toLowerCase())
      )
    })

    setCoins(coinsFiltered)
  }

  if (loading) {
    return <ActivityIndicator color="#FFF" size="large" />
  }

  return (
    <View style={styles.container}>
      <CoinSearch onChange={handleSearch} />
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
