import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useState, useContext } from 'react';
import AppContext from '../context/AppContext'; // Import context

export default function MidItem({ navigation }) {
  const { name, title, imageURL } = useContext(AppContext); // Lấy giá trị từ context

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={{ uri: 'https://picsum.photos/200' }}
            style={{ height: 50, width: 50, marginRight: 10, borderRadius: 50 }}
          />
          <View>
            <Text>{title}</Text> {/* Hiển thị title từ context */}
            {/* Hiển thị imageURL */}
            <Text style={styles.nameText}>Hello, {name}!</Text>
          </View>
          {/* Hiển thị tên từ context */}
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
        alignItems:'center',borderWidth: 1,
        padding:5
     
        }}>
        <AntDesign name="search1" size={24} color="black" />
        <TextInput
          placeholder="tim kiem"
          style={{
            width: '100%',
            borderWidth:0,
            padding: 10,
             borderColor: 'transparent',
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#ecf0f1',
  },
  title: {
    color: '#8353E2',
    marginBottom: 20,
  },
  image: {
    height: 200,
    width: 200,
    borderWidth: 5,
    borderColor: '#8353E2',
  },
  nameText: {
    marginTop: 20,
    fontSize: 18,
    color: 'gray',
  },
  button: {
    marginTop: 50,
    borderColor: '#8353E2',
    borderWidth: 2,
    borderRadius: 5,
  },
  buttonText: {
    backgroundColor: '#00BDD6',
    color: 'white',
    padding: 5,
    textAlign: 'center',
  },
});
