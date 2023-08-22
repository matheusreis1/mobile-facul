import React, {useState} from "react"
import {View, Text, TextInput, Button} from "react-native"
import Result from "../result"


export default function IMCCalculator() {
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [messageImc, setMessageImc] = useState("preencha os dados")
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState("Calcular")
  
  function imcCalculator() {
    return setImc((weight/(height*height)).toFixed(2))
  }

  function validationImc(){
    if (weight != null && height != null) {
      imcCalculator()
      setMessageImc("seu IMC eh igual: ")
      setTextButton("Calcular Novamente")
      return
    }
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("preencha os dados")
  }

  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput
          onChangeText={setHeight}
          value={height}
          placeholder="Ex. 1.75"
          keyboardType="numeric" />
        <Text>Peso</Text>
        <TextInput 
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex. 70.10"
          keyboardType="numeric"/>
        <Button 
          onPress={() => validationImc()}
          title="Calcular IMC" />
        <Result messageResult={messageImc} result={imc} />
      </View>
    </View>
  )
}