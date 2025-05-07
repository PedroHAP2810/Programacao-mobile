import React from 'react'
import { StyleSheet, Text, View, } from 'react-native'
import { Button, Card } from 'react-native-paper'

export default function ItemScreen({ navigation, route }) {

  console.log("RECEITA RECEBIDA => ", route.params.item)

  const receita = route.params.item

  return (
    <View>
      <Card>
        <Card.Content>
          <Text>Nome: {receita.nome}</Text>
          <Text>Tempo de Preparo: {receita.tempoPreparo}</Text>
          <Text>Porções: {receita.porcoes}</Text>
          <Card.Cover source={{ uri: receita.imagem }} style={{ marginBottom: 16 }} />
          <Text style={styles.section}> Ingredientes:</Text>
          {receita.ingredientes.map((item, index) => (
            <Text key={index}>° {item}</Text>
          ))}
          <Text tyle={styles.section}>Modo de Preparo:</Text>
          {receita.modoPreparo.map((item, index) => (
            <Text key={index}>° {item}</Text>
          ))}
        </Card.Content>
        <Card.Actions>
          <Button
            mode='contained-tonal'
            icon='arrow-left'
            onPress={() => navigation.goBack()}
          >
            Voltar
          </Button>
        </Card.Actions>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({})