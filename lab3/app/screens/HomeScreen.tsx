import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function HomeScreen({ navigation }:any) {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor:"yellow", flexDirection:'row', justifyContent:"space-between" , paddingVertical:10}}>
     
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Text>Home</Text>
        </TouchableOpacity>
        <Text>0847911569</Text>
      </View>
      <Text>Đây là trang home</Text>
      <Button title="Sign In" onPress={() => navigation.navigate('Sign In')} />
        <Button title='Sign Up' color={"red"}  onPress={()=>{navigation.navigate('Sign Up')}} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    // justifyContent:"center",
    // alignItems:"center"
  }
})