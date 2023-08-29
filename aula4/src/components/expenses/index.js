import React, { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native"

const style = StyleSheet.create({
  total: {
    fontSize: 32,
  }, 
  expeseItem: {
    backgroundColor: '#ccc',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  }
})

const ExpenseItem = ({title, value}) => (
  <View style={style.expeseItem}>
    <Text>{title}</Text>
    <Text>{value}</Text>
  </View>
);

export const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);
  const [current, setCurrent] = useState(0);
  const [currentDescription, setCurrentDescription] = useState("");

  function calculateTotal () {
    setExpenses(prevExpenses => [...prevExpenses, {title: currentDescription, value: current}]);
    setTotal(prevTotal => +prevTotal + +current);
    setCurrent(0);
    setCurrentDescription("");
  }

  return (
    <View>
      <Text>Novo gasto</Text>
      <TextInput
        onChangeText={setCurrentDescription}
        value={currentDescription}
        placeholder="Ex. Farmácia"
        keyboardType="text" />
      <TextInput
        onChangeText={setCurrent}
        value={current}
        placeholder="Ex. 12"
        keyboardType="numeric" />
      <Button title="Adicionar" onPress={() => calculateTotal()} />
      <FlatList 
        data={expenses}
        renderItem={({item}) => <ExpenseItem value={item.value} title={item.title} />}
      />
      <Text style={style.total}>Total: R$ {total}</Text>
    </View>
  )
};
