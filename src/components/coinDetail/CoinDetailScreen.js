import {
  View,
  Text,
  Image,
  StyleSheet,
  SectionList,
  FlatList,
  Pressable
} from "react-native"
import React, {useEffect, useState} from "react"
import {API_HOST, COLORS, IMG_URL} from "../../utils/constants"
import {get} from "../../libs/http"
import CoinMarketItem from "./CoinMarketItem"
import Storage from "../../libs/storage"

const CoinDetailScreen = ({navigation, route}) => {
  const {params} = route
  const [coin, setCoin] = useState(null)
  const [markets, setMarkets] = useState([])
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const {coin} = params
    navigation.setOptions({
      title: coin.symbol
    })
  }, [navigation])

  useEffect(() => {
    setCoin(params.coin)
    loadMarkets(params.coin.id)
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

  const loadMarkets = async coinId => {
    const url = `${API_HOST}coin/markets/?id=${coinId}`

    const markets = await get(url)

    setMarkets(markets)
  }

  const addFavorite = () => {
    const value = JSON.stringify(coin)
    const key = `favorite-${coin.id}`

    const stored = Storage.instance.store(key, value)

    if (stored) {
      setIsFavorite(true)
    }
  }

  const removeFavorite = () => {}

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite()
    } else {
      addFavorite()
    }
  }

  if (!coin) return null

  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <View style={styles.row}>
          <Image
            style={styles.iconImg}
            source={{uri: getSymbolIcon(coin.nameid)}}
          />
          <Text style={styles.titleText}>{coin.name}</Text>
        </View>

        <Pressable
          onPress={toggleFavorite}
          style={[
            styles.btnFavorite,
            isFavorite ? styles.btnFavoriteRemove : styles.btnFavoriteAdd
          ]}>
          <Text style={styles.btnFavoriteText}>
            {isFavorite ? "Remove favorite" : "Add favorite"}
          </Text>
        </Pressable>
      </View>

      <SectionList
        style={styles.section}
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

      <Text style={styles.marketsTitle}>Markets</Text>

      <FlatList
        style={styles.list}
        horizontal={true}
        data={markets}
        renderItem={({item}) => <CoinMarketItem item={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.charade,
    flex: 1
  },
  row: {
    flexDirection: "row"
  },
  subHeader: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  iconImg: {
    width: 25,
    height: 25
  },
  section: {
    maxHeight: 220
  },
  list: {
    maxHeight: 100,
    paddingLeft: 16
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
  },
  marketsTitle: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
    marginLeft: 16
  },
  btnFavorite: {
    padding: 8,
    borderRadius: 8
  },
  btnFavoriteText: {
    color: COLORS.white
  },
  btnFavoriteAdd: {
    backgroundColor: COLORS.picton
  },
  btnFavoriteRemove: {
    backgroundColor: COLORS.carmine
  }
})

export default CoinDetailScreen
