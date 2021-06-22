import { StatusBar } from 'expo-status-bar';
import React ,{useEffect} from 'react';
import { FlatList } from 'react-native'
import styles from './styles.jsx';
import { StyleSheet, Text, View,ScrollView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EachOngoing from './EachOngoing';
import ProgressBar from "react-native-animated-progress";
import {
  getAllVote
  } from "../../store/action/authAction";
import { useDispatch, useSelector } from "react-redux";

export default function HomeScreen({ navigation,route }) {
  // Election Result
  const { voter } = useSelector((state) => state?.auth);
  const dispatch = useDispatch();
  useEffect(()=>{
    getAllVote(dispatch)
    // console.log(voter)
  },[])
    if(!voter){
      console.log(voter.length)
  return (
    <View
    style={{
      justifyContent:'center',

    }}>
      {/* <Text>loading</Text> */}
      <ProgressBar height={5} indeterminate backgroundColor="#4a0072" />
    </View>
  )
    }else{
      const result =[
        {id:'2',
          name:'GENERAL',
          // stime:'10:00am',
          // ftime:'10:00am',
          data:voter[2] ,
  
        },
        {
          id:'1',
          name:'FACULTY',
          // stime:'08:00am',
          // ftime:'12:00pm',
          data:voter[1] 
  
        },
        {
          id:'0',
          name:'DEPARTMENTAL',
          // stime:'05:00am',
          data:voter[0]
          // ftime:'24:00pm',
        },
      ]
      
  return (
    <View style={styles.container}>
         <FlatList
            data={result}
            renderItem={({item})=><EachOngoing 
            eachItem={item} 
            result={route.params.name}
            navigation={navigation}/>}
            keyExtractor={(item)=>item._id} />
            {/* <ScrollView>

            {result.map((item)=>{
              return <EachOngoing 
              eachItem={item} 
              result={route.params.name}
              navigation={navigation}/>
            })}
            </ScrollView> */}

    </View>
  );}
}
