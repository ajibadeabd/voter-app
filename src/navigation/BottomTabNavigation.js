import React from 'react';
import {Text,View} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/Home/Home';
import {HomeHeader,UserName} from './header/homeHeader';
import ProfileScreen from '../screen/Profile';
import OngoingScreen from '../screen/Ongoing/index';
import AllScreen from '../screen/ElectionResult/index';
import EachResult from '../screen/ElectionResult/EachResult';
import StartVote from '../screen/Ongoing/StartVote/index';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons,MaterialCommunityIcons,Feather,AntDesign } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
function TabBarIcon(props) {
    return <Ionicons  size={30} style={{ marginBottom: -3 }} {...props} />;
  }
  const HomesScreenStack =
   createStackNavigator();

  function HomesNavigation() {
    return (
      <HomesScreenStack.Navigator>
        <HomesScreenStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ 
            headerLeft:()=>{
                return <HomeHeader/>
            },
            headerRight:()=>{
                    return  <Text 
                    style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}>Home</Text>
              },
            headerRightContainerStyle:{
              marginRight:15,
            },
            headerLeftContainerStyle:{
              marginLeft:15,
            },
            headerTitle: ()=>{
                return <UserName/>
            }
           }}
        />
          <HomesScreenStack.Screen
          name="OngoingScreen"
          component={OngoingScreen}
        //   options={({ route }) => ({ title: route.params.name })}
          options={({route})=>({ 
            
            headerTitle: ({})=>{
                
                    },
                     headerRight:()=>{
                        return  <Text 
                        style={{
                            fontSize:20,
                            fontWeight:'bold',
                            marginRight:25
                        }}>{route.params.action}</Text>
                  },
           }
           )}
        />
          <HomesScreenStack.Screen
          name="StartVote"
          component={StartVote}
        //   options={({ route }) => ({ title: route.params.name })}
          options={({route})=>({ 
            
            headerTitle: ({})=>{
                
                    },
                     headerRight:()=>{
                        return  <Text 
                        style={{
                            fontSize:20,
                            fontWeight:'bold',
                            marginRight:25
                        }}>{route.params.action}</Text>
                  },
           }
           )}
        />
        <HomesScreenStack.Screen
          name="AllResultScreen"
          component={AllScreen}
        //   options={({ route }) => ({ title: route.params.name })}
          options={({route})=>({ 
            
            headerTitle: ({})=>{
                // console.log(route.params)

                // return <Text
                // style={{marginLeft:-11}}>
                    
                //     aa</Text>
                    },
                     headerRight:()=>{
                        return  <Text 
                        style={{
                            fontSize:20,
                            fontWeight:'bold',
                            marginRight:25
                        }}>{route.params.action}</Text>
                  },
           }
           )}
        />
        <HomesScreenStack.Screen
          name="EachResultScreen"
          component={EachResult}
        //   options={({ route }) => ({ title: route.params.name })}
          options={({route})=>({ 
            
            headerTitle: ({})=>{
                // console.log(route.params)

                // return <Text
                // style={{marginLeft:-11}}>
                    
                //     aa</Text>
                    },
                     headerRight:()=>{
                        return  <Text 
                        style={{
                            fontSize:20,
                            fontWeight:'bold',
                            marginRight:25
                        }}>{route.params.action}</Text>
                  },
           }
           )}
        />
      </HomesScreenStack.Navigator>
    );
  }

  function ProfileNavigation() {
    return (
      <HomesScreenStack.Navigator>
        <HomesScreenStack.Screen
          name="HomeScreen"
          component={ProfileScreen}
          options={{ 
            headerLeft:()=>{
                // return <HomeHeader show={false}/>
            },
            headerRight:()=>{
                    return  <Text 
                    style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}>Profile</Text>
              },
            headerRightContainerStyle:{
              marginRight:15,
            },
            headerLeftContainerStyle:{
              marginLeft:15,
            },
            headerTitle: ()=>{
                return <UserName/>
            }
           }}
        />
      </HomesScreenStack.Navigator>)}













function MyTabs() {
    // console.log(route.params)
  return (
    <Tab.Navigator
    initialRouteName="Home"
    swipeEnabled
    tabBarOptions={{
        showLabel:false,
        // activeTintColor: Colors[colorScheme].tint 
      }}>
      <Tab.Screen
       name="Home" 
       component={HomesNavigation}
      

       options={{
        tabBarIcon: () => <TabBarIcon name="md-home" size={33} color='#6C63FF' />,
      }}
        />
      <Tab.Screen 
      name="ProfileScreen"
      options={{
        tabBarIcon: ({ color }) =>
         <TabBarIcon name="people-circle-sharp" size={43} color='#6C63FF' />,
      }}
       component={ProfileNavigation}
        />
          <Tab.Screen 
      name="Settinxgs"
      options={{
        tabBarIcon: ({ color }) =>
        <Feather name="info" size={34}  color='#6C63FF' />
      }}
       component={HomesNavigation}
        />
    </Tab.Navigator>
  );
}

export default MyTabs