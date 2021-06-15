import React, { useState, useEffect } from "react";

import {
  TextInput,
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  Keyboard,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import CustomTextInput from "../partials/TextInput.jsx";
import CustomButton from "../partials/button.jsx";

export default function Form({ navigation, route }) {
  console.log(route.params.params.email);
  const [email, setEmail] = useState(route.params.params.email);
  const [otp, setOtp] = useState("");
  const onChangeOtp = (value) => {
    setOtp(value);
  };
  const onChangeEmail = (value) => {
    setEmail(value);
  };
  useEffect(() => {
    // if(){
    // }
  }, [email]);
  return (
    <View
      style={{
        flex: 1,
        backgroungColor: "white",
        justifyContent: "center",
        paddingTop: "14.4%",
      }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.landingImage}>
          <Text style={{ fontSize: 37, textAlign: "center", color: "grey" }}>
            Please input your otp
          </Text>
          <CustomTextInput value={email} />
          <CustomTextInput
            onChangeText={onChangeOtp}
            placeholder="Enter your otp"
            value={otp}
            // secureTextEntry
          />
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <CustomButton
              onPress={() => {
                navigation.push("Login");
              }}
              button_name="CONFIRM OTP"
            />
          </TouchableOpacity>
          <Text style={{ color: "grey", fontSize: 15 }}>
          Otp expired ?
            <Text
              style={{ color: "#6C63FF", fontSize: 15 }}
              // onPress={() => {
              //   navigation.push("Register");
              // }}
            >
              {" "}
              Resend otp
            </Text>
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  landingImage: {
    //   padding:320,
    alignItems: "center",
  },
});
