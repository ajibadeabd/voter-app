import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import styles from './styles.jsx';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { showMessage, hideMessage } from "react-native-flash-message";

import {
  getCastedVote
} from "../../store/action/authAction";
import { useDispatch, useSelector } from "react-redux";
export default function HomeScreen({eachItem,result,navigation}) {
const dispatch = useDispatch()
if(eachItem?.data){
  const check = (result == 'Election Result')
  const onpress=()=>{
    if(!check){
      if(eachItem?.data[1].length!=0){
    navigation.navigate('StartVote',{action:'Election',
    id:eachItem.id})}
    else{
showMessage({
  message: `No election for this section` ,
  type: "danger",
  duration:2000,
  color:'white',
  position:'bottom',
  // backgroundColor:'green'
})

    }
  }else{
    if(eachItem?.data[1].length!=0){
    navigation.navigate('StartVote',{action:'Result',
    id:eachItem.id})
  }else{
    showMessage({
      message: `No Result for this section` ,
      type: "danger",
      duration:2000,
      color:'white',
      position:'bottom',
      // backgroundColor:'green'
    })
  }
}
// }else{
  ;
// }

  }
  useEffect(()=>{
getCastedVote(dispatch)
  },[])
  return (
      <View style={styles.Election}>
      <Text style={styles.ongoing}>
        {eachItem.name} ELECTION
      </Text>
      {check?
      <View>
      </View>
        :
    <View>
        <Text style={styles.click}>
       Start time 12th Mondey, 2020 by {eachItem.stime} 
      </Text>
      <Text style={styles.click}>
       Endtime 12th Mondey, 2020 by {eachItem.ftime} 
      </Text></View>}
      <Text 
      onPress={onpress}
     
      style={styles.view}>
        {check ?"VIEW RESULT":'START VOTING'} 
      </Text>
      </View>
  );
}else{
return (
  // <Text>loading</Text>
  null
)
}
}
