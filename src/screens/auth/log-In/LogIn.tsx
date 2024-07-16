import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

import { TRButton, TRInputBox } from "@components";
import { GoogleIcon } from "@assets";
import { colors } from "@colors";

import { styles } from "./log-in-styles";

const LogIn: React.FC = () => {
  const [userName, setUserName] = useState("");

  const handleUserNameInput = (value: string) => {
    console.log("value", value);
    setUserName(value);
  };
  const handleSignUp = () => {
    console.log("Account Created");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeBackTitle}>Welcome Back</Text>
      <TRInputBox
        label="Email*"
        placeholder="Enter your Email"
        value={userName}
        onChangeText={handleUserNameInput}
        secureTextEntry={false}
        multiline={false}
        style={undefined}
        inputStyle={undefined}
      />
      <TRInputBox
        label="Password*"
        placeholder="Enter your Password"
        value={userName}
        onChangeText={handleUserNameInput}
        secureTextEntry={false}
        multiline={false}
        style={undefined}
        inputStyle={undefined}
      />
      <Text style={styles.forgotPasswordTitle}>Forgot Password?</Text>
      <TRButton
        title={"Log In"}
        buttonHandler={handleSignUp}
        customButtonStyle={{ marginTop: 30 }}
      />
      <Text style={{ textAlign: "center", marginVertical: 20 }}>OR</Text>

      <Pressable style={styles.googleLogInContainer}>
        <GoogleIcon width={34} height={34} />
        <Text style={styles.logInWithGoogle}>Log in with Google</Text>
      </Pressable>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Text>Don't have account?</Text>
        <Text style={{ color: colors.primary, fontWeight: "600" }}>
          {" "}
          Sign-Up
        </Text>
      </View>
    </View>
  );
};

export default LogIn;
