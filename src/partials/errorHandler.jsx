import React, {useEffect} from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {setStateSuccess,setStateError} from '../store/action/authAction'

const ErrorHandler = ({}) => {
  const { error, success } = useSelector((state) => state?.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      setTimeout(() => {
        setStateSuccess(dispatch);
      }, 4000);
    };
  }, [success]);
  useEffect(() => {
    return () => {
      setTimeout(() => {
        setStateError(dispatch);
      }, 4000);
    };
  }, [error]);
  return (
    <View>
      <TouchableOpacity>
          <Text style={Styles.error}>{error}</Text>
          <Text style={Styles.error}>{success}</Text>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 15,
    maxWidth: "80%",

  },
});

export default ErrorHandler;
