import {View, Text, Button} from "react-native";
import React from "react";
import {useNavigation} from "@react-navigation/native";

const CoinsScreen = props => {
  const navigation = useNavigation();
  const handlePress = () => {
    console.log("Go to details", props);
    navigation.navigate("CoinDetail");
  };
  return (
    <View>
      <Text>CoinsScreen</Text>
      <Button title="Go to detail" onPress={handlePress} />
    </View>
  );
};

export default CoinsScreen;
