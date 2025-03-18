import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {

const nome = "Pedro"

function alerta() {
  console.log("Clicou no botão")
}

  return (
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

      <Text>Cruzeiro!</Text>
      
      <Text>Bem vindo, {nome}</Text>

      <Text>{2 + 2}</Text>

      <Button title='Clique Aqui' onPress={alerta}></Button>
      </View>
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
