import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
// You can import supported modules from npm

const datas=[
  {
    ten:'quy',
    title:'chu'
  }
]
export default function StartItem({navigation}) {
  const midOpen= ()=>{
    navigation.navigate('MidItem',datas[0])
  }
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          height: 200,
          width: 200,
          borderWidth: 5,
          borderColor: '#8353E2',
         
        }}></View>
      <Text style={{ color: '#8353E2' }}>Manager your tast</Text>
      <View style={{flexDirection:'row', borderWidth:1,padding:5,marginTop:50}}>
      <AntDesign name="mail" size={24} color="gray" />
      <TextInput style={{marginLeft:10,color:'gray'}} placeholder="enter your name"/>
      </View>
      <TouchableOpacity
        style={{
          marginTop: 50,
          borderColor: '#8353E2',
          borderWidth: 2,
        
        }} onPress={midOpen}>
        <Text style={{ backgroundColor: '#00BDD6',color:'white',padding:5 }}>GetStarted-></Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
