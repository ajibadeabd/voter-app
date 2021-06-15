import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styles from './styles.jsx';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function HomeScreen({eachItem,navigation}) {
  // console.log(eachItem.data)
  const onpress=()=>{
    navigation.navigate('StartVote',{action:'Election',data:eachItem})
  }
  return (
      <View style={styles.Election}>
      <Text style={styles.ongoing}>
        {eachItem.name} ELECTION
      </Text>
      <Text style={styles.click}>
       Start time 12th Mondey, 2020 by {eachItem.stime} 
      </Text>
      <Text style={styles.click}>
       Endtime 12th Mondey, 2020 by {eachItem.ftime} 
      </Text>
      <Text 
      onPress={onpress}
     
      style={styles.view}>
        START VOTING 
      </Text>
      </View>
  );
}
