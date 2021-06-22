import React ,{useState} from 'react'
// import styles from './styles'
import EachpersonResult from '../../ElectionResult/EachpersonResult.js'
import { Text,View,StyleSheet, ScrollView,Image,FlatList} from 'react-native'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

const  EachResult=({post,result,voteCasted}) =>{
   console.log(post)
  //  bb.push([{id:JSON.stringify(i)},{post:each.post},{candidate:aaa}])

    return (
        <View style={styles.result}>
        <View style={styles.each}>
        <Text style={styles.title}>{post[1].post}</Text>
        {/* <FlatList
            data={post[2].candidate}
            renderItem={({item})=> <EachpersonResult voteCasted={voteCasted} result={result} vote={'vote'} item={item}/>}
            keyExtractor={(item)=>item.id} /> */}
             {post[2].candidate.map((item)=>{
             return  <EachpersonResult  keys={item._id} voteCasted={voteCasted} result={result} vote={'vote'} item={item}/>
            })}
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
  const { voter, voteCasted } = useSelector((state) => state?.auth);
  // console.log(voteCasted)
 const res = (route?.params?.action == 'Result')
  //  console.log(res)
  //   console.log(voter[route?.params?.id][1])

//  }
//  console.log(route.params.id,'id')
//  console.log(voter)
//  console.log(res)

  const [ALLPOST,setALLPOST] = useState([])
  // if(){

  // }
      useEffect(()=>{
      let aa=[]
      let bb=[]
      let i=0
      let id = JSON.parse(route?.params?.id)

 if(voter.length != 0){
  // console.log(voter[id])

      voter[id][1].forEach((each)=>{
        // console.log(each)
i++
        if(!aa.includes(each.post)){
          aa.push(each.post)

        let aaa=   voter[route?.params?.id][1]?.filter((num)=>{
          return num.post==each.post
        })
        bb.push([{id:JSON.stringify(i)},{post:each.post},{candidate:aaa}])
        
        }
      })
    }
      setALLPOST(bb)
      },[voter])
      if(voter){

      return (
          <View>
            {/* {voter.map((sma)=>{

            })} */}
            {ALLPOST.length == 0?
            <Text 
            style={{fontSize:33}}>
              NO VOTING
            </Text>:
              <FlatList
            data={ALLPOST}
            renderItem={({item})=> <EachResult voteCasted={voteCasted} result={res} post={item}/>}
            keyExtractor={(item)=>item[0]._id} />
            // ALLPOST.map((item)=>{
            //  return <EachResult voteCasted={voteCasted} result={res} post={item}/>
            // })
            }
          </View>

      )
    }else{
      return(
        // <Text>loading</Text>
        null
      )
    }


}

export default Eachresult;