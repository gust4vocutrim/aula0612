import React from 'react';
import { Text, StyleSheet, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Navbar from '../../components/Navbar';

export default function Details() {
  const route = useRoute();

  return (
    <View style={styles.container}>
    <Navbar></Navbar>
      <Text style={styles.title}>{route.params.nome}</Text>
      <Image style={styles.img} source={route.params.imgUrl} />
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{route.params.precoNormal}</Text>
        <Text style={styles.promoPrice}>{route.params.precoPromocao}</Text>
      </View>
      <Text style={styles.paymentMethod}>{route.params.metodoPagamento}</Text>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Botão Comprar pressionado')}>
        <Text style={styles.buttonText}>Comprar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
    margin: 10,
  },
  img: {
    width: 200,
    height: 250,
    marginBottom: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: '#333',
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  promoPrice: {
    fontSize: 18,
    color: '#E74C3C',
    fontWeight: 'bold',
  },
  paymentMethod: {
    fontSize: 16,
    color: '#555',
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin: 15,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
