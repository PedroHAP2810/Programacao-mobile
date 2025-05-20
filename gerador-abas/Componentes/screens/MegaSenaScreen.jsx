
import { StyleSheet, View, ScrollView } from "react-native";
import React, { useState } from "react";
import { Card, Text, Button } from "react-native-paper";

export default function MegaSenaScreen() {
  const [jogoGerado, setJogoGerado] = useState([]);

  const [jogosMegaSena, setJogosMegaSena] = useState([]);

  function gerar() {
    const jogo = [];
    console.log(jogo);

    for (let i = 0; jogo.length < 6; i++) {
      const jogoAleatorio = Math.floor(Math.random() * 60) + 1;

      if (!jogo.includes(jogoAleatorio)) {
        jogo.push(jogoAleatorio);
      }
    }
    jogo.sort((a, b) => a - b);
    setJogoGerado(jogo);
    setJogosMegaSena([...jogosMegaSena, jogo]);
    console.log(jogo);
  }

  function resetar() {
    setJogoGerado([]);
    setJogosMegaSena([]);
  }
  return (
    <ScrollView>
      <View>
        <Card style={{ margin: 10 }}>
          <Card.Content>
            <Text variant="displaySmall">Jogo da Mega Sena</Text>
            <View style={styles.linhaNumeros}>
              {jogoGerado.map((numero, index) => (
                <View key={index} style={styles.bola}>
                  <Text style={styles.numeroTexto}>{numero} </Text>
                </View>
              ))}
            </View>
          </Card.Content>
          <Card.Actions>
            <Button mode="contained" onPress={gerar}>
              Sortear
            </Button>
            <Button mode="contained-tonal" onPress={resetar}>
              {" "}
              Limpar{" "}
            </Button>
          </Card.Actions>
        </Card>

        <Card style={{ margin: 10 }}>
          <Card.Content>
            <Text variant="headlineLarge">Resultados Anteriores</Text>
            <View>
              {jogosMegaSena.map((resultadoAnteriores, index) => (
               
                <View key={index} style={styles.linhaNumeros}>

                  {resultadoAnteriores.map((numero, i) => (
                    <View key={i} style={styles.bola}>
                      <Text style={styles.numeroTexto}>{numero}</Text>
                    </View>
                  ))}
                </View>
              ))}
            </View>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  bola: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    margin: 1,
  },
  numeroTexto: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  linhaNumeros: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 10,
  },
});
