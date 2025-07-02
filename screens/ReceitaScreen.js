import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ReceitaScreen({ route }) {
  const { receita } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{receita.titulo}</Text>
      <Text style={styles.label}>Ingredientes:</Text>
      <Text>{receita.ingredientes}</Text>
      <Text style={styles.label}>Modo de Preparo:</Text>
      <Text>{receita.modo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  label: { fontWeight: 'bold', marginTop: 10 },
});
