import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ButtonInput from '../partials/button';
import {logout} from '../store/action/authAction';
import { Ionicons,MaterialCommunityIcons,Feather,AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen({navigation}) {
  const dispatch =useDispatch();
  // const navigation =useNavigation();
  const { userData } = useSelector((state) => state?.auth);
// console.log(userData)
  return (
    <View style={styles.container}>
        
<Ionicons  name="people-circle-sharp"
onPress={()=>{navigation.navigate("Profile")}} 
 size={250} color='#6C63FF' />
      <Text style={styles.name}>Name:{userData?.fullName}</Text>
      <Text style={styles.emailcon}>
          <Text style={styles.email}>Email:</Text>
           {userData?.email}
           </Text>
           <Text style={styles.emailcon}>
          <Text style={styles.email}>Matric number: </Text>
           {userData.matric_number}</Text>
            <TouchableOpacity>

           <Text
           style={{
             fontSize:22,
             color:"red",
             margin:0,
             paddingLeft:0,
           }}
           
           onPress={ async()=>{
             console.log('worked')
             logout(dispatch, navigation)
             
             } }>logout</Text>
            </TouchableOpacity>
      {/* <StatusBar style="auto" /> */}
      
      <StatusBar style={{paddingTop:'10%'}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop:'10%'
    // justifyContent: 'center',
  },
  name:{
fontSize:20,
fontWeight:'bold',
margin:'2.5%',
// margin:10

  },
  emailcon:{
    fontSize:15,
    

  },
  email:{
      fontWeight:'bold'
  }
});



