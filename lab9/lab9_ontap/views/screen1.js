import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// You can import supported modules from npm

export default function Screen1({navigation}) {
  const openScreen2= ()=>{
    navigation.navigate('screen2')
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={{ marginTop: 50 }}>
          A premium online store for sporter and their stylish choice
        </Text>
        <View style={{ backgroundColor: '#E941411A' , marginTop: 50,padding:40,borderRadius:20}}>
          <Image
            style={{ height: 200, width: 200, }}
            source={require('../assets/image1.png')}
          />
        </View>
        <Text style={{ marginTop: 50 }}>POWER BIKE SHOP</Text>
        <TouchableOpacity style={{ marginTop: 50 ,backgroundColor:'#E94141',padding:10,borderRadius:10}} onPress={openScreen2}>
          <Text style={{ color:'white' }}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
});
