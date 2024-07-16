import React from "react";
import { Text, Pressable, StyleProp, ViewStyle } from "react-native";

import { colors } from "@colors";
import { BUTTON_PRESET } from "@common";

import { styles } from "./tr-button-styles";

interface ITRButtonType {
  title: string;
  customButtonStyle?: StyleProp<ViewStyle>;
  buttonHandler: () => void;
  titleColor?: string;
  buttonType?: string;
}

const TRButton: React.FC<ITRButtonType> = (props) => {
  const {
    title,
    customButtonStyle,
    buttonHandler,
    titleColor = colors.palette.white,
    buttonType = BUTTON_PRESET.PRIMARY,
  } = props;

  const getButtonStyle = () => {
    let buttonStyle = {};
    switch (buttonType) {
      case BUTTON_PRESET.PRIMARY:
        buttonStyle = [styles.button, styles.primaryButton, customButtonStyle];
        break;
      case BUTTON_PRESET.SECONDARY:
        buttonStyle = [
          styles.button,
          styles.secondaryButton,
          customButtonStyle,
        ];
        break;
      case BUTTON_PRESET.CUSTOM:
        buttonStyle = [styles.button, customButtonStyle];
        break;

      default:
        buttonStyle = {};
    }
    return buttonStyle;
  };

  return (
    <Pressable onPress={buttonHandler} style={getButtonStyle}>
      <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
    </Pressable>
  );
};

export default TRButton;
