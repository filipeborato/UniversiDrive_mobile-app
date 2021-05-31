import React from "react";
import { View, Text } from "react-native";
import Login from "./pages/Login/index";
import Recoverpassword from "./pages/Recoverpassword";
import Send from "./pages/Send";
import Idonthavearegistration from "./pages/Idonthavearegistration";
import 'react-native-gesture-handler';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack= createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Recoverpassword" component={Recoverpassword}/>
        <Stack.Screen name="Send" component={Send}/>
        <Stack.Screen name="Idonthavearegistration" component={Idonthavearegistration}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



