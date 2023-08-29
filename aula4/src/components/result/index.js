import { Text, View } from "react-native";

export default function Result(props) {
  return (
    <View>
      <Text>{props.result}</Text>
      <Text>{props.messageResult}</Text>
    </View>
  )
}