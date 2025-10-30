import { StyleSheet } from "react-native";

export const createStyles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  card: {
    padding: 10,
  },
  label: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "500",
  },
  radioGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 5,
  },
  input: {
    marginVertical: 8,
  },
  button: {
    marginTop: 15,
  },
  snackbar: {
    backgroundColor: "#4caf50", // verde sucesso
  },
});
