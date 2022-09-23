import {View, ActivityIndicator, StyleSheet} from "react-native"
import React, {useEffect, useState} from "react"
import {API_HOST, COLORS} from "../../utils/constants"
import {get} from "../../libs/http"
import CoinsList from "./CoinsList"
import CoinSearch from "./CoinSearch"

const CoinsScreen = () => {
  const [coins, setCoins] = useState([])
  const [filteredCoins, setFilteredCoins] = useState([])
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

      setCoins(response.data)
      setFilteredCoins(response.data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = query => {
    const filter = coins.filter(
      coin =>
        coin.name.toLowerCase().includes(query.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(query.toLowerCase())
    )

    setFilteredCoins(filter)
  }

  if (loading) {
    return <ActivityIndicator color="#FFF" size="large" />
  }

  return (
    <View style={styles.container}>
      <CoinSearch onChange={handleSearch} />
      <CoinsList coins={filteredCoins} />
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
