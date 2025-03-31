import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

const App = () => {
  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      tarefa: "Ir ao mercado",
      descricao: "Comprar mantimentos para a semana, incluindo frutas, legumes, carnes e itens essenciais para casa. Fazer uma lista para evitar compras desnecessárias e economizar dinheiro.",
      data: "13/03/2025",
      horario: "14:00",
      prioridade: "Alta",
      categoria: "Compras",
      feito: false,
      imagem: "https://assets-blog.pagseguro.uol.com.br/wp-content/2022/05/economizar-no-mercado-min.jpg",
    },
    {
      id: 2,
      tarefa: "Lavar as Roupas",
      descricao: "Separar roupas claras e escuras, utilizar o sabão adequado e configurar a máquina na opção correta. Dobrar e guardar tudo depois que estiver seco.",
      data: "13/03/2025",
      horario: "16:30",
      prioridade: "Alta",
      categoria:"Casa",
      feito: false,
      imagem: "https://drywashlavanderia.com.br/wp-content/uploads/2023/10/Dicas-para-lavar-roupa-na-maquina-1080x675.jpg",
    },
    {
      id: 3,
      tarefa: "Treino na academia",
      descricao: "Treino do dia focado em pernas e abdômen, seguido de 30 minutos de corrida na esteira. Manter a hidratação e alongar bem antes e depois.",
      data: "13/03/2025",
      horario: "18:00",
      prioridade: "Baixa",
      categoria:"Saúde",
      feito: false,
      imagem: "https://blog.ciaathletica.com.br/wp-content/uploads/2018/08/shutterstock_749969473-1.jpg",
    },
    {
      id: 4,
      tarefa: "Estudar Programação",
      descricao: "Revisar conceitos de React Native, praticar hooks e fazer um pequeno projeto para consolidar o aprendizado. Assistir vídeos tutoriais e anotar pontos importantes.",
      data: "13/03/2025",
      horario: "19:00",
      prioridade: "Alta",
      categoria:"Estudo",
      feito: false,
      imagem: "https://cdn.unasp.br/blog/wp-content/uploads/2018/02/shutterstock_671632789000.jpg",
    },
    {
      id: 5,
      tarefa: "Continuar leitura do livro",
      descricao: "Ler mais dois capítulos do livro atual. Fazer anotações sobre pontos interessantes e refletir sobre como a história se desenvolve.",
      data: "13/03/2025",
      horario: "21:00",
      prioridade: "Baixa",
      categoria:"Lazer",
      feito: false,
      imagem: "https://diariomsnews.com.br/wp-content/uploads/2021/08/mulh.jpg",
    },
    {
      id: 6,
      tarefa: "Organizar a rotina da semana",
      descricao: "Planejar compromissos e atividades para a próxima semana, organizando horários de trabalho, estudos e momentos de lazer para manter o equilíbrio.",
      data: "16/03/2025",
      horario: "10:00",
      prioridade: "Média",
      categoria:"Pessoal",
      feito: false,
      imagem: "https://i.ytimg.com/vi/7FoERdIzlNc/maxresdefault.jpg",
    },
    {
      id: 7,
      tarefa: "Fazer compras online",
       descricao: "Pesquisar preços de eletrônicos e roupas, comparar ofertas e finalizar a compra de itens essenciais com desconto. Verificar prazos de entrega.",
      data: "25/03/2025",
      horario: "21:00",
      prioridade: "Baixa",
      categoria: "Compras",
      feito: false,
      imagem: "https://ssxdigital.com.br/wp-content/uploads/2020/03/compra-online.jpg",
    },
    {
      id: 8,
      tarefa: "Limpar o quarto",
      descricao: "Arrumar a cama, varrer e passar pano no chão, organizar a escrivaninha e tirar o pó dos móveis. Melhorar o ambiente para manter a produtividade.",
      data: "26/03/2025",
      horario: "09:00",
      prioridade: "Alta",
      categoria: "Casa",
      feito: false,
      imagem: "https://img.freepik.com/fotos-gratis/senhora-de-aparencia-agradavel-dentro-do-apartamento-moderno-prepare-se-para-viajar_1153-4143.jpg",
    },
    {
      id: 9,
      tarefa: "Caminhada ao ar livre",
      descricao: "Dar uma caminhada de 40 minutos no parque para relaxar e respirar ar puro. Aproveitar o tempo para ouvir minhas músicas favoritas.",
      data: "26/03/2025",
      horario: "18:30",
      prioridade: "Média",
      categoria: "Saúde",
      feito: false,
      imagem: "https://meneguini.files.wordpress.com/2010/12/caminhada.jpg",
    },
    {
      id: 10,
      tarefa: "Aprender a fazer pudim",
      descricao: "Entrar no Youtube e seguir uma receita pra preparar um pudim, todos os ingredientes já estão separados agora é só botar a mão na massa",
      data: "27/03/2025",
      horario: "11:00",
      prioridade: "Média",
      categoria: "Lazer",
      feito: false,
      imagem: "https://i.pinimg.com/736x/a1/44/fb/a144fb4b59dde9bc72d2259e1387ecf6.jpg",
    },
  ]);

  const alternarFeito = (id, status) => {
    setTarefas(
      tarefas.map((item) =>
        item.id === id ? { ...item, feito: status } : item
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agenda</Text>
      <ScrollView>
        {tarefas.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={{ uri: item.imagem }} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.taskDetails}>Tarefa: {item.tarefa}</Text>
              <Text style={styles.taskDetails}>Descrição: {item.descricao}</Text>
              <Text style={styles.taskDetails}>Horário: {item.horario}</Text>
              <Text style={styles.taskDetails}>Data: {item.data}</Text>
              <Text style={styles.taskDetails}>Prioridade: {item.prioridade}</Text>
              <Text style={styles.taskDetails}>Categoria: {item.categoria}</Text>
              <Text style={styles.taskDetails}>Feito:</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.button, styles.buttonNao, !item.feito && styles.buttonSelected]}
                  onPress={() => alternarFeito(item.id, false)}
                >
                  <Text style={styles.buttonText}>Não</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.buttonSim, item.feito && styles.buttonSelected]}
                  onPress={() => alternarFeito(item.id, true)}
                >
                  <Text style={styles.buttonText}>Sim</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingTop: 40,
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    width: 320,
    borderRadius: 10,
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 15,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 10,
  },
  cardContent: {
    marginTop: 10,
  },
  taskDetails: {
    fontSize: 14,
    marginBottom: 2,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 1,
  },
  button: {
    padding: 3,
    borderRadius: 8,
    alignItems: "center",
    width: 60,
  },
  buttonSim: {
    backgroundColor: "green",
  },
  buttonNao: {
    backgroundColor: "red",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  buttonSelected: {
    opacity: 0.6,
  },
});

export default App;
