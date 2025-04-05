import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { PaperProvider, Text } from 'react-native-paper';
import Time from './componentes/Time';

export default function App() {

  const times = [
    {
    nome: "Flamengo",
    anoFundacao: 1895,
    mascote: "Urubu",
    imagem: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
    jogadores: [
    { nome: "Gabriel Barbosa", numero: 9, imagem: "https://i.pinimg.com/474x/1d/9f/5d/1d9f5de58831c9913f925a7155bdc7da.jpg" },
    { nome: "Arrascaeta", numero: 14, imagem: "https://i.pinimg.com/474x/cf/ad/d9/cfadd92de5e581ac5505e3d325f8b9b2.jpg" },
    { nome: "Everton Ribeiro", numero: 7, imagem: "https://i.pinimg.com/236x/39/1a/27/391a275fb7e0b018f2900f0f9fc9331b.jpg" },
    { nome: "David Luiz", numero: 23, imagem: "https://i.pinimg.com/474x/98/79/9b/98799b86107a87b79dc9b15cf778fa4a.jpg" },
    { nome: "Pedro", numero: 21, imagem: "https://i.pinimg.com/474x/79/e6/18/79e6185649fa3667b3ed3beef3e1ae94.jpg" },
    ],
    },
    {
    nome: "Palmeiras",
    anoFundacao: 1914,
    mascote: "Porco",
    imagem: "https://i.pinimg.com/236x/d7/e3/66/d7e36650f858c03c2366721ba3d01ce3.jpg",
    jogadores: [
    { nome: "Dudu", numero: 7, imagem: "https://i.pinimg.com/474x/72/96/9b/72969b2d84fb0ab80f31b571267f142f.jpg" },
    { nome: "Rony", numero: 10, imagem: "https://i.pinimg.com/236x/c9/3d/82/c93d82c6592ece32d02c4b7b8d10806f.jpg" },
    { nome: "Gustavo Gómez", numero: 15, imagem: "https://i.pinimg.com/474x/6f/c6/55/6fc655734d82e5dfe73d6a6364a2e5c9.jpg" },
    { nome: "Weverton", numero: 1, imagem: "https://i.pinimg.com/474x/98/15/b2/9815b2742d1d3f1733e8bf556f8132f1.jpg" },
    { nome: "Raphael Veiga", numero: 23, imagem: "https://i.pinimg.com/474x/94/6a/d6/946ad6271c4771121792f110591c9ff7.jpg" },
    
    ],
    },
    {
    nome: "Corinthians",
    anoFundacao: 1910,
    mascote: "Mosqueteiro",
    imagem: "https://i.pinimg.com/236x/01/1f/31/011f317c76941ce53a2addcc9cfbf84a.jpg",
    jogadores: [
    { nome: "Cássio", numero: 12, imagem: "https://i.pinimg.com/474x/49/8b/3a/498b3ac42d968a8c922768cb0d60aeed.jpg" },
    { nome: "Fagner", numero: 23, imagem: "https://i.pinimg.com/236x/27/07/c4/2707c483af98483a99778aa0fa771384.jpg" },
    { nome: "Renato Augusto", numero: 8, imagem: "https://i.pinimg.com/236x/bb/3e/82/bb3e820b7e132499c288e150e18cc642.jpg" },
    { nome: "Yuri Alberto", numero: 9, imagem: "https://i.pinimg.com/474x/7d/bd/e0/7dbde00eb2ef3c90d0b04265d36e948b.jpg" },
    { nome: "Róger Guedes", numero: 10, imagem: "https://i.pinimg.com/236x/be/1e/98/be1e98923926d8078594c5e8856f3f7f.jpg" },
    ],
    },
    {
    nome: "Cruzeiro",
    anoFundacao: 1921,
    mascote: "Raposa",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Cruzeiro_Esporte_Clube_%28logo%29.svg/2048px-Cruzeiro_Esporte_Clube_%28logo%29.svg.png",
    jogadores: [
    { nome: "Dudu", numero: 7, imagem: "https://s2-ge.glbimg.com/NoCKDrwXRnvlwjsnHhaVZLVBHNg=/0x0:1638x2048/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2025/W/H/BUiQ4wQCyl1zxxqcmHBA/54303478134-840f7f8e20-k.jpg" },
    { nome: "Lucas Romero", numero: 29, imagem: "https://s2-ge.glbimg.com/FJrtpqb8CHO_OTPV65SOcMRTjLI=/0x0:3000x1997/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/L/3/mbBOmXSn2x1IWArBbSXQ/cruzeiro-x-alianza-sul-americana.jpg" },
    { nome: "Cassio", numero: 1, imagem: "https://conteudo.imguol.com.br/c/esporte/c9/2024/08/15/cassio-goleiro-do-cruzeiro-grita-durante-jogo-contra-o-boca-juniors-pela-sul-americana-1723773456911_v2_1280x1920.jpg" },
    { nome: "Bolasie", numero: 11, imagem: "https://www.hojeemdia.com.br/image/policy:1.1048540.1736776166:1736776166/image.jpg?w=1280&" },
    { nome: "Gabriel Barbosa", numero: 9, imagem: "https://s2-ge.glbimg.com/Ky24CzIZlHDMlHPM1Vi1_oVX8ds=/0x0:3000x2000/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2025/F/A/hQlbeoQC20Tf0NmmpISA/agif25032919024830.jpg" },
    ],
    },
    ];


  return (
    <PaperProvider>
      <View style={styles.container}>
      <StatusBar style="auto" />

      <Text variant='displaySmall'>Lista de Times</Text>

      <FlatList
        data={times}
        renderItem={({ item }) => (
          <Time
          nome={item.nome}
          anoFundacao={item.anoFundacao}
          mascote={item.mascote}
          imagem={item.imagem}
          jogadores={item.jogadores}
          />
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
  },
});
