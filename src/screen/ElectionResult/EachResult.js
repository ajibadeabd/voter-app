import React from 'react'
// import styles from './styles'
import EachpersonResult from './EachpersonResult'
import { Text,View,StyleSheet, ScrollView,Image,FlatList} from 'react-native'
const  EachResult=({post}) =>{
   
    return (
        <View style={styles.result}>
        <View style={styles.each}>
        <Text style={styles.title}>{post.post}</Text>
        <FlatList
            data={post.result}
            renderItem={({item})=> <EachpersonResult item={item}/>}
            keyExtractor={(item)=>item.id} />
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    result:{
flex:1,

    },
   each:
    {backgroundColor:'#6C63FF',
    padding:'2.4%',
    margin:'2.4%',


},
title:{
    color:'#fff',
    fontSize:30,
    paddingVertical:'2.65%',
    fontWeight:'bold',
    textAlign:'center',
}
   
})
const Eachresult=()=>{
    const post =[
        {id:'1',
          post:'President',
          result :[
            {id:'1',
              name:'LASUSU',
              dept:'Science',
              count:'79',
            },
            {
              id:'2',
              name:'ESLASU',
              dept:'Agric',
              count:'32',
            },
            {
              id:'3',
              name:'AGRIC',
              dept:'Engineering',
              count:'97',
            },
            {
              id:'4',
              name:'AGRIC',
              dept:'Engineering',
              count:'97',
            },
            {
              id:'5',
              name:'AGRIC',
              dept:'Engineering',
              count:'97',
            },
          ]
        },
        {
          id:'2',
          post:' General secretary',
          result :[
            {id:'1',
              name:'FMSLASU',
              dept:'Science',
              count:'79',
            },
            {
              id:'2',
              name:'ESLASU',
              dept:'Agric',
              count:'11',
            },
            {
              id:'3',
              name:'AGRIC',
              dept:'Engineering',
              count:'44',
            },
          ]
        },
     
      ]
      return (
          <View>
              <FlatList
            data={post}
            renderItem={({item})=> <EachResult post={item}/>}
            keyExtractor={(item)=>item.id} />
          </View>

      )

}

export default Eachresult