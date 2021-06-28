import React from "react";
import { View, Text } from "react-native";
import Login from "./pages/1.0.Login/index";
import Recoverpassword from "./pages/2.0.Recoverpassword";
import Send from "./pages/2.1.Send";
import Idonthavearegistration from "./pages/3.0.Idonthavearegistration";
import Lastname from "./pages/3.1.Lastname";
import Gender from "./pages/3.2.Gender";
import Phone from "./pages/3.3.Phone";
import Emailandpassword from "./pages/3.4.Emailandpassword";
import Send2 from "./pages/3.5.Send2";
import "react-native-gesture-handler";

import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpContext from "./hooks/SignUpContext";
import { useState } from "react";

const Stack = createStackNavigator();

export default function App() {
  const [signUpData, setSignUpData] = useState({
    name: "",
    lastName: "",
    gender: "",
    phone: "",
    emailAndPassword: {
      email: "",
      password: "",
    },
  });
  console.log(signUpData);
  return (
    <NavigationContainer>
      <SignUpContext.Provider value={{ signUpData, setSignUpData }}>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Recoverpassword" component={Recoverpassword} />
          <Stack.Screen name="Send" component={Send} />
          <Stack.Screen
            name="Idonthavearegistration"
            component={Idonthavearegistration}
          />
          <Stack.Screen name="Lastname" component={Lastname} />
          <Stack.Screen name="Gender" component={Gender} />
          <Stack.Screen name="Phone" component={Phone} />
          <Stack.Screen name="Emailandpassword" component={Emailandpassword} />
          <Stack.Screen name="Send2" component={Send2} />
        </Stack.Navigator>
      </SignUpContext.Provider>
    </NavigationContainer>
  );
}
