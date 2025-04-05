
import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { Card, Text } from 'react-native-paper'
import Jogador from './Jogador'


export default function Time(props) {

  const { nome, anoFundacao, mascote, imagem, jogadores } = props

  return (
    <Card style={{ margin: 10 }}>
      <Card.Title title={nome} />
      <Card.Content>
        <Text> {anoFundacao} , {mascote} </Text>
      </Card.Content>
      <Card.Cover source={{ uri: imagem }} style={styles.cardImage}/>
      <Card.Actions>
        <FlatList
          horizontal
          data={jogadores}
          renderItem={({ item }) => (
           <Jogador
            nome={item.nome}
            imagem={item.imagem}
           />
          )}
        />
      </Card.Actions>
    </Card>
  )
}

const styles = StyleSheet.create({
    cardImage: {
        width: 250,
        height: 250, 
        alignSelf: 'center',  
      },
})
