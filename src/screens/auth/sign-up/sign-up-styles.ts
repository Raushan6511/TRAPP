import { colors } from "@colors";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

interface Style {
  container: ViewStyle;
  createAccountTitle: TextStyle;
  googleSignInContainer: ViewStyle;
  signUpWithGoogle: TextStyle;
  footerLevelContainer: ViewStyle;
  errorText: TextStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: colors.background,
  },
  createAccountTitle: {
    fontSize: 28,
    textAlign: "center",
    fontWeight: "500",
    marginBottom: 40,
  },
  googleSignInContainer: {
    alignItems: "center",
    backgroundColor: colors.secondary,
    borderRadius: 5,
    padding: 5,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.primary,
    flexDirection: "row",
  },
  signUpWithGoogle: {
    fontWeight: "400",
    fontSize: 16,
    marginLeft: 10,
  },
  footerLevelContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    // marginTop: 5,
  },
});
export { styles };
