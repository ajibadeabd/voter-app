import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Ionicons,MaterialCommunityIcons,Feather,AntDesign } from '@expo/vector-icons';
import { TouchableOpacity,TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
export  function UserName() {
    return(
        
<View>
    <Text style={{fontSize:20}}>
        Ameen Ajao
    </Text>
</View>
    )
}


    export  function HomeHeader() {
const navigation=useNavigation();
function TabBarIcon(props) {
    return <Ionicons  size={30} style={{ marginBottom: -3 }} {...props} />;
  }
return   ( <View >

<TabBarIcon  name="people-circle-sharp"
start
 size={43} color='#6C63FF' />
 </View>)
}
