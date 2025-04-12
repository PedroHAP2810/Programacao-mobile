import { StyleSheet, View } from 'react-native'
import {Text, Card, Paragraph, Title} from 'react-native-paper'
import React from 'react'
import { PaperProvider} from 'react-native-paper'
import { StatusBar } from 'expo-status-bar';
import { FlatList } from 'react-native';

export default function TitulosScreen() {

    const titulos = [
        {
        nome: "Campeonato Brasileiro",
        anos: [1966, 2003, 2013, 2014],
        imagem: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2014/12/07/cruzeirofestafabiocristianemattosfp.jpg"
        },
        {
        nome: "Copa Libertadores da América",
        anos: [1976, 1997],
        imagem: "https://esportenewsmundo.com.br/wp-content/uploads/2021/08/campeones.jpg"
        },
        {
        nome: "Copa do Brasil",
        anos: [1993, 1996, 2000, 2003, 2017, 2018],
        imagem: "https://conteudo.imguol.com.br/c/esporte/65/2017/09/28/cruzeiro-ergue-a-taca-como-campeao-da-copa-do-brasil-2017-1506569504458_615x300.jpg"
        },
        {
        nome: "Supercopa Libertadores",
        anos: [1991, 1992],
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQQEaTkPxz-XhmBe7lWz08uTnrr7vYIEMmTw&s"
        },
        {
        nome: "Recopa Sulamericana",
        anos: [1998],
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk7JGpd-XB5ULJuCG876lfGTog6TOEscSAdw&s"
        },
        ];


  return (
    
    <PaperProvider>
      <View style={styles.container}>
      <StatusBar style="auto" />

      <Text variant='displaySmall'>Lista de títulos</Text>

      <FlatList
        data={titulos}
        renderItem={({ item }) => (
          <Card style={styles.card}>
          <Card.Cover source={{ uri: item.imagem }} />
          <Card.Content>
            <Title>{item.nome}</Title>
            <Paragraph>Anos que conquistou: {item.anos.join(', ')}</Paragraph>
          </Card.Content>
        </Card>
        )}
      />
    </View>
    </PaperProvider>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
  },
  Card: {
    marginBottom: 15,
    width: '90%',
  },
});