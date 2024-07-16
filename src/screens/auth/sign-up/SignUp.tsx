import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { TRButton, TRInputBox } from "@components";
import { GoogleIcon } from "@assets";
import { colors } from "@colors";
import { styles } from "./sign-up-styles";

const SignUp: React.FC = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    dob: "",
    email: "",
    password: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setUserInfo({ ...userInfo, [field]: value });
  };

  const handleSignUp = () => {
    console.log("Account Created", userInfo);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.createAccountTitle}>Create Account</Text>
      <TRInputBox
        label="Name*"
        placeholder="Enter your Name"
        value={userInfo.name}
        onChangeText={(value) => handleInputChange("name", value)}
        secureTextEntry={false}
        multiline={false}
      />
      <TRInputBox
        label="Date Of Birth"
        placeholder="Enter your DOB"
        value={userInfo.dob}
        onChangeText={(value) => handleInputChange("dob", value)}
        secureTextEntry={false}
        multiline={false}
      />
      <TRInputBox
        label="Email*"
        placeholder="abc@gmail.com"
        value={userInfo.email}
        onChangeText={(value) => handleInputChange("email", value)}
        secureTextEntry={false}
        multiline={false}
      />
      <TRInputBox
        label="Password*"
        placeholder="Enter your Password"
        value={userInfo.password}
        onChangeText={(value) => handleInputChange("password", value)}
        secureTextEntry
        multiline={false}
      />
      <TRButton
        title="Sign Up"
        buttonHandler={handleSignUp}
        customButtonStyle={{ marginTop: 30 }}
      />
      <Text style={{ textAlign: "center", marginVertical: 20 }}>OR</Text>
      <Pressable style={styles.googleSignInContainer}>
        <GoogleIcon width={34} height={34} />
        <Text style={styles.signUpWithGoogle}>Sign up with Google</Text>
      </Pressable>
      <View style={styles.footerLevelContainer}>
        <Text>Have an account?</Text>
        <Text style={{ color: colors.primary, fontWeight: "600" }}>
          {` Sign-In`}
        </Text>
      </View>
    </View>
  );
};

export default SignUp;
