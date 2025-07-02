import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function NovaReceitaScreen({ navigation }) {
  const [titulo, setTitulo] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [modo, setModo] = useState('');

  const salvar = () => {
    // Aqui você pode usar AsyncStorage ou Context para persistir
    Alert.alert('Receita adicionada!', `${titulo}`);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Título" style={styles.input} value={titulo} onChangeText={setTitulo} />
      <TextInput placeholder="Ingredientes" style={styles.input} value={ingredientes} onChangeText={setIngredientes} multiline />
      <TextInput placeholder="Modo de Preparo" style={styles.input} value={modo} onChangeText={setModo} multiline />
      <Button title="Salvar Receita" onPress={salvar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding:  20 },

  input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 10, borderRadius: 5 },
});
