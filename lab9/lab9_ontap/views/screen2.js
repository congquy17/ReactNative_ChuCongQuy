import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import axios from 'axios';
import {useState,useEffect} from 'react'
export default function Screen2({ navigate }) {
  const [motobikes,setMotobikes]=useState([]);
  useEffect(()=>{
    axios.get('https://66090cbaa2a5dd477b1505d2.mockapi.io/tododata').then(res=>setMotobikes(res.data))
  },[])
  const renderItem = (
    <View
      style={{
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#00000040',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}>
      <AntDesign
        name="hearto"
        size={24}
        color="red"
        style={{ position: 'absolute', top: 5, left: 5 }}
      />
      <Image
        style={{ height: 150, width: 150, marginTop: 30 }}
        source={require('../assets/image1.png')}
      />
      <Text style={{ color: '' }}>Pinarello</Text>
      <Text style={{ color: '' }}>$1800</Text>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Text>The world’s Best Bike</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity
            style={{
              borderColor: '#E9414187',
              borderWidth: 1,
              alignItems: 'flex-start',
              paddingVertical: 5,
              paddingHorizontal: 10,
              margin: 5,
            }}>
            <Text style={{ color: '##E94141' }}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderColor: '#BEB6B687',
              borderWidth: 1,
              alignItems: 'center',
              paddingVertical: 5,
              paddingHorizontal: 10,
              margin: 5,
            }}>
            <Text style={{ color: '#BEB6B6' }}>Roadbike</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderColor: '#BEB6B687',
              borderWidth: 1,
              alignItems: 'center',
              paddingVertical: 5,
              paddingHorizontal: 10,
              margin: 5,
            }}>
            <Text style={{ color: '#BEB6B6' }}>Mountain</Text>
          </TouchableOpacity>
        </View>

        <FlatList data={motobikes}  keyExtractor={(item) => item.id}  renderItem={renderItem} numColumns={2}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
