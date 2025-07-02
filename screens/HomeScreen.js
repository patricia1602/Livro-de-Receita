import { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Button as PaperButton } from "react-native-paper";

const { width } = Dimensions.get("window");

export default function HomeScreen({ navigation }) {
  const [busca, setbusca] = useState("");
  const [filtro, setFiltro] = useState("");

  const [receitas, seReceitas] = useState([
    {
      id: "1",
      titulo: "Bolo de Cenoura",
      ingredientes:
        "300gr cenoura, 3 ovos, 180ml de óleo, 1 e 1/2 de xícara de açúcar, 2 xícaras de farinha de trigo, 1 colher de sopa de fermento em pó.",
      modo: "Misture tudo e asse por 40 minutos.",
    },
    {
      id: "2",
      titulo: "Panqueca",
      ingredientes: "farinha, leite, ovo...",
      modo: "Misture e frite na frigideira.",
    },
  ]);

  const receitasFiltradas = receitas.filter((r) =>
    r.titulo.toLowerCase().includes(filtro.toLowerCase()) ||
  r.ingredientes.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Image source={require("../assets/capa.png")} style={styles.imagemCapa} />
      <Text style={styles.titulo}>Livro de Receitas</Text>

      <TextInput
        placeholder="Buscar receita..."
        style={styles.input}
        value={busca}
        onChangeText={(texto)=> {
          setbusca(texto);
          setFiltro(texto);  //busca automática ao digitar
        }}
      />

      <PaperButton
        mode="contained"
        icon="magnify"
        onPress={() => setFiltro(busca)}
        style={styles.botaoBuscar}
      >
        Buscar
      </PaperButton>

      <FlatList
        data={receitasFiltradas}
        keyExtractor={(item) => item.id}
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
  input: {
    width: "100%",
    maxWidth: 400,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  botaoBuscar: {
    marginBottom: 20,
    alignSelf: "center",
    width: 150,
    borderRadius: 8,
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
    color: 'gray',
    marginTop: 20,
    textAlign: "center",
  },
});
