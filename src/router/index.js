import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import Absent from '../screens/Absent';
import Login from '../screens/Login';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const MainApp = ({route}) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home-sharp' : 'home-outline';
          } else if (route.name === 'Absent') {
            iconName = focused ? 'person-circle' : 'person-circle';
          }

          // Menggunakan ikon Ionicons
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue', // Ubah warna ikon tab aktif
        tabBarInactiveTintColor: 'gray', // Ubah warna ikon tab non-aktif
        tabBarLabelStyle: {fontSize: 12}, // Ubah gaya label tab
      })}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Absent"
        component={Absent}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const MyTab = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MyTab;
