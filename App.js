import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <StackNavigationContainer>
      <StackNavigator>
        <Stack.Screen   name="WelcomeScreen" component={WelcomeScreen} 
           options:{{
           headerTitle='RentAir',
           headerTitleAlign='center',
           headerTinColor='yellow'
          }}
       />
      </StackNavigator>
    </StackNavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
