import React from "react";

import { TextInput,Text, View, StyleSheet, Button,
    Image, Keyboard } from "react-native";
    import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function Form({navigation}) {
  return (
    
    <View 
    style={{ flex: 1,
    backgroungColor:'white' ,
    justifyContent:'center',
    // alignItems:'center',
    paddingTop:'41.4%',
    }}>
       <TouchableWithoutFeedback
    onPress={Keyboard.dismiss}
    >
    <View style={styles.landingImage}>
   
     <Text
     style={{fontSize:37,color:'black',
    textAlign:'center',
    paddingHorizontal:'6%',
    fontWeight:'bold'

    }}
     >
         Thank you for your registration
     </Text>
     <Text
     style={{fontSize:20,color:'grey',
    textAlign:'center',
    padding:'6%',
    fontWeight:'bold'

    }}
     >
         We are glad you are here! 
Before you start voting, we have sent you an email confirmation.
     </Text>
   
    </View>
    <View
    style={{
        alignItems:'center',
    }}>
        <TouchableOpacity>

        <Text
     style={{
    fontSize:16,color:'white',
     backgroundColor:'#6C63FF',
  width:"100%",
  borderRadius:5,
  paddingVertical:"6.5%",
  paddingHorizontal:"5%",
  textAlign:'center',
  marginTop:"5%",
  alignItems:'center'
        
        }}
    onPress={()=>{navigation.push('Otp')}}


        > Resend Email CONFIRMATION</Text>
        </TouchableOpacity>

        <TouchableOpacity>

<Text
style={{

  fontSize:20,color:'grey',
  backgroundColor:'lightgrey',
  width:"100%",
 //  width:290,
  borderRadius:5,
  paddingVertical:"7.5%",
  paddingHorizontal:"27%",
  textAlign:'center',
  marginTop:"5%",
  alignItems:'center'

}}
onPress={()=>{navigation.push('Login')}}


>LOGIN</Text>
</TouchableOpacity>
    

    </View>
     </TouchableWithoutFeedback>
    </View>


  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 6,
    borderColor: "#ddd",
    fontSize: 16,
  },
  error:{
      color:'crimson',
      textAlign:'center',
      paddingHorizontal:30,

  },
  landingImage:{
    //   padding:320,
      alignItems:'center'
  }
});
