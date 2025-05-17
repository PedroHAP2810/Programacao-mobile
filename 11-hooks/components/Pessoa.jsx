
import React, { useState } from 'react'
import { View } from 'react-native'
import { Button, Card, Text } from 'react-native-paper'

export default function Pessoa() {

  const [pessoa, setPessoa] = useState({})

  function revelar(){
    const novaPessoa = {
      nome: "Lucas",
      idade: "32",
      imagem: "https://clicfolha.com.br/wp-content/uploads/2024/10/Lucas.jpeg"
    }
    setPessoa(novaPessoa)
  }

  function revelar2() {
    const novaPessoa = {
      nome: "Matheus",
      idade: "29",
      imagem: "https://otempo.scene7.com/is/image/sempreeditora/cruzeiro-cruzeiro-1726082170?qlt=90&ts=1728666101527&dpr=off"
    }
    setPessoa(novaPessoa)
  }

  return (
    <View>
      <Card>
        <Card.Content>
          <Text variant='displaySmall'>Componente Pessoa</Text>
          <Text variant='displaySmall'>Nome: {pessoa.nome}</Text>
          <Text variant='displaySmall'>Idade: {pessoa.idade}</Text>
          <Card.Cover source={{ uri: pessoa.imagem }} />
        </Card.Content>
        <Card.Actions>
          <Button onPress={revelar}>Revelar</Button>
          <Button onPress={revelar2}>Revelar2</Button>
        </Card.Actions>
      </Card>
    </View>
  )
}
