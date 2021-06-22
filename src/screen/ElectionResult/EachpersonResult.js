import React, { useEffect, useState } from 'react'
// import styles from './styles'
import { Ionicons } from '@expo/vector-icons'; 

import { Text,View,StyleSheet, Image} from 'react-native'
import { VOTE_CASTED} from '../../store/state/stateManagement'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    Vote
  } from "../../store/action/authAction";
  import { useDispatch, useSelector } from "react-redux";
  import Api from "../../store/api";

export default function EachResult({item,vote,result,voteCasted: VoteCasted}) {
  const { userData, voteCasted } = useSelector((state) => state?.auth);
const [voted,setVoted] =useState(false)
const [lastVoted,setLastVoted] =useState([])
const dispatch =useDispatch()
    const VOTE=(voter_id,vote_type_id)=>{
        if(!result){
            Vote({voter_id,vote_type_id},dispatch)
        }
    }
    useEffect(()=>{
        setVoted(false)
      let aa =   voteCasted.filter((eachVoteCasted)=>{
            if(
                eachVoteCasted.post==item.post &&
                eachVoteCasted.vote_type_id==item.vote_type_id &&
                eachVoteCasted.voter_id == userData._id &&
                eachVoteCasted.votee== item.name
            ){
                 setVoted(true)
                 return eachVoteCasted
            }
        })
    },[voteCasted])
    if(voteCasted){

    
    return (
                <View style={styles.eachrole}>
<Ionicons
 name="person-circle" 
 size={62} color="#6C63FF" />
                    <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.dept}>{item.dept} </Text>

                    </View>
                    {result!==true?
                    <TouchableOpacity activeOpacity={.5}>
                        {voted?
                        // {lastVoted.length!=0?
                    <Text  style={styles.voted}>Voted</Text>
                    // <Text onPress={()=>{VOTE(item._id,item.vote_type_id,item.post)}} style={styles.vote}>Voted</Text>

                        :
                    <Text onPress={()=>{VOTE(item._id,item.vote_type_id)}} style={styles.vote}>Vote</Text>}
                    </TouchableOpacity>
                    :<Text style={styles.vote}>{item.score}</Text>}



                </View>
                
    )
}else{
return null
}
}
const styles = StyleSheet.create({
    result:{
flex:1
    },
  
    vote:{
        color:'#6C63FF',
        borderColor:'#6C63FF',
        borderWidth:1,
        padding:19,
        fontSize:17,
        paddingVertical:10,
        borderRadius:10

    },
    voted:{
        color:'#FFF',
        backgroundColor:'#6C63FF',
        borderWidth:1,
        padding:19,
        fontSize:17,
        paddingVertical:10,
        borderRadius:10

    },
    eachrole:{
        backgroundColor:'#fff',
        width:'90%',
        padding:'1.9%',
        marginHorizontal:'5%',
        margin:'1.9%',
        borderRadius:5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
     
    },
    count:{
        fontSize:30,
        color:'#6C63FF'
    },
    name:{
        fontSize:20,
        textTransform:'uppercase',
    },
    dept:{
      color:'grey'  
    },
    title:{
        color:'#fff',
        fontSize:30,
        paddingVertical:10,
        paddingVertical:10,
        fontWeight:'bold',
        textAlign:'center',
    }
})