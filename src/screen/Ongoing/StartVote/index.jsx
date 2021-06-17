import React ,{useState} from 'react'
// import styles from './styles'
import EachpersonResult from '../../ElectionResult/EachpersonResult.js'
import { Text,View,StyleSheet, ScrollView,Image,FlatList} from 'react-native'
import { useEffect } from 'react'
const  EachResult=({post,result}) =>{
  //  console.log(result)
  //  bb.push([{id:JSON.stringify(i)},{post:each.post},{candidate:aaa}])

    return (
        <View style={styles.result}>
        <View style={styles.each}>
        <Text style={styles.title}>{post[1].post}</Text>
        <FlatList
            data={post[2].candidate}
            renderItem={({item})=> <EachpersonResult result={result} vote={'vote'} item={item}/>}
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
const Eachresult=({route,result})=>{
 const res = (route?.params.action == 'Result')
//  console.log(res)

  const [ALLPOST,setALLPOST] = useState([])
      useEffect(()=>{
        console.log(route?.params?.data?.data[1].lenght==0)
      let aa=[]
      let bb=[]
      let i=0
      route?.params?.data?.data[1]?.forEach((each)=>{
i++
        if(!aa.includes(each.post)){
          aa.push(each.post)

        let aaa=   route?.params?.data?.data[1]?.filter((num)=>{
          return num.post==each.post
        })
        bb.push([{id:JSON.stringify(i)},{post:each.post},{candidate:aaa}])
        
        }
      })
      route?.params?.data?.data[1]?.forEach((eachdata)=>{
        let aaa=   route?.params?.data?.data[1]?.filter((num)=>{
          return num.post == eachdata.post
        })
      })
      setALLPOST(bb)
      },[])
      return (
          <View>
            {route?.params?.data?.data[1]?.lenght==0?
            <Text 
            style={{fontSize:33}}>
              NO VOTING 
            </Text>
            :
            
              <FlatList
            data={ALLPOST}
            renderItem={({item})=> <EachResult result={res} post={item}/>}
            keyExtractor={(item)=>item[0].id} />}
          </View>

      )

}

export default Eachresult;