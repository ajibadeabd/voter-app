import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList } from 'react-native'
import styles from './styles.js';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EachResult from './EachResult';

export default function HomeScreen({ navigation,route }) {
  // console.log(route.params.params)
    const result =[
      {id:'1',
        name:'lasusu Election',
        
      },
      {
        id:'2',
        name:'eslasu Election',
        
      },
      {
        id:'3',
        name:'science Election',
        
      },
      {
        id:'4',
        name:'biology Election',
        
      }
    ]
  return (
    <View style={styles.container}>
         <FlatList
            data={result}
            renderItem={({item})=>
            <View style={styles.item}>
            <Text  style={styles.text} >{item.name}</Text>
            <Text  style={styles.view} 
            onPress={()=>{navigation.navigate('EachResultScreen',
            {action:item.name})}}
            >view Result</Text>

            </View>
        }
            keyExtractor={(item)=>item.id}
             />
    </View>
  );
}

