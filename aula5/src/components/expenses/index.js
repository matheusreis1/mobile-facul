import React, { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native"
import { globalStyle } from "../../styles";

const style = StyleSheet.create({
  total: {
    fontSize: 32,
  }, 
  expenseItem: {
    backgroundColor: '#ccc',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  }
})

const ExpenseItem = ({title, value}) => (
  <View style={style.expenseItem}>
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
    <View style={globalStyle.mainView}>
      <View style={globalStyle.row}>
        <View>
          <Text style={globalStyle.inputLabel}>Novo gasto</Text>
          <TextInput
            style={globalStyle.input}
            onChangeText={setCurrentDescription}
            value={currentDescription}
            placeholder="Ex. Farmácia"
            keyboardType="text" />
        </View>
        <View>
          <Text style={globalStyle.inputLabel}>Valor</Text>
          <TextInput
            style={globalStyle.input}
            onChangeText={setCurrent}
            value={current}
            placeholder="Ex. 12"
            keyboardType="numeric" />
        </View>
      </View>
      <Button title="Adicionar" onPress={() => calculateTotal()} />
      <FlatList 
        data={expenses}
        renderItem={({item}) => <ExpenseItem value={item.value} title={item.title} />}
      />
      <Text style={style.total}>Total: R$ {total}</Text>
    </View>
  )
};
