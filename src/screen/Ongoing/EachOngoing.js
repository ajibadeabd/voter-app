import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styles from './styles.jsx';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function HomeScreen({eachItem,result,navigation}) {
  // console.log(result == 'Election Result')
  const check = (result == 'Election Result')
  // console.log(check)


  const onpress=()=>{
    // let act = {check?'result':'Election'}
    if(!check){
      
    navigation.navigate('StartVote',{action:'Election',
    data:eachItem})
  }else{
    navigation.navigate('StartVote',{action:'Result',
    data:eachItem})
  }

  }
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
}
