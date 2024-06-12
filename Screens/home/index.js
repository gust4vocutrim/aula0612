import React from 'react';
import { Text, StyleSheet, View, Image,FlatList} from 'react-native';
import Navbar from '../../components/Navbar';
import Carousel from '../../components/Carousel';
import pecas from '../../data/pecas';
import notebooks from '../../data/notebooks';
import perifericos from '../../data/perifericos';
import Card from '../../components/Card';

export default function Home() {
  return (
    <View style={estilo.body}>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <View style={estilo.mainContent}>
        <View style={estilo.conteudoPecas}>
          <Text style={estilo.titulo}>As peças mais baratas do mercado!</Text>
          <FlatList style={estilo.cardContentLine}
            data={pecas}
            horizontal={true}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Card
                imgUrl={item.imgUrl}
                nome={item.nome}
                precoNormal={item.precoNormal}
                precoPromocao={item.precoPromocao}
                metodoPagamento={item.metodoPagamento}
              />
            )}
          />
        </View>
        <Text style={estilo.titulo}>Periféricos mais baratos do mercado!</Text>
        <FlatList style={estilo.cardContentLine}
          data={perifericos}
          horizontal={true}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card
              imgUrl={item.imgUrl}
              nome={item.nome}
              precoNormal={item.precoNormal}
              precoPromocao={item.precoPromocao}
              metodoPagamento={item.metodoPagamento}
            />
          )}
        />
        <Text style={estilo.titulo}>Os melhores notebook gamers!</Text>
        <FlatList style={estilo.cardContentLine}
          data={notebooks}
          horizontal={true}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card
              imgUrl={item.imgUrl}
              nome={item.nome}
              precoNormal={item.precoNormal}
              precoPromocao={item.precoPromocao}
              metodoPagamento={item.metodoPagamento}
            />
          )}
        />
      </View>
    </View>
    
    );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#CAF0F8',
    borderColor: '#90E0EF',
    paddingHorizontal: 20,
  }
});