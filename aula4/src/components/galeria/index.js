import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

const items = [
  {
    id: '01', title: 'Titulo 1', description: 'Descrição 1', image: 'https://picsum.photos/200/300',
  }, 
  {
    id: '02', title: 'Titulo 2', description: 'Descrição 2', image: 'https://picsum.photos/200/301',
  },
  {
    id: '03', title: 'Titulo 3', description: 'Descrição 3', image: 'https://picsum.photos/200/302',
  },
]

const Item = ({title, description, image}) => (
  <View style={styles.item}>
    <Text>{title}</Text>
    <Text>{description}</Text>
    <Image style={styles.image} source={{uri: image}} />
  </View>
);

export const Gallery = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={items}
        renderItem={({item}) => <Item title={item.title} image={item.image} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#ccc',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  image: {
    width: 50,
    height: 50,
  }
})
