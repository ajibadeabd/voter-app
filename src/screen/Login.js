// import React from "react";
import React, { useState, useEffect } from "react";

import {
  TextInput,
  Text,
  View,
  StyleSheet,
  Button,
  ScrollView,
  Image,
  Keyboard,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import {
  setStateSuccess,
  setStateError,
  login,
} from "../store/action/authAction";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../partials/button.jsx";
import CustomTextInput from "../partials/TextInput.jsx";
import ErrorHandler from "../partials/errorHandler";

// export default function Form(props) {
//   console.log(props)
//   console.log('props')
export default function Form({ navigation, route }) {
  const { error, success } = useSelector((state) => state?.auth);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const changeEmail = (value) => {
    setEmail(value);
    let values = value.split(".st.lasu.edu.ng");
    if (value.endsWith(".st.lasu.edu.ng")) {
      setEmailError("");
    } else {
      setEmailError("Enter a valid student email address");
    }
  };
  const changePassword = (value) => {
    setPassword(value);
    if (value.length < 6) {
      setPasswordError("password must be atleast six character");
    } else {
      setPasswordError("");
    }
  };

  const Login = () => {
    if (
      emailError == "" &&
      passwordError == "" &&
      email?.length &&
      password?.length
    ) {
      let data = {
        email: email,
        password: password,
      };
      console.log(data);
      login(data, dispatch, navigation);
    }
  };
  useEffect(() => {
    return () => {
      setTimeout(() => {
        setStateSuccess(dispatch);
      }, 4000);
    };
  }, [success]);

  useEffect(() => {
    // setProcessing(false)

    return () => {
      setTimeout(() => {
        setStateError(dispatch);
        // setProcessing(false)
      }, 4000);
    };
  }, [error]);

  return (
    <View style={{ flex: 1, backgroungColor: "white", paddingTop: "14.4%" }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.landingImage}>
          <View>
            <Ionicons
              name="checkmark-circle-sharp"
              size={150}
              color="lightgrey"
            />

            <Text
              style={{ fontSize: 50, marginBottom: "12%", color: "lightgrey" }}
            >
              Voteer
            </Text>
          </View>
          <View>
            <ErrorHandler />
            <CustomTextInput
              onChangeText={changeEmail}
              placeholder="Enter your email"
              value={email}
              error={emailError}
              keyboardtype={"email-address"}
            />
            <CustomTextInput
              onChangeText={changePassword}
              placeholder="Enter your password"
              secureTextEntry
              value={password}
              error={passwordError}
            />

            <TouchableOpacity>
              <CustomButton onPress={Login} button_name="LOGIN" />
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text style={{ color: "grey", fontSize: 15 }}>
            Don't have an account ?
            <Text
              style={{ color: "#6C63FF", fontSize: 15 }}
              onPress={() => {
                navigation.push("Register");
              }}
            >
              {" "}
              register
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
