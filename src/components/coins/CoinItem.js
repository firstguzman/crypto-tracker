import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  TouchableWithoutFeedback
} from "react-native"
import React from "react"
import {COLORS} from "../../utils/constants"
import {useNavigation} from "@react-navigation/native"

const CoinItem = ({item}) => {
  const navigation = useNavigation()

  const getImgArrow = () => {
    if (item.percent_change_1h > 0) {
      return require("../../assets/arrow_up.png")
    } else {
      return require("../../assets/arrow_down.png")
    }
  }

  const goToDetail = () => {
    navigation.navigate("CoinDetail", {coin: item})
  }

  return (
    <TouchableWithoutFeedback onPress={goToDetail}>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.symbolText}>{item.symbol}</Text>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.priceText}>{`$${item.price_usd}`}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.percent}>{item.percent_change_1h}</Text>
          <Image style={styles.imgIcon} source={getImgArrow()} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    borderBottomColor: COLORS.zircon,
    borderBottomWidth: 1,
    marginLeft: Platform.OS === "ios" ? 16 : 0
  },
  row: {
    flexDirection: "row"
  },
  symbolText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 12
  },
  nameText: {
    color: COLORS.white,
    fontSize: 14,
    marginRight: 16
  },
  priceText: {
    color: COLORS.white,
    fontSize: 14
  },
  percent: {
    color: COLORS.white,
    fontSize: 12,
    marginRight: 8
  },
  imgIcon: {
    width: 22,
    height: 22
  }
})

export default CoinItem
