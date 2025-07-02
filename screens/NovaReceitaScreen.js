import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native';
import { Button } from 'react-native-paper'; //Padronizando os outros arquivos

export default function NovaReceitaScreen({ navigation }) {
  const [titulo, setTitulo] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [modo, setModo] = useState("");

  const salvar = async() => {
   if(!titulo.trim()){
      Alert.alert("Erro", "O título da receita é obrigatório.");
      return;
   }

   const novaReceita = {
    id: Date.now().toString(),
      titulo,
      ingredientes,
      modo,
   };

   try{
    const dadosExistentes = await AsyncStorage.getItem("@receitas");
    const receitas =  dadosExistentes ? JSON.parse(dadosExistentes) : [];

    const atualizadas = [...receitas, novaReceita];
    await AsyncStorage.setItem("@receitas", JSON.stringify(atualizadas));

    Alert.alert("Receita adicionada", `A receita "${titulo}" foi salva.`);
    navigation.goBack();
   } catch(error) {
    console.error("Erro ao salvar a receita: ", error);
    Alert.alert("Erro", "Não foi possível salvar a receita.");
   }
      };

  return (
    <View style={styles.container}>
      <TextInput 
      placeholder="Título"
      style={styles.input}
      value={titulo}
      onChangeText={setTitulo}
      />
      <TextInput
       placeholder="Ingredientes"  
       style={styles.input} 
       value={ingredientes} 
       onChangeText={setIngredientes} 
       multiline 
       />
      <TextInput 
      placeholder="Modo de Preparo" 
      style={styles.input} 
      value={modo} 
      onChangeText={setModo} 
      multiline 
      />
      <Button 
      mode='contained'
      onPress={salvar}
      style={styles.botao}>Salvar Receita</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding:  20,
    alignItems: "center",
  },
  input: {
     borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    width: '100%',
    maxWidth: 500,
  },
  botao: {
    marginTop: 5,
    alignItems: "center",
    width: 100,
    borderRadius: 8,
  },    
});
