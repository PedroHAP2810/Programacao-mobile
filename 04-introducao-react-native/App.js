import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

export default function App() {

const nome = "Pedro"

function alerta() {
  console.log("Clicou no botão")
}

  return (

    <ScrollView>
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image
       source={{
         uri: "https://clubesdocruzeiro.com.br/wp-content/uploads/2023/03/5.png"
      }}

      style={{
        height: 600,
        width: 400
      }}

      />

      <Text style={{fontSize: 50, fontStyle:'italic'}}>Cruzeiro!</Text>
      
      <Text>Bem vindo, {nome}</Text>

      <Text>{2 * 3} x {1*1}</Text>

      <Button title='Clique Aqui' onPress={alerta}></Button>

      <Image
       source={{
         uri: "https://medias.itatiaia.com.br/dims4/default/1a7d0e9/2147483647/strip/true/crop/2048x1153+0+0/resize/1000x563!/quality/90/?url=https%3A%2F%2Fk2-prod-radio-itatiaia.s3.us-east-1.amazonaws.com%2Fbrightspot%2F89%2Ffc%2Ff74dbe0e4cc9b9e978cb7c0ad14d%2Fcruzeiro-tentara-o-titulo-da-copa-sul-americana-em-2025.jpg"
      }}

      style={{
        height: 400,
        width: 400
      }}
      />
      </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue ',
    alignItems: 'center',
    justifyContent: 'start',
  },
}); 
