import React, { useState } from "react";
import {
  Button,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function HomeScreen({ navigation }) {
  const [receitas, setReceitas] = useState([
    {
      id: "1",
      titulo: "Bolo de Cenoura",
      ingredientes: "300gr cenoura, 3 ovos, 180ml de óleo, 1 e 1/2 de xícara de açúcar, 2 xícaras de farinha de trigo, 1 colher de sopa de fermento em pó.",
      modo: "Misture tudo e asse por 40 minutos.",
    },
    {
      id: "2",
      titulo: "Panqueca",
      ingredientes: "farinha, leite, ovo...",
      modo: "Misture e frite na frigideira.",
    },
  ]);

 return (
    <FlatList
      data={receitas}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      ListHeaderComponent={
        <View>
          <Image
            source={require("../assets/capa.png")}
            style={styles.imagemCapa}
          />
          <Text style={styles.titulo}>Bem-vindo ao Livro de Receitas!</Text>
        </View>
      }
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("Receita", { receita: item })}
        >
          <Text style={styles.item}>{item.titulo}</Text>
        </TouchableOpacity>
      )}
      ListFooterComponent={
        <View style={styles.buttonContainer}>
          <Button
            title="Adicionar Receita"
            onPress={() => navigation.navigate("Nova Receita")}
          />
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: width > 600 ? 40 : 20,
    paddingVertical: 20,
    maxWidth: 800,
    alignSelf: 'center',
  },
  imagemCapa: {
    width: "100%",
    height: 250,
    resizeMode: "contain",
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  item: {
    fontSize: 20,
    paddingVertical: 10,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 20,
    width: "100%",
    maxWidth: 400,
  },
});
