import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import FlashMessage from "react-native-flash-message";
import Profile from "./src/screen/Profile";
import Login from "./src/screen/Login";
import Register from "./src/screen/Register";
import Otp from "./src/screen/Otp";
import ConfirmationPage from "./src/screen/thankYouPage";
import BottomTabScreen from "./src/navigation/BottomTabNavigation";
import Landing from "./src/screen/landing";
import { Provider } from "react-redux";
import store from "./src/store/initStore";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { retrievetoken } from "./src/store/action/authAction";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {setUserData} from "./src/store/action/authAction";  
import Api from "./src/store/api";

const StackNav = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <Allapps />
    </Provider>
  );
}
const Allapps = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector(
    (state) => state?.auth
  );
  useEffect(() => {

    const getToken = async () => {
      try {
        const t = await AsyncStorage.getItem("token");
        if(t){
          let getProfile =await Api().get('/user/get_profile',
          )
          if(getProfile){
            await setUserData(dispatch,getProfile?.data)
          }
        }
      } catch (error) {
      }  
    };
    getToken();
  }, []);
  return (
    <NavigationContainer>
      {userData ? <AuthUser /> : <NotAuthUser />}
      <FlashMessage position="center" />

    </NavigationContainer>
    
  );
};
// }

const AuthUser = () => {
  return (
    <StackNav.Navigator screenOptions={{ headerShown: false }}>
      <StackNav.Screen name="Home" component={BottomTabScreen} />
      <StackNav.Screen name="Profile" component={Profile} />
    </StackNav.Navigator>
  );
};
const NotAuthUser = () => {
  return (
    <StackNav.Navigator screenOptions={{ headerShown: false }}>
      <StackNav.Screen name="Landing" component={Landing} />
      <StackNav.Screen name="Login" component={Login} />
      <StackNav.Screen name="Register" component={Register} />
      <StackNav.Screen name="ConfirmationPage" component={ConfirmationPage} />
      <StackNav.Screen name="Otp" component={Otp} />
    </StackNav.Navigator>
  );
};
