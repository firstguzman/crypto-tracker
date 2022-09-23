import {StyleSheet, View} from "react-native"
import React from "react"
import FavoritesEmptyState from "./FavoritesEmptyState"
import { COLORS } from "../../utils/constants"

const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      <FavoritesEmptyState />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.charade
  }
})

export default FavoritesScreen
