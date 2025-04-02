import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View, FlatList } from 'react-native';
import { PaperProvider, Card, Title, Paragraph, Text, Divider, Button } from 'react-native-paper';

export default function App() {

  const lista = ["uva", "maça", "banana", "laranja"]
  return (                                                                                 
  <PaperProvider>
    <ScrollView>
    <View style={styles.container}>
        <StatusBar style='auto' />

        <Button mode='contained'>Clique AQUI!</Button>
        <Button mode='contained-tonal'>Clique AQUI!</Button>
        <Button mode='elevated'>Clique AQUI!</Button>
        <Button mode='outline'>Clique AQUI!</Button>
        <Button mode='text'>Clique AQUI!</Button>

        <Text>Uva</Text>
        <Divider></Divider>
        <Text>maça</Text>
        <Divider></Divider>
        <Text>banana</Text>
        <Divider></Divider>
        <Text>laranja</Text>
        <Divider></Divider>

      <Text variant='titleLarge'>Um texto qualquer</Text>
      <Text variant='headlineLarge'>Um texto qualquer</Text>
      <Text variant='displayLarge'>Um texto qualquer</Text>

        <Card>
          <Card.Content>
            <Title>Título do Card</Title>
            <Paragraph>Um paragrafo qualquer Um paragrafo qualquer Um paragrafo qualquer
            Um paragrafo qualquer Um paragrafo qualquerUm paragrafo qualquer Um paragrafo qualquer
            Um paragrafo qualquer Um paragrafo qualquer Um paragrafo qualquer Um paragrafo qualquer
            Um paragrafo qualquer</Paragraph>
          </Card.Content>
          <Card.Cover source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSidUgwfrZ9oSkrdsbRe6wOrpOSkvLRWcpPbg&s"}}/>
        </Card>

        <Card>
          <Card.Content>
            <Title>Título do Card</Title>
            <Paragraph>Um paragrafo qualquer Um paragrafo qualquer Um paragrafo qualquer
            Um paragrafo qualquer Um paragrafo qualquerUm paragrafo qualquer Um paragrafo qualquer
            Um paragrafo qualquer Um paragrafo qualquer Um paragrafo qualquer Um paragrafo qualquer
            Um paragrafo qualquer</Paragraph>
          </Card.Content>
          <Card.Cover source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSidUgwfrZ9oSkrdsbRe6wOrpOSkvLRWcpPbg&s"}}/>
        </Card>

        {
          lista.map(
            (fruta) => <Text>{fruta}</Text>
          )
        }

        <FlatList
         data={lista}
         renderItem={({ item}) => <Text>{item}</Text>}
        />

        <FlatList
          data={lista}
          renderItem={({ item}) => (
            <View>
              <Text>{item}</Text>
              <Divider />
            </View>
          )}
        />

    </View>
    </ScrollView>
  </PaperProvider>




  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
