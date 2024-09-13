import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, Header } from "@react-navigation/stack";
import { Image, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}  options={{headerShown:false}} />
        <Stack.Screen name="Sign In" component={SignIn} options={{headerShown:false}}/>
        <Stack.Screen name="Sign Up" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
 
  },
});
