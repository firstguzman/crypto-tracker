import {StyleSheet, View} from "react-native"
import React, {useCallback, useState} from "react"
import FavoritesEmptyState from "./FavoritesEmptyState"
import {COLORS} from "../../utils/constants"
import Storage from "../../libs/storage"
import FavoritesList from "./FavoritesList"
import { useFocusEffect } from "@react-navigation/native"

const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState([])

  useFocusEffect(
    useCallback(() => {
      getFavorites()
    }, [])
  )

  const getFavorites = async () => {
    try {
      const allKeys = await Storage.instance.getAllKeys()

      const keys = allKeys.filter(key => key.includes("favorite-"))

      const favs = await Storage.instance.getAll(keys)

      const favoritesArray = favs.map(fav => JSON.parse(fav[1]))

      setFavorites(favoritesArray)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <View style={styles.container}>
      {favorites.length === 0 ? (
        <FavoritesEmptyState />
      ) : (
        <FavoritesList favorites={favorites} />
      )}
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
