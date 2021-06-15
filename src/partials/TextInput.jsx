import React from "react";
import {
  Text,
  keyboardType,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const ButtonInput = ({
  placeholder,
  onChangeText,
  value,
  secureTextEntry = false,
  error,
  keyboardtype= false,
}) => {
  return (
    <View
      style={{
        marginBottom: "3%",
      }}
    >
        <TextInput
          secureTextEntry={secureTextEntry}
          keyboardType= {keyboardtype || "default"}
          value={value}
          style={{
            paddingVertical: "3.1%",
            paddingHorizontal: "2.1%",
            borderWidth: 1,
            borderColor: "lightgrey",
            borderRadius: 3,
            minWidth: "80%",
            maxWidth: "100%",
            margin: "1.5%",
            marginBottom: "3%",
          }}
          placeholder={placeholder}
          onChangeText={onChangeText}
        />

        <Text style={{ color: "red", paddingHorizontal: "2.1%" }}>{error}</Text>
    </View>
  );
};

export default ButtonInput;
