import {View, Text} from "react-native"
import React from "react"
import {FlatList} from "react-native-gesture-handler"
import CoinItem from "./CoinItem"

const CoinsList = ({coins}) => {
  return (
    <FlatList data={coins} renderItem={({item}) => <CoinItem item={item} />} />
  )
}

export default CoinsList
