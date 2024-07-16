import React, { useEffect, useRef } from "react";
import { View, Animated } from "react-native";

import { colors } from "@colors";
import { TRButton, TRLottieView } from "@components";
import { WelcomeLottie } from "@assets";
import { BUTTON_PRESET } from "@common";

import { styles } from "./welcome-screen-styles";

const WelcomeScreen: React.FC = () => {
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const flash = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    );

    flash.start();

    return () => flash.stop(); // Clean up animation on unmount
  }, [opacity]);

  const logInHandler = () => {
    console.log("Login Pressed");
  };
  const signUpHandler = () => {
    console.log("Sign-up Pressed");
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.flashingText, { opacity }]}>
        Task Reminder !
      </Animated.Text>
      <TRLottieView
        isAppActive={true}
        source={WelcomeLottie}
        style={{ height: 400, width: 400, alignSelf: "center" }}
      />
      <TRButton
        title={"Log-In"}
        buttonHandler={logInHandler}
        buttonType={BUTTON_PRESET.PRIMARY}
      />
      <TRButton
        title={"Sign-Up"}
        customButtonStyle={styles.signUp}
        buttonHandler={signUpHandler}
        buttonType={BUTTON_PRESET.SECONDARY}
        titleColor={colors.primary}
      />
    </View>
  );
};

export default WelcomeScreen;
