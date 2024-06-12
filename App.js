import React from 'react';
import { Dimensions, Text, StyleSheet, View, Image, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/home';
import Details from './Screens/details';
const width = Dimensions.get('window').width;

export default function App() {
  const stack = createStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='Home' component={Home}></stack.Screen>
        <stack.Screen name='Details' component={Details}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>

    
  );
}
const estilo = StyleSheet.create({
  body: {
    backgroundColor: '#F5F5F5',
    width: '100%',
    height: '2300px',
  },
  titulo: {
    textAlign: 'center',
    fontSize: '2em',
    color: '#DB020A',
  },
  mainContent: {
    padding: '5px'
  },

  cardContentLine: {
    paddingTop: '15px',
    paddingBottom: '15px',
    paddingLeft: '12px',
    paddingRight: '12px',
  }
});



{/* <FlatList 
      data = {ROTINAS}
      horizontal ={true}
      keyExtractor = {(item)=>item.id}
      renderItem = {({item}) => (
        <Card 
        titulo = {item.titulo}
        descricao = {item.Descricao}
        porcentagem = {item.porcentagem}
        imagem ={item.imagem}
        />
      )}
      />  */}