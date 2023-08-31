import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { items } from "./items";
import React, { useState, useEffect } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: 'white',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
  },
});

const Item = ({ image }) => {
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    Image.getSize(image, (width, height) => {
      setImageDimensions({ width, height });
    });
  }, [image]);

  const itemStyle = {
    width: imageDimensions.width,
    height: imageDimensions.height + 40,
  };

  return (
    <View style={[styles.item, itemStyle]}>
      <Image style={{ width: imageDimensions.width, height: imageDimensions.height }} source={{ uri: image }} />
    </View>
  )
};

export const Gallery = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={items}
        renderItem={({ item }) => <Item id={item.id} description={item.description} image={item.image} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
};
