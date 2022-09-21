import {View, TextInput, Platform, StyleSheet} from "react-native"
import React, {useState} from "react"
import {COLORS} from "../../utils/constants"

const CoinSearch = ({onChange}) => {
  const [query, setQuery] = useState("")

  const handleChangeText = query => {
    setQuery(query)

    if (onChange) {
      onChange(query)
    }
  }

  return (
    <View>
      <TextInput
        style={[
          styles.textInput,
          Platform.OS === "ios" ? styles.textInputIOS : styles.textInputAndroid
        ]}
        onChangeText={handleChangeText}
        value={query}
        placeholder="Search coin"
        placeholderTextColor={COLORS.white}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    height: 46,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    paddingLeft: 16,
    color: COLORS.white
  },
  textInputAndroid: {
    borderBottomWidth: 2,
    borderBottomColor: COLORS.zircon
  },
  textInputIOS: {
    margin: 8,
    borderRadius: 8
  }
})

export default CoinSearch
