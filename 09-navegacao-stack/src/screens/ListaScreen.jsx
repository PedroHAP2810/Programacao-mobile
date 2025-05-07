import React from 'react'
import { FlatList, StyleSheet, Text, View} from 'react-native'
import { Card,  Button } from 'react-native-paper'


export default function ListaScreen({ navigation, route }) {

    const carros = [
        {
        nome: "Palio",
        ano: "1998",
        cor: "Azul Claro",
        fabricante: "Fiat",
    },
    {
        nome: "Opala",
        ano: "1982",
        cor: "Preto",
        fabricante: "Chevrolet",
    },
    {
        nome: "Voyage",
        ano: "2013",
        cor: "Branco",
        fabricante: "Volkswagen",
    },
]

  return (
    <View>
      <FlatList
      data={carros}
      renderItem={({item}) => (
        <Card style={{ margin: 10}}>
            <Card.Content>
                <Text>Carro: {item.nome}</Text>
            </Card.Content>
            <Card.Actions>
                <Button
                    mode='contained'
                    icon='arrow-right'
                    onPress={() => navigation.navigate('ItemScreen', {item})}                
                >
                    Ver Detalhes
                </Button>
            </Card.Actions>
        </Card>
      )}
      />
    </View>
  )
}

const styles = StyleSheet.create({})