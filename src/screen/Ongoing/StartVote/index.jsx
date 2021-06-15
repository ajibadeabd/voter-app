import React ,{useState} from 'react'
// import styles from './styles'
import EachpersonResult from '../../ElectionResult/EachpersonResult.js'
import { Text,View,StyleSheet, ScrollView,Image,FlatList} from 'react-native'
import { useEffect } from 'react'
const  EachResult=({post}) =>{
   
    return (
        <View style={styles.result}>
        <View style={styles.each}>
        <Text style={styles.title}>{post.post}</Text>
        <FlatList
            data={post.result}
            renderItem={({item})=> <EachpersonResult vote={'vote'} item={item}/>}
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
const Eachresult=({route})=>{
//  console.log(route.params.data.data)
  const [ALLPOST,setALLPOST] = useState([])
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
      useEffect(()=>{
      let aa=[]
      route.params.data.data[1].forEach((each)=>{

        if(!aa.includes(each.post)){
          // aa.push(each.post)

        let aaa=   route.params.data.data[1].filter((num)=>{
          
          return num.post==each.post

        })
        
        if(!aa.includes({post:each.post,candidate:aaa})){
        aa.push({post:each.post,candidate:aaa})

        }
        // console.log(route.params.data.data)
        //  console.log(aa)
        }
      })
      setALLPOST(aa)
      console.log(aa)



      },[])
      return (
          <View>
            <Text>
              {/* {route.params.data.data[2].post} */}
            </Text>
              <FlatList
            data={post}
            renderItem={({item})=> <EachResult post={item}/>}
            keyExtractor={(item)=>item.id} />
            
            {/* <FlatList
            data={route.params.data.data}
            renderItem={({item})=> <EachResult post={item}/>}
            keyExtractor={(item)=>item._id} /> */}
          </View>

      )

}

export default Eachresult