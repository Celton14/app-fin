import React, { useState } from "react";
import { View } from "react-native";
import { TextInput, Button, RadioButton, Text, Card, Snackbar } from "react-native-paper";
import { globalStyles } from "../styles/global";
import { createStyles } from "../styles/Create.Style";

export default function Create() {
  const [tipo, setTipo] = useState("renda");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [snackbarVisible, setSnackbarVisible] = useState(false); // controla o alerta

  const salvarTransacao = () => {
    // Exibe no console (apenas para ver que salvou)
    console.log("Transação salva:", { tipo, descricao, valor });

    // Limpa os campos
    setDescricao("");
    setValor("");

    // Mostra o alerta de sucesso
    setSnackbarVisible(true);
  };

  return (
    <View style={[globalStyles.container, createStyles.container]}>
      <Card style={createStyles.card}>
        <Card.Content>
          <Text style={globalStyles.title}>Nova Transação</Text>

          {/* Tipo de transação */}
          <Text style={createStyles.label}>Tipo:</Text>
          <RadioButton.Group onValueChange={setTipo} value={tipo}>
            <View style={createStyles.radioGroup}>
              <RadioButton.Item label="Renda 💰" value="renda" />
              <RadioButton.Item label="Despesa 💸" value="despesa" />
            </View>
          </RadioButton.Group>

          {/* Campos de entrada */}
          <TextInput
            label="Descrição"
            value={descricao}
            onChangeText={setDescricao}
            mode="outlined"
            style={createStyles.input}
          />

          <TextInput
            label="Valor"
            value={valor}
            onChangeText={setValor}
            keyboardType="numeric"
            mode="outlined"
            style={createStyles.input}
          />

          {/* Botão salvar */}
          <Button
            mode="contained"
            onPress={salvarTransacao}
            style={createStyles.button}
          >
            Salvar
          </Button>
        </Card.Content>
      </Card>

      {/* Snackbar de sucesso */}
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={2000}
        style={createStyles.snackbar}
      >
        Transação bem sucedida! 🎉
      </Snackbar>
    </View>
  );
}
