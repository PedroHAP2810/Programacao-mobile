
import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Card } from 'react-native-paper';

export default function Jogador(props) {

  const { nome, numero, imagem } = props

  return (
    <Card>
    <Card.Title
      title={nome}
      left={(props) => <Avatar.Image {...props} source={{ uri: imagem }} />}
    />
   {/*  <Card.Content>
   <Text>Camisa: {numero} </Text>
    </Card.Content> */}
    </Card>
  )
}

const styles = StyleSheet.create({})
