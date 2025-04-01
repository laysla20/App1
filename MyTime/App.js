import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput, Switch } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";

const imagensDisponiveis = [
  "https://assets-blog.pagseguro.uol.com.br/wp-content/2022/05/economizar-no-mercado-min.jpg",
  "https://drywashlavanderia.com.br/wp-content/uploads/2023/10/Dicas-para-lavar-roupa-na-maquina-1080x675.jpg",
  "https://blog.ciaathletica.com.br/wp-content/uploads/2018/08/shutterstock_749969473-1.jpg",
  "https://cdn.unasp.br/blog/wp-content/uploads/2018/02/shutterstock_671632789000.jpg",
  "https://diariomsnews.com.br/wp-content/uploads/2021/08/mulh.jpg",
  "https://i.ytimg.com/vi/7FoERdIzlNc/maxresdefault.jpg",
  "https://ssxdigital.com.br/wp-content/uploads/2020/03/compra-online.jpg",
  "https://img.freepik.com/fotos-gratis/senhora-de-aparencia-agradavel-dentro-do-apartamento-moderno-prepare-se-para-viajar_1153-4143.jpg",
  "https://meneguini.files.wordpress.com/2010/12/caminhada.jpg",
  "https://i.pinimg.com/736x/a1/44/fb/a144fb4b59dde9bc72d2259e1387ecf6.jpg"
];

const App = () => {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [descricao, setDescricao] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [prioridade, setPrioridade] = useState("");
  const [categoria, setCategoria] = useState("");
  const [tempoEstimado, setTempoEstimado] = useState(30);
  const [urgencia, setUrgencia] = useState(5);
  const [feito, setFeito] = useState(false);
  const [imagemSelecionada, setImagemSelecionada] = useState(imagensDisponiveis[0]);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        <Text style={styles.title}>Nova Tarefa</Text>
        
        <Text>Escolher Imagem:</Text>
        <Image source={{ uri: imagemSelecionada }} style={styles.image} />
        <Picker
          selectedValue={imagemSelecionada}
          onValueChange={(itemValue) => setImagemSelecionada(itemValue)}
          style={styles.picker}
        >
          {imagensDisponiveis.map((img, index) => (
            <Picker.Item key={index} label={`Imagem ${index + 1}`} value={img} />
          ))}
        </Picker>

        <TextInput
          style={styles.input}
          placeholder="Nome da Tarefa"
          value={novaTarefa}
          onChangeText={setNovaTarefa}
        />
        <TextInput
          style={styles.descricaoInput}
          placeholder="Descrição"
          value={descricao}
          onChangeText={setDescricao}
          multiline
        />
        <TextInput
          style={styles.input}
          placeholder="Data (DD/MM/AAAA)"
          value={data}
          onChangeText={setData}
        />
        <TextInput
          style={styles.input}
          placeholder="Horário (HH:MM)"
          value={horario}
          onChangeText={setHorario}
        />
        
        <Text>Prioridade:</Text>
        <Picker
          selectedValue={prioridade}
          onValueChange={(itemValue) => setPrioridade(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Baixa" value="Baixa" />
          <Picker.Item label="Média" value="Média" />
          <Picker.Item label="Alta" value="Alta" />
        </Picker>
        
        <Text>Categoria:</Text>
        <Picker
          selectedValue={categoria}
          onValueChange={(itemValue) => setCategoria(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Casa" value="Casa" />
          <Picker.Item label="Estudo" value="Estudo" />
          <Picker.Item label="Saúde" value="Saúde" />
          <Picker.Item label="Lazer" value="Lazer" />
          <Picker.Item label="Compras" value="Compras" />
        </Picker>
        
        <Text>Tempo Estimado: {tempoEstimado} min</Text>
        <Slider
          style={styles.slider}
          minimumValue={10}
          maximumValue={120}
          step={5}
          value={tempoEstimado}
          onValueChange={setTempoEstimado}
        />
        
        <Text>Urgência: {urgencia}</Text>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={5}
          step={1}
          value={urgencia}
          onValueChange={setUrgencia}
        />
        
        <Text>Feito:</Text>
        <Switch value={feito} onValueChange={setFeito} />
        
        <TouchableOpacity style={styles.button} onPress={() => alert("Tarefa adicionada!")}> 
          <Text style={styles.buttonText}>Adicionar Tarefa</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFB6C1",
    paddingTop: 40,
    alignItems: "center",
  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
 
  input: {
    width: 300,
    height: 40,
    backgroundColor: "white",
    borderColor: "#9400D3",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  picker: {
    width: 300,
    height: 60,
    backgroundColor: "white",
    borderColor: "#9400D3",
    marginBottom: 10,
  },

  slider: {
    width: 300,
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "purple",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },

  descricaoInput: {
    width: 300,
    height: 100,
    backgroundColor: "white",
    borderColor: "#9400D3",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    textAlignVertical: "top",
  },
});

export default App;
