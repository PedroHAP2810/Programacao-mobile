import { StyleSheet, View, ScrollView } from "react-native";
import React, { useState } from "react";
import { Card, Text, Button } from "react-native-paper";

export default function MegaSenaScreen() {
  const [jogoGerado, setJogoGerado] = useState([]);
  const [jogosMegaSena, setJogosMegaSena] = useState([]);

  function gerar() {
    const jogo = [];

    for (let i = 0; jogo.length < 6; i++) {
      const jogoAleatorio = Math.floor(Math.random() * 60) + 1;
      if (!jogo.includes(jogoAleatorio)) {
        jogo.push(jogoAleatorio);
      }
    }

    jogo.sort((a, b) => a - b);
    setJogoGerado(jogo);
    setJogosMegaSena([...jogosMegaSena, jogo]);
  }

  function resetar() {
    setJogoGerado([]);
    setJogosMegaSena([]);
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.mainContainer}>
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="displaySmall" style={styles.titulo}>
              Jogo da Mega Sena
            </Text>
            <View style={styles.linhaNumeros}>
              {jogoGerado.map((numero, index) => (
                <View key={index} style={styles.bola}>
                  <Text style={styles.numeroTexto}>{numero}</Text>
                </View>
              ))}
            </View>
          </Card.Content>
          <Card.Actions style={styles.botoes}>
            <Button mode="contained" onPress={gerar} style={styles.botaoSortear}>
              Sortear
            </Button>
            <Button mode="outlined" onPress={resetar} style={styles.botaoLimpar}>
              Limpar
            </Button>
          </Card.Actions>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="headlineLarge" style={styles.subtitulo}>
              Resultados Anteriores
            </Text>
            <View style={styles.listaResultados}>
              {jogosMegaSena.map((resultadoAnteriores, index) => (
                <View key={index} style={styles.linhaNumeros}>
                  {resultadoAnteriores.map((numero, i) => (
                    <View key={i} style={styles.bolaHistorico}>
                      <Text style={styles.numeroTextoHistorico}>{numero}</Text>
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
  scrollContainer: {
    paddingVertical: 16,
    backgroundColor: "#FAFAFA",
  },
  mainContainer: {
    paddingHorizontal: 10,
  },
  card: {
    marginVertical: 10,
    borderRadius: 12,
    elevation: 3,
    backgroundColor: "#FFFFFF",
  },
  titulo: {
    textAlign: "center",
    marginBottom: 8,
    color: "#2E7D32",
  },
  subtitulo: {
    textAlign: "left",
    marginBottom: 8,
    color: "#1A237E",
  },
  linhaNumeros: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 10,
  },
  bola: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#00897B",
    justifyContent: "center",
    alignItems: "center",
    margin: 4,
  },
  bolaHistorico: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#B2DFDB",
    justifyContent: "center",
    alignItems: "center",
    margin: 3,
  },
  numeroTexto: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  numeroTextoHistorico: {
    color: "#004D40",
    fontSize: 16,
    fontWeight: "600",
  },
  botoes: {
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 12,
  },
  botaoSortear: {
    flex: 1,
    marginRight: 8,
  },
  botaoLimpar: {
    flex: 1,
    marginLeft: 8,
  },
  listaResultados: {
    marginTop: 8,
  },
});
