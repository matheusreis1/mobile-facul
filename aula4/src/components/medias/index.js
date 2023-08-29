import React, {useState} from "react"
import { Button, Text, TextInput, View } from "react-native";
import Result from "../result";
import { globalStyle } from "../../styles";

export function CalculateScores() {
  const [score1, setScore1] = useState(0)
  const [score2, setScore2] = useState(0)
  const [messageResult, setMessageResult] = useState("preencha os dados")
  const [result, setResult] = useState(null)
  const [textButton, setTextButton] = useState("Calcular média")
  
  function scoreCalculator() {
    return setResult((+score1 + +score2) / 2)
  }

  function validationResult(){
    if (score1 != null && score2 != null) {
      scoreCalculator()
      setMessageResult("A média eh igual a: ")
      setTextButton("Calcular Novamente")
      return
    }
    setResult(null)
    setTextButton("Calcular")
    setMessageImc("preencha os dados")
  }

  return (
    <View style={globalStyle.mainView}>
      <View>
        <Text>Nota 1</Text>
        <TextInput
          onChangeText={setScore1}
          value={score1}
          placeholder="Ex. 10"
          keyboardType="numeric" />
        <Text>Nota 2</Text>
        <TextInput 
          onChangeText={setScore2}
          value={score2}
          placeholder="Ex. 8"
          keyboardType="numeric"/>
        <Button 
          onPress={() => validationResult()}
          title={textButton} />
        <Result messageResult={messageResult} result={result} />
      </View>
    </View>
  )
}