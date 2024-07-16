import { colors } from "@colors";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

interface Styles {
  button: ViewStyle;
  title: TextStyle;
  primaryButton: ViewStyle;
  secondaryButton: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  button: {
    alignItems: "center",
    backgroundColor: colors.palette.black,
    borderRadius: 5,
    padding: 10,
    justifyContent: "center",
  },
  primaryButton: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    borderWidth: 1,
  },
  secondaryButton: {
    backgroundColor: colors.secondary,
    borderColor: colors.primary,
    borderWidth: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
});

export { styles };
