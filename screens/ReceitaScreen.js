import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Card, Paragraph, Title } from 'react-native-paper';

export default function ReceitaScreen({ route, navigation }) {
  const { receita } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.titulo}>{receita.titulo}</Title>

          <Text style={styles.subtitulo}>Ingredientes: </Text>
          <Paragraph style={styles.texto}>{receita.ingredientes}</Paragraph>

          <Text style={styles.subtitulo}>Modo de preparo: </Text>
          <Paragraph style={styles.texto}>{receita.modo}</Paragraph>
        </Card.Content>
      </Card>

      <Button 
        icon="arrow-left"
        mode="outlined"
        onPress={() => navigation.goBack()}
        style={styles.botao}
      > 
        Voltar
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 20,
    alignItems: "center",
  },
  card:{
    width: "100%",
    maxWidth: 500,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitulo:{
    fontSize: 18,
    marginTop: 10,
    fontWeight: "600",
  },
  texto:{
    fontSize: 16,
    marginTop: 5,
    color: "#333",
  },
  botao:{
    marginTop: 10,
    alignSelf: "center",
    width: 150,
    borderRadius: 8,
  },
});
