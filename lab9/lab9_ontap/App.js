import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './views/screen1';
import Screen2 from './views/screen2';
import Screen3 from './views/screen3';
// or any files within the Snack

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator >
        <Stack.Screen name="screen2" component={Screen2} />
        <Stack.Screen name="screen1" component={Screen1} />
        <Stack.Screen name="screen3" component={Screen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
