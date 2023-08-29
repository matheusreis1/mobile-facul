import React from "react"
import {Button, View} from "react-native"
import { globalStyle } from "../../styles"

export default function Main({ navigation }) {
  return (
    <View style={globalStyle.mainView}>
      <Button title="Ir para calculadora de IMC" onPress={() => navigation.navigate('IMC')} />
      <Button title="Ir para calculadora de medias" onPress={() => navigation.navigate('Medias')} />
      <Button title="Ir para galeria" onPress={() => navigation.navigate('Galeria')} />
      <Button title="Ir para cores" onPress={() => navigation.navigate('Cores')} />
      <Button title="Ir para gastos" onPress={() => navigation.navigate('Gastos')} />
    </View>
  )
}
