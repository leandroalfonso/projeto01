import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const produtos = [
  {
    id: '1',
    nome: 'Smartphone',
    preco: 2000
  },
  {
    id: '2',
    nome: 'Notebook',
    preco: 5000
  },
  {
    id: '3',
    nome: 'Tablet',
    preco: 1500
  }
];

function soma() {
  let total = 0;
  for (let i = 0; i < produtos.length; i++) {
    total += produtos[i].preco;
  }
  return total;
}

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Conteúdo do cabeçalho (se necessário) */}
        <Text style={styles.headerText}>Cabeçalho</Text>
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        style={styles.scrollView}
      >
        {produtos.map((produto) => (
          <View key={produto.id} style={styles.card}>
            <Text style={styles.text}>{produto.nome}</Text>
            <Text style={styles.text}>R$ {produto.preco}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.additionalContent}>
        {/* Conteúdo adicional */}
        <Text style={styles.text}>Exemplo de conteúdo adicional</Text>
      </View>
      <View style={styles.additionalContent}>
        {/* Conteúdo adicional */}
        <Text style={styles.text}>Exemplo de conteúdo adicional</Text>
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.text}>Total</Text>
        <Text style={styles.text}>R$ {soma()}</Text>
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.text}>Total</Text>
        <Text style={styles.text}>R$ {soma()}</Text>
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.text}>Total</Text>
        <Text style={styles.text}>R$ {soma()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    // Estilo para o cabeçalho (se necessário)
    backgroundColor: 'lightgray',
    padding: 16,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollView: {
    // Define o estilo da ScrollView, como largura, altura, etc.
    width: 300,
    height: 10,
    margin: 10,
  },
  additionalContent: {
    // Estilo para o conteúdo adicional entre a lista e o total
    backgroundColor: 'lightgray',
    padding: 16,
    alignItems: 'center',
  },
  totalContainer: {
    width: 300,
    height: 100,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    padding: 16,
    justifyContent: 'space-between',
    elevation: 3,
  },
  card: {
    width: 300,
    height: 100,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    padding: 16,
    justifyContent: 'space-between',
    elevation: 3,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
