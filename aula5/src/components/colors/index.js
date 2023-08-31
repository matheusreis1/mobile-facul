import React, { useState } from "react"
import { Button, FlatList, View } from "react-native";

export const ColorList = () => {
  const [colors, setColors] = useState([]);
  
  function addColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    setColors(prevColors => [...prevColors, `rgb(${r}, ${g}, ${b})`]);
  }

  return (
    <View>
      <Button title="Adiciona cor" onPress={() => addColor()} />
      <FlatList
        data={colors}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <View style={{ height: 100, width: 100, backgroundColor: item }} />
        )}
      />
    </View>
  )
}