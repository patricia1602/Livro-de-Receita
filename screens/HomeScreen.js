import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { useState, useCallback } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import { Button as PaperButton } from "react-native-paper";

const { width } = Dimensions.get("window");

export default function HomeScreen({ navigation }) {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState("");
  const [ receitas, setReceitas] = useState([]);

  // Carrega receitas do AsyncStorage sempre que a tela voltar ao foco
   useFocusEffect(
    useCallback(() => {
      const carregarReceitas = async () => {
        try {
          const dados = await AsyncStorage.getItem("@receitas");
          const lista = dados ? JSON.parse(dados) : [];
          setReceitas(lista);
        } catch (error) {
          console.error("Erro ao carregar receitas:", error);
        }
      };

      carregarReceitas();
    }, [])
  );

  const receitasFiltradas = receitas.filter((r) =>
    r.titulo.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <ImageBackground 
    source={require("../assets/image.jpg")} //Coloque sua imagem
    style={styles.background}
    resizeMode="cover"
    >
    <View style={styles.container}>
      <Image source={require("../assets/image.jpg")} style={styles.imagemCapa} />
      <Text style={styles.titulo}>Livro de Receitas</Text>

      {/*Linha de busca (input + botão)*/}
      <View style={styles.linhaBusca}>
        <TextInput
        placeholder="Buscar receita..."
        style={styles.inputBusca}
        value={busca}
        onChangeText={setBusca}
      />

      <PaperButton
        mode="contained"
        icon="magnify"
        onPress={() => setFiltro(busca)}
        style={styles.botaoBuscar}
      >
        Buscar
        </PaperButton>
      </View>
      
      <FlatList
        data={receitasFiltradas}
        keyExtractor={(item, index) => (item?.id ? item.id.toString() : index.toString())}  // ← Garantimos que seja string
        renderItem={({ item }) => (
          <PaperButton
            mode="outlined"
            onPress={() => navigation.navigate("Receita", { receita: item })}
            style={styles.item}
          >
            {item.titulo}
            </PaperButton>
        )}
        ListEmptyComponent={
          <Text style={styles.nenhuma}>Nenhuma receita encontrada</Text>
        }
      />

      <View style={styles.buttonContainer}>
        <PaperButton
          mode="contained"
          icon="plus"
          onPress={() => navigation.navigate("Nova Receita")}
        >
          Adicionar receita
          </PaperButton>
      </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: width > 600 ? 40 : 20,
    paddingVertical: 20,
    maxWidth: 800,
    alignSelf: "center",
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
    marginBottom: 10,
  },
   // 🔄 Nova estilização para input + botão juntos
  linhaBusca: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    gap: 10, // Se não funcionar, use marginLeft no botão
  },
  inputBusca: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
    maxWidth: 300,
  },
  botaoBuscar: {
    borderRadius: 8,
    height: 50,
    justifyContent: "center",
  },

  item: {
    marginVertical: 5,
    width: "100%",
    maxWidth: 400,
    alignSelf: "center",
  },
  buttonContainer: {
    marginTop: 20,
    width: "100%",
    maxWidth: 400,
  },
  nenhuma: {
    fontSize: 16,
    color: "gray",
    marginTop: 20,
    textAlign: "center",
  },
});