import { StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
  },
  inputLabel: {
    fontWeight: 'bold', 
    fontSize: 15, 
    marginBottom: 5
  }
});
