import {View, Text, StyleSheet} from "react-native"
import React from "react"
import {COLORS} from "../../utils/constants"

const CoinMarketItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>{item.name}</Text>
      <Text style={styles.priceText}>{item.price_usd}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderColor: COLORS.zircon,
    borderWidth: 1,
    padding: 16,
    marginRight: 8,
    alignItems: "center",
    borderRadius: 10
  },
  nameText: {
    color: COLORS.white,
    fontWeight: "bold"
  },
  priceText: {
    color: COLORS.white
  }
})

export default CoinMarketItem
