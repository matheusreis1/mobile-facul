import React from "react"
import {View} from "react-native"
import IMCCalculator from "../imc"
import { CalculateScores } from "../medias"

export default function Main() {
  return (
    <View>
      <IMCCalculator />
      <CalculateScores />
    </View>
  )
}
