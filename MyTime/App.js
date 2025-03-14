import React, { Component } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

class App extends Component {
  render() {
    const tarefas = [
      {
        id: 1,
        tarefa: "Ir ao mercado",
        horario: "14:00",
        feito: "Não",
        imagem: "https://assets-blog.pagseguro.uol.com.br/wp-content/2022/05/economizar-no-mercado-min.jpg",
      },
      {
        id: 2,
        tarefa: "Lavar as Roupas",
        horario: "16:30",
        feito: "Sim",
        imagem: "https://drywashlavanderia.com.br/wp-content/uploads/2023/10/Dicas-para-lavar-roupa-na-maquina-1080x675.jpg",
      },
      {
        id: 3,
        tarefa: "Treino na academia",
        horario: "18:00",
        feito: "Não",
        imagem: "https://blog.ciaathletica.com.br/wp-content/uploads/2018/08/shutterstock_749969473-1.jpg",
      },
    ];

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Agenda</Text>
        <ScrollView>
          {tarefas.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={{ uri: item.imagem }} style={styles.image} />
              <View style={styles.cardContent}>
                <Text style={styles.taskTitle}>Tarefa: {item.tarefa}</Text>
                <Text style={styles.taskDetails}>Horário: {item.horario}</Text>
                <Text style={styles.taskDetails}>Feito: {item.feito}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingTop: 40,
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    fontFamily: "Times New Roman",
    color: "#000",
    marginBottom: 10,
  },
  card: {
    width: 320,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    overflow: "hidden",
    marginBottom: 15,
  },
  image: {
    width: "100%",
    height: 180,
  },
  cardContent: {
    padding: 10,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  taskDetails: {
    fontSize: 14,
    color: "#555",
  },
});

export default App;
