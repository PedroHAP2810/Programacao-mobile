import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function JavascriptComponente() {

    const nome = "Pedro"
    const idade = 21

    function checkMaiorIdade() {
        if (idade >= 18){
            return "Maior de Idade"
        } else {
            return "Menor de Idade"
        }
    }

    function alerta() {
        alert("Clicou no botão!!!")
    }

  return (
    <View>
      <Text>JavascriptComponente</Text>

      <Text>NOME: {nome}</Text>
      <Text>IDADE: {idade}</Text>
      <Text>IDADE+40: {idade + 40}</Text>
      <Text>É maior de idade? {checkMaiorIdade()}</Text>
      <Text>Check 18+: {idade >= 18? "18+" : "18-"}</Text>
      <Button title=''></Button>
    </View>
  )
}

const styles = StyleSheet.create({})