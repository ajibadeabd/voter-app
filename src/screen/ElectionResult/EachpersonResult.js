import React from 'react'
// import styles from './styles'
import { Ionicons } from '@expo/vector-icons'; 

import { Text,View,StyleSheet, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function EachResult({item,vote}) {
    return (
                <View style={styles.eachrole}>
<Ionicons
 name="person-circle" 
 size={62} color="#6C63FF" />
                    <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.dept}>{item.dept} </Text>

                    </View>
                    {vote?
                    <TouchableOpacity activeOpacity={.5}>
                    <Text style={styles.vote}>Vote</Text>
                    </TouchableOpacity>
                    :<Text style={styles.count}>{item.count}</Text>}



                </View>
                
    )
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