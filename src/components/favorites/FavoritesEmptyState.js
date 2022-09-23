import {View, Text, StyleSheet} from "react-native"
import React from "react"
import {COLORS} from "../../utils/constants"

const FavoritesEmptyState = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You don't have any favorite yet</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center"
  },
  text: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 18,
    alignSelf: "center"
  }
})

export default FavoritesEmptyState
