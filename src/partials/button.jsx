import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const ButtonInput = ({ button_name, onPress, style }) => {
  return (
    <View>
      <TouchableOpacity>
        <Text style={[Styles.Button, style]} onPress={onPress}>
          {button_name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  Button: {
    fontSize: 17,
    color: "white",
    backgroundColor: "#6C63FF",
    minWidth: "80%",
    borderRadius: 5,
    paddingVertical: "4%",
    textAlign: "center",
    marginTop: "5%",
    marginBottom: "5%",
  },
});

export default ButtonInput;
