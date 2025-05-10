import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Text, Card, Title, Paragraph, Button } from 'react-native-paper'




export default function EscudoScreen( {navigation, route}) {
  return (
   
    <ScrollView>
   <View>

      <Card>
      <Card.Content>
          <Title>O Escudo</Title>
          <Paragraph>Deixando para trás suas raízes italianas, apesar de optar pela permanência da cor azul em relação velada à Squadra Azzurra (Seleção Italiana de Futebol), o Cruzeiro decidiu homenagear o símbolo maior da pátria brasileira: a constelação do Cruzeiro do Sul, presente na bandeira nacional desde sua implementação em 19 de novembro de 1889.
        </Paragraph>
        <Paragraph>Assim nasceu o primeiro escudo do agora Cruzeiro Esporte Clube. Em formato de círculo, o emblema apresentava as cores azul e branca, com destaque para a constelação homenageada e o nome do clube ao seu redor. Ao longo dos anos, o escudo cruzeirense ainda passaria por outras seis mudanças.
        As principais foram a adoção do posicionamento do Cruzeiro do Sul como se vê a partir da Terra em 1959, o formato e disposição das cinco estrelas em 1996 e a adição de uma coroa sobre o escudo após a inesquecível conquista da Tríplice Coroa em 2003.
        A última atualização aconteceu há três anos, quando o clube celebrou o centenário de sua fundação e optou pela retirada da coroa e a adoção de uma tonalidade de azul para seguir o que era determinado pelo estatuto. O "novo" escudo do Cruzeiro conta com a cor azul correspondente ao Padrão Pantone 286 CVC.
        </Paragraph>       
        </Card.Content>
        <Card.Cover source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Cruzeiro_Esporte_Clube_%28logo%29.svg/2048px-Cruzeiro_Esporte_Clube_%28logo%29.svg.png'}}style={{ width: 300, height: 300, alignSelf: 'center' }} />
      </Card>

      <Card>
      <Card.Content>
          <Title>Um pouco da história</Title>
          <Paragraph>Fundado em 1921 em Belo Horizonte, Minas Gerais, é um dos clubes mais tradicionais e vitoriosos do futebol brasileiro. Originalmente chamado "Palestra Itália", o clube mudou seu nome para Cruzeiro em 1942 devido à Segunda Guerra Mundial, quando o uso de nomes ligados a países do Eixo foi proibido.</Paragraph>
          <Paragraph>Dos anos iniciais, datam os primeiros ídolos e conquistas do Palestra, como o tricampeonato estadual de 1928, 1929 e 1930, com uma equipe que contava com os lendários Ninão, Nininho, Bengala e Piorra.</Paragraph>
          <Paragraph>Em 1942, com a entrada do Brasil na 2ª Guerra Mundial, um decreto de lei do governo federal proibiu o uso de termos que remetem à Itália em entidades, instituições e estabelecimentos no Brasil. Com isso, o nome clube precisou ser renomeado e o escolhido foi Cruzeiro Esporte Clube, em homenagem ao símbolo maior da pátria brasileira.  Assim como o nome, o uniforme também sofreu mudanças. Antes verde e vermelho, em homenagem à bandeira italiana, o Clube adotou o azul e branco, inspirado pela seleção da Itália.</Paragraph>
          <Paragraph>Nas décadas seguintes, o que se viu foi o crescimento de um gigante, especialmente após a inauguração do Estádio Magalhães Pinto, o Mineirão, onde o Cruzeiro conquistou os principais títulos da história do futebol de Minas Gerais. Com craques como Tostão, Piazza, Dirceu Lopes, Raul, Zé Carlos, Palhinha, Joãozinho, o fenômeno Ronaldo, Sorín, Alex, Fábio e tantos outros; o time passou a ser um dos clubes brasileiros com maior número de conquistas nacionais e internacionais.</Paragraph>
          <Paragraph>Multi-campeão, o Cruzeiro possui dois títulos da Copa Libertadores (1976 e 1997), dois da Supercopa (1991 e 1992), um da Recopa (1999), um da Copa Ouro (1995) e um da Copa Master (1995). No âmbito nacional, o time azul foi quatro vezes campeão brasileiro (1966, 2003, 2013 e 2014) e, em seis outras ocasiões, conquistou a Copa do Brasil (1993, 1996, 2000, 2003, 2017 e 2018).

          Na temporada de 2003, o Cruzeiro Esporte Clube se tornou a primeira equipe do Brasil a conquistar a Tríplice Coroa, ao vencer na mesma temporada o Campeonato Mineiro, a Copa do Brasil e o Brasileirão.
          </Paragraph>  
          <Paragraph>Além dos títulos, o Cruzeiro é reconhecido mundialmente pela sua excelente estrutura e como um dos principais reveladores de talentos para o futebol, como aconteceu em relação a Ronaldo, Maicon, Gomes, Luisão, Wendell, Jussiê, Beletti e muitos outros.</Paragraph>      
        </Card.Content>
        <Card.Cover source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyPsLIarrlM0NUz7oU2VPTEtH2Jj8ZM-38vg&s'}}style={{ width: 440, height: 300, alignSelf: 'center' }} />
        <Card.Cover source={{ uri: 'https://ofutebolnewsreal.wordpress.com/wp-content/uploads/2020/06/cruzeirac3a7o.jpg?w=640'}}style={{ width: 440, height: 300, alignSelf: 'center' }} />
        <Card.Cover source={{ uri: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/12/cruzeiro_2003-e1701797219921.jpeg?w=600'}}style={{ width: 500, height: 300, alignSelf: 'center' }} />
        <Card.Cover source={{ uri: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2013/11/14/cruzeiro-rt.JPG'}}style={{ width: 440, height: 300, alignSelf: 'center' }} />
      </Card>

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
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'f5f5f',
    flex: 1,
    alignItems: 'center',
    paddingTop: 10
  }
})