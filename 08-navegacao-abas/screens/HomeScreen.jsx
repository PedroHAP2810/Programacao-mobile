import { StyleSheet, View } from 'react-native'
import {Text, Card, Paragraph, Title} from 'react-native-paper'
import React from 'react'

export default function HomeScreen() {
  return (
    
    
    <View>
      <Text variant='headlineLarge' style={{ textAlign: 'center'}}>Tela de Inicio</Text>

      <Card>
      <Card.Content>
          <Title>Um titulo</Title>
          <Paragraph>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum</Paragraph>        
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700'}}/>
      </Card>

      <Card>
      <Card.Content>
          <Title>Um titulo</Title>
          <Paragraph>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum</Paragraph>        
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700'}}/>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'fff',
    flex: 1,
    alignItems: 'center',
    paddingTop: 10
  }
})