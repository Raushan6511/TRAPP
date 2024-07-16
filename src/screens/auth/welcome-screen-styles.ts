import { colors } from "@colors";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

interface Styles {
  container: ViewStyle;
  flashingText: TextStyle;
  logIn: ViewStyle;
  signUp: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  flashingText: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    color: colors.palette.red,
  },
  logIn: {
    marginTop: 10,
  },
  signUp: {
    marginTop: 10,
  },
});

export { styles };
