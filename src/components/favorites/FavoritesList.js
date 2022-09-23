import React from "react"
import {FlatList} from "react-native"
import CoinItem from "../coins/CoinItem"

const FavoritesList = ({favorites}) => {
  return (
    <FlatList
      data={favorites}
      renderItem={({item}) => <CoinItem item={item} />}
    />
  )
}

export default FavoritesList
