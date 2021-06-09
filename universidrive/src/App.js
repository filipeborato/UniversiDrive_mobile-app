import React from "react";
import { View, Text } from "react-native";
import Login from "./pages/1.0.Login/index";
import Recoverpassword from "./pages/2.0.Recoverpassword";
import Send from "./pages/2.1.Send";
import Idonthavearegistration from "./pages/3.0.Idonthavearegistration";
import Lastname from "./pages/3.1.Lastname";
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
        <Stack.Screen name="Lastname" component={Lastname}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



