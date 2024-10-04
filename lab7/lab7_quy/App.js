import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Navigation  from './navigation/Navigation'

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Navigation/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
