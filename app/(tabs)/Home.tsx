import React from "react";
import { View, Text, FlatList } from "react-native";
import { Card } from "react-native-paper";
import { globalStyles } from "../styles/global";
import { homeStyles } from "../styles/Home.Styles";

export default function Home() {
  // Dados de exemplo
  const userName = "Usuário";
  const saldo = 1500.75;
  const transactions = [
    { id: "1", desc: "Salário", valor: 2500, tipo: "entrada" },
    { id: "2", desc: "Supermercado", valor: 200, tipo: "saída" },
    { id: "3", desc: "Transporte", valor: 50, tipo: "saída" },
  ];

  return (
    <View style={[globalStyles.container, homeStyles.container]}>
      {/* Saudação ao usuário */}
      <Text style={homeStyles.welcome}>Olá, {userName} 👋</Text>

      {/* Card com saldo atual */}
      <Card style={homeStyles.balanceCard}>
        <Card.Content>
          <Text style={homeStyles.balanceLabel}>Saldo atual</Text>
          <Text style={homeStyles.balanceValue}>
            R$ {saldo.toFixed(2)}
          </Text>
        </Card.Content>
      </Card>

      {/* Últimas transações */}
      <Text style={homeStyles.sectionTitle}>Últimas transações</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={homeStyles.transactionItem}>
            <Text style={homeStyles.transactionDesc}>{item.desc}</Text>
            <Text
              style={[
                homeStyles.transactionValue,
                item.tipo === "entrada"
                  ? homeStyles.income
                  : homeStyles.expense,
              ]}
            >
              {item.tipo === "entrada" ? "+" : "-"} R$ {item.valor.toFixed(2)}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
