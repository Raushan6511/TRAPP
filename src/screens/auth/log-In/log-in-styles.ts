import { colors } from "@colors";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

interface Style {
  container: ViewStyle;
  welcomeBackTitle: TextStyle;
  googleLogInContainer: ViewStyle;
  logInWithGoogle: TextStyle;
  forgotPasswordTitle: TextStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: colors.background,
  },
  welcomeBackTitle: {
    fontSize: 28,
    textAlign: "center",
    fontWeight: "500",
    marginBottom: 80,
  },
  googleLogInContainer: {
    alignItems: "center",
    backgroundColor: colors.secondary,
    borderRadius: 5,
    padding: 5,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.primary,
    flexDirection: "row",
  },
  logInWithGoogle: {
    fontWeight: "400",
    fontSize: 16,
    marginLeft: 10,
    // marginTop: 5,
  },
  forgotPasswordTitle: {
    textAlign: "right",
    fontSize: 14,
    color: colors.primary,
    marginBottom: 20,
  },
});
export { styles };
