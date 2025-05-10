import { StyleSheet, View, FlatList, ScrollView } from 'react-native'
import {Text, Card, Button, Title, Paragraph} from 'react-native-paper'
import React from 'react'

export default function JogadoresScreen( {navigation, route}) {
  
  const jogadores = [
    {
    nome: "Gabriel Barbosa",
    numero: 9,
    imagem: "https://medias.itatiaia.com.br/dims4/default/9ac73fb/2147483647/strip/true/crop/640x360+0+0/resize/1000x563!/quality/90/?url=https%3A%2F%2Fk2-prod-radio-itatiaia.s3.us-east-1.amazonaws.com%2Fbrightspot%2F0c%2Fb9%2Fbb4e41fd4d5ab184c38b7271a658%2Fgabriel-barbosa-o-gabigol-artilheiro-do-cruzeiro-e-do-campeonato-mineiro.jpg"
    },
    {
    nome: "Matheus Pereira",
    numero: 10,
    imagem: "https://s2-ge.glbimg.com/1Y3VQ40Wcrq5sVjkyW-K_5zUPoU=/0x0:1638x2048/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/D/V/LVOlBbQYqbKIA9z8kY9Q/53842599443-ae9bf480e2-k.jpg"
    },
    {
    nome: "Dudu",
    numero: 7,
    imagem: "https://www.centraldatoca.com.br/wp-content/uploads/2025/03/Dudu-1-1-696x418.jpg"
    },
    {
    nome: "Fabricio Bruno",
    numero: 15,
    imagem: "https://www.diarioceleste.com.br/wp-content/uploads/2025/01/FABRICIO-BRUNO-CRUZEIRO-1.jpg"
    },
    {
    nome: "Kaio Jorge",
    numero: 19,
    imagem: "https://s2-ge.glbimg.com/_1eFiChfbgQsi7ooGtU6qwgVY1k=/0x0:3000x2000/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/p/p/LAaUoWRaihuoOAd2YeWA/54088215442-a748d5ee18-o.jpg"
    },
    ];


return (

  <ScrollView>
  <View style={styles.container}>

  <Text variant='displaySmall'>Lista de Jogadores</Text>

  <FlatList
    data={jogadores}
    renderItem={({ item }) => (
      <Card style={styles.card}>
      <Card.Cover source={{ uri: item.imagem }} />
      <Card.Content>
        <Title>{item.nome}</Title>
        <Paragraph>Número: {item.numero}</Paragraph>
      </Card.Content>
    </Card>
    )}
  />

<Button
      mode='contained-tonal'
      onPress={() => {
        navigation.openDrawer()
        setTimeout(() => navigation.closeDrawer(), 3000)
      }}
      >
        MENU
      </Button>
</View>
</ScrollView>
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

