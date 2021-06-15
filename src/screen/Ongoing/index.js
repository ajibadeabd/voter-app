import { StatusBar } from 'expo-status-bar';
import React ,{useEffect} from 'react';
import { FlatList } from 'react-native'
import styles from './styles.jsx';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EachOngoing from './EachOngoing';
import {
  getAllVote
  } from "../../store/action/authAction";
import { useDispatch, useSelector } from "react-redux";

export default function HomeScreen({ navigation,route }) {
  const { voter } = useSelector((state) => state?.auth);

  // console.log(route.params.params)
  const dispatch = useDispatch();
    const result =[
      {id:'1',
        name:'GENERAL',
        // stime:'10:00am',
        // ftime:'10:00am',
        data:voter[2]

      },
      {
        id:'2',
        name:'FACULTY',
        // stime:'08:00am',
        // ftime:'12:00pm',
        data:voter[1]

      },
      {
        id:'3',
        name:'DEPARTMENTAL',
        // stime:'05:00am',
        data:voter[0]
        // ftime:'24:00pm',
      },
    ]
    useEffect(()=>{
      getAllVote(dispatch)
      // console.log(voter)
    },[])
  return (
    <View style={styles.container}>
         <FlatList
            data={result}
            renderItem={({item})=><EachOngoing eachItem={item} navigation={navigation}/>}
            keyExtractor={(item)=>item.id} />
    </View>
  );
}
