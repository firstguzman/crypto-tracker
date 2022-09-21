import {View, Text, Image, StyleSheet, SectionList} from "react-native"
import React, {useEffect, useState} from "react"
import {COLORS, IMG_URL} from "../../utils/constants"

const CoinDetailScreen = ({navigation, route}) => {
  const {params} = route
  const [coin, setCoin] = useState(null)

  useEffect(() => {
    const {coin} = params
    navigation.setOptions({
      title: coin.symbol
    })
  }, [navigation])

  useEffect(() => {
    setCoin(params.coin)
  }, [params])

  const getSymbolIcon = symbol => {
    console.log(symbol)
    if (symbol) {
      return `${IMG_URL}${symbol}.png`
    }
  }

  const getSections = coin => {
    const sections = [
      {
        title: "Market cap",
        data: [coin.market_cap_usd]
      },
      {
        title: "Volume 24h",
        data: [coin.volume24]
      },
      {
        title: "Change 24h",
        data: [coin.percent_change_24h]
      }
    ]

    return sections
  }

  if (!coin) return null

  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <Image
          style={styles.iconImg}
          source={{uri: getSymbolIcon(coin.nameid)}}
        />
        <Text style={styles.titleText}>{coin.name}</Text>
      </View>

      <SectionList
        sections={getSections(coin)}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <View style={styles.sectionItem}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section}) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.charade,
    flex: 1
  },
  subHeader: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: 16,
    flexDirection: "row"
  },
  iconImg: {
    width: 25,
    height: 25
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.white,
    marginLeft: 8
  },
  sectionHeader: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    padding: 8
  },
  sectionItem: {
    padding: 8
  },
  itemText: {
    color: COLORS.white,
    fontSize: 14
  },
  sectionTitle: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "bold"
  }
})

export default CoinDetailScreen
