import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
} from 'react-native';
import axios from 'axios';
import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useState, useContext, useEffect } from 'react';
import AppContext from '../context/AppContext'; // Import context

export default function MidItem({ navigation }) {
  const { name, title, imageURL,setTodoData,todoData } = useContext(AppContext); // Lấy giá trị từ context
  useEffect(() => {
    axios
      .get('https://66090cbaa2a5dd477b1505d2.mockapi.io/tododata')
      .then((response) => setTodoData(response.data))
      .catch((error) => console.error('error fetch data'));
  }, []);
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
            source={{ uri: imageURL }}
            style={{ height: 50, width: 50, marginRight: 10, borderRadius: 50 }}
          />
          <View>
            <Text>{name}</Text> {/* Hiển thị title từ context */}
            {/* Hiển thị imageURL */}
            <Text style={styles.nameText}>{title}!</Text>
          </View>
          {/* Hiển thị tên từ context */}
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          marginHorizontal: 20,
          padding: 10,
        }}>
        <AntDesign name="search1" size={24} color="black" />
        <TextInput
          placeholder="tim kiem"
          style={{
            borderWidth: 0,
            borderColor: 'transparent',
            outlineStyle: 'none',
          }}
        />
      </View>
      <View style={{ marginTop: 20, marginHorizontal: 20 }}>
        <FlatList
          data={todoData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 20,
                backgroundColor: 'gray',
                marginTop: 10,
              }}>
              <AntDesign name="checksquareo" size={24} color="black" />
              <Text>{item.task}</Text>
              <TouchableOpacity>
                <AntDesign name="edit" size={24} color="black" />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
    marginTop: 5,
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
