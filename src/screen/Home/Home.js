import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styles from './style.jsx';
import CustomButton from '../../partials/button';
import Api from '../../store/api';
import { StyleSheet, Text, View, Button } from 'react-native';

import { TouchableOpacity,TouchableWithoutFeedback } from 'react-native-gesture-handler'

export default function HomeScreen({navigation}) {
// const navigation=useNavigation();
// import { useNavigation } from '@react-navigation/native';

  const election = ()=>{
      navigation.navigate("OngoingScreen",{
        name:'Ongoing Election',
        action:'Ongoing Election'
      })
  }
  const result = ()=>{
    navigation.navigate('AllResultScreen',{
      name:'Election Result',
      action:'Election Result'
    })
      
  }
  return (
    <View style={styles.container}>
      <View style={styles.Election}>
      <Text style={styles.ongoing}>
        ONGOING ELECTION
      </Text>
      <Text style={styles.click}>
        Click  on the on going vote you can participate in 
      </Text>
      <Text 
      onPress={election}

      style={styles.view}>
        View
      </Text>
      </View>
      <View style={styles.Result}>
      <Text 
      style={styles.ongoing}>
        VIEW RESULT
      </Text>
      <Text style={styles.click}
      >
        Click  here to view the results of cast votes
      </Text>
      <Text 
      onPress={result}
      style={styles.view}>
        View
      </Text>
      <Text></Text>
      </View>
    </View>
  );
}

