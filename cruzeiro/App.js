import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView } from 'react-native';

export default function App() {

  function alerta() {
    alert("Gol do Cabuloso !!!")
  }
  
  return (

    <ScrollView>
    <View style={styles.container}>
      <Text style={{fontSize: 50, fontStyle:'italic'}}>Cruzeiro!</Text>
      <Text>Maior de Minas</Text>
      <Image
       source={{
         uri: "https://clubesdocruzeiro.com.br/wp-content/uploads/2023/03/5.png"
      }}

      style={{
        height: 250,
        width: 200
      }}
      />

      <Button title='GOL' onPress={alerta}></Button>

      <Text style={{fontSize: 30, fontStyle:'italic'}}>Gabigol</Text>
      <Image
       source={{
         uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1dOTVi9Y1xwr90MN9AxViQ3Ii2FdWMIGNsA&s"
      }}

      style={{
        height: 250,
        width: 400
      }}
      />
      <Text>Artilheiro do Brasil em 2025</Text>

      <Text style={{fontSize: 28, fontStyle:'italic'}}>Dudu</Text>
      <Image
       source={{
         uri: "https://library.sportingnews.com/styles/crop_style_16_9_desktop/s3/2025-01/GettyImages-2191818146.jpg?h=4a631906&itok=5rTL91ug"
      }}

      style={{
        height: 250,
        width: 400
      }}
      />
      <Text>Líder em dribles bem sucedidos na temporada 2025</Text>

      <Text style={{fontSize: 26, fontStyle:'italic'}}>Matheus Pereira</Text>
      <Image
       source={{
         uri: "https://s2-ge.glbimg.com/1Y3VQ40Wcrq5sVjkyW-K_5zUPoU=/0x0:1638x2048/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/D/V/LVOlBbQYqbKIA9z8kY9Q/53842599443-ae9bf480e2-k.jpg"
      }}

      style={{
        height: 450,
        width: 400
      }}
      />
      <Text>Líder em assistencias no futebol brasileiro em 2025</Text>

      <Text style={{fontSize: 24, fontStyle:'italic'}}>Bolasie</Text>
      <Image
       source={{
         uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKsKkJvekfZT8DUYaWjvsclTxI5dyzwQKolA&s"
      }}

      style={{
        height: 450,
        width: 400
      }}
      />
      <Text>100% de aproveitamento em cruzamentos no Brasileirão 2025</Text>


      <Text style={{fontSize: 22, fontStyle:'italic'}}>Lucas Romero</Text>
      <Image
       source={{
         uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKyYvBdRHuVAFBokCgV6qcIqjFn16I9ABhJQ&s"
      }}

      style={{
        height: 450,
        width: 400
      }}
      />
      <Text>Líder em desarmes na Copa do Brasil 2025</Text>

      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});