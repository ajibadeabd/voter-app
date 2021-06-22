import React, { useState, useEffect } from "react";
import { register } from "./../store/action/authAction";
import Api from "./../store/api";
// import {login} from "../store/action/authAction";
import { useDispatch, useSelector } from "react-redux";
// import {setStateSuccess,setStateError} from '../store/action/authAction'
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
  Image,
  Keyboard,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { setStateSuccess, setStateError } from "../store/action/authAction";

import CustomButton from "../partials/button.jsx";
import CustomTextInput from "../partials/TextInput.jsx";
import ErrorHandler from "../partials/errorHandler";
export default function Form({ navigation }) {
  const { error, success } = useSelector((state) => state?.auth);
  const nav = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [dept, setDept] = useState("");
  const [faculty, setFaculty] = useState("");
  const [matric, setMatric] = useState("");
  const [matricError, setMatricError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [deptError, setDeptError] = useState("");
  const [facultyError, setFacultyError] = useState("");
  const [fullnameError, setFullnameError] = useState("");
  const changeName = (value) => {
    // value = value.trim("");
    setName(value);
    if (value.length < 3) {
      setFullnameError("provide your full name");
    } else {
      setFullnameError("");
    }
  };
  const changeEmail = (value) => {
    setEmail(value);
    if (value.endsWith(".st.lasu.edu.ng")) {
      setEmailError("");
    } else {
      setEmailError("Enter a valid student email address");
    }
  };
  const changePassword = (value) => {
    value = value.trim("");
    setPassword(value);
    if (value.length < 6) {
      setPasswordError("password must be atleast six character");
    } else {
      setPasswordError("");
    }
  };
  const changeDept = (value) => {
    setDept(value);
    if (value.length < 3) {
      setDeptError("input a valid department");
    } else {
      setDeptError("");
    }
  };
  const changeFaculty = (value) => {
    setFaculty(value);
    if (value.length < 3) {
      setFacultyError("input a valid faculty");
    } else {
      setFacultyError("");
    }
  };
  const changeMatric = (value) => {
    if (value.length <= 9) {
      setMatric(value);
    }
    if (value.length < 9) {
      setMatricError("matric number must be of nine character");
    } else {
      setMatricError("");
    }
  };

  const Register = () => {
    let data = {
      fullName: name,
      email: email,
      faculty: faculty,
      matric_number: matric,
      password: password,
      department: dept,
    };
    if (
      emailError == "" &&
      matricError == "" &&
      passwordError == "" &&
      facultyError == "" &&
      deptError == "" &&
      fullnameError == "" &&
      data.email?.length &&
      data.matric_number?.length &&
      data.department?.length &&
      data.faculty?.length &&
      data.password?.length &&
      data.fullName?.length
    ) {
      console.log(data);
      register(data, dispatch, nav);
    }
  };
  return (
    <View style={{ flex: 1, backgroungColor: "white", paddingTop: "9.4%" }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.landingImage}>
          <View style={styles.landingImage}>
            <Text
              style={{
                fontSize: 40,
                color: "grey",
                marginTop: "5%",
                marginBottom: "0%",
              }}
            >
              Create Account
            </Text>
            {/* <ErrorHandler error={error} /> */}
            {/* <Text style={{ fontSize: 14, color: "red" }}>{error}</Text>
            <Text style={{ fontSize: 14, color: "green" }}>{success}</Text> */}
          </View>

          <CustomTextInput
            onChangeText={changeName}
            placeholder="Enter your full name"
            value={name}
            error={fullnameError}
          />
          <CustomTextInput
            onChangeText={changeEmail}
            placeholder="Enter your email"
            value={email}
            error={emailError}
          />

          <CustomTextInput
            onChangeText={changePassword}
            placeholder="Enter your password"
            value={password}
            error={passwordError}
            secureTextEntry
          />
          <CustomTextInput
            onChangeText={changeFaculty}
            placeholder="Enter your faculty"
            value={faculty}
            error={facultyError}
          />
          <CustomTextInput
            onChangeText={changeDept}
            placeholder="Enter your depatment"
            value={dept}
            error={deptError}
          />

          <CustomTextInput
            onChangeText={changeMatric}
            placeholder="Enter your matric number"
            keyboardtype={"numeric"}
            value={matric}
            error={matricError}
          />

          <View
            style={{
              alignItems: "center",
            }}
          >
            <TouchableOpacity>
              <CustomButton button_name="SIGN UP" onPress={Register} />
            </TouchableOpacity>

            <Text style={{ color: "grey", fontSize: 15 }}>
              Already have an account ?
              <Text
                style={{ color: "#6C63FF", fontSize: 15 }}
                onPress={() => {
                  navigation.push("Login");
                }}
              >
                {" "}
                login
              </Text>
              <Text
                style={{ color: "#6C63FF", fontSize: 15 }}
                onPress={() => {
                  // navigation.push("Otp");
                }}
              >
                {" "}
                resend otp
              </Text>
            </Text>
            {/* Otp */}
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    color: "crimson",
    textAlign: "center",
    paddingHorizontal: 30,
  },
  landingImage: {
    //   padding:320,
    alignItems: "center",
  },
});
