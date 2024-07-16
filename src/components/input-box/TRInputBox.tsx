import React from "react";
import { TextInput, View, Text, ViewStyle, TextStyle } from "react-native";

import { styles } from "./tr-input-box-styles";

type ITRInputBox = {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (value: string) => void;
  secureTextEntry: boolean;
  multiline: boolean;
  style?: ViewStyle;
  inputStyle?: TextStyle;
  isEmpty?: boolean;
};

const TRInputBox: React.FC<ITRInputBox> = (props) => {
  const {
    label,
    placeholder,
    value,
    onChangeText,
    secureTextEntry = false,
    multiline = false,
    style,
    inputStyle,
    isEmpty = false,
  } = props;
  console.log("is Empty::", isEmpty);

  const errorStyle = isEmpty ? { borderWidth: 1, borderColor: "red" } : {};

  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[
          styles.input,
          multiline && styles.multilineInput,
          inputStyle,
          errorStyle,
        ]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
      />
    </View>
  );
};

export default TRInputBox;
