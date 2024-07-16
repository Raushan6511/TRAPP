import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { SignUpScreen, LoginScreen, WelcomeScreen } from "@screens";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* <StatusBar style="auto" /> */}

        {/* <WelcomeScreen /> */}
        <SignUpScreen />
        {/* <LoginScreen /> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
