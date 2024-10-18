import { Text, SafeAreaView, StyleSheet } from 'react-native';
import {NavigationContainer}from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
// You can import supported modules from npm




export default function Screen3({navigate}) {
  return (
    <SafeAreaView style={styles.container}>
       <Text>Screen3</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
