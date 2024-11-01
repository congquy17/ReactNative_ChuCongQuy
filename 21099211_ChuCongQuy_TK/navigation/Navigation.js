import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import StartItem from '../views/StartItem';
import MidItem from '../views/MidItem';
import EndItem from '../views/EndItem';
export default function MyStack() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        independent="MidItem"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="StartItem" component={StartItem} />
        <Stack.Screen name="MidItem" component={MidItem} />
        <Stack.Screen name="EndItem" component={EndItem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
