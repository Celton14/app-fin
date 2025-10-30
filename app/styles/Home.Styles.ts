import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  welcome: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },
  balanceCard: {
    marginVertical: 15,
    padding: 10,
    elevation: 2, // sombra leve
  },
  balanceLabel: {
    fontSize: 16,
    color: "#888",
  },
  balanceValue: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2f95dc",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  transactionDesc: {
    fontSize: 16,
  },
  transactionValue: {
    fontSize: 16,
    fontWeight: "600",
  },
  income: {
    color: "green",
  },
  expense: {
    color: "red",
  },
});
