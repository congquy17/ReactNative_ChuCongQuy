import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SignUp from "./SignUp";
const SIGN_IN = "SIGN_IN";
const SIGN_UP = "SIGN_UP";
const GET_STARTED = "GET_STARTED";
export default function SignIn({ navigation }: any) {
  const [page, setPage] = useState<any>(SIGN_IN);

  const renderPage = () => {
    switch (page) {
      case SIGN_IN:
        return <Form />;
      case SIGN_UP:
        return <SignUp />;
      case GET_STARTED:
        return <Fume />;
      default:
        return <Form />;
    }
  }
  return (
    <View style={{ flex: 1, borderWidth: 1 }}>
      <View style={{ width: "100%", height: "25%" }}>
        <Header page={page} setPage={setPage} />
      </View>
      <View style={{ width: "100%", height: "40%" }}>
        {renderPage()}
       
      </View>
    </View>
  );
}

const Header = ({ page, setPage }: any) => {
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* 1 header */}
      <View
        style={{
          height:'70%',
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#468264",
        }}
      >
        
        <Text style={styles.largeText}>App Booking Travel</Text>
        <Text style={styles.smallText}>
          App Booking Travel Use booking App travel relax, chill
        </Text>
      </View>
      {/* 2 tab */}

      <View style={{ height: 50, width: "100%", flexDirection: "row",justifyContent:'center' }}>
        {/*"SIGN_IN";  */}
        <TouchableOpacity
          style={{
            width: "30%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setPage(SIGN_IN);
          }}
        >
          <Text style={styles.normalText}>Sign In</Text>
          {page == SIGN_IN ? (
            <View
              style={{
                position: "absolute",
                bottom: 0,
                height: 3,
                width: "100%",
                backgroundColor: "#468264",
              }}
            ></View>
          ) : null}
        </TouchableOpacity>
        {/* "GET_STARTED" */}
        <TouchableOpacity
          style={{
            width: "30%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setPage(GET_STARTED);
          }}
        >
          <Text style={styles.normalText}>Get Started</Text>
          {page == GET_STARTED ? (
            <View
              style={{
                position: "absolute",
                bottom: 0,
                height: 3,
                width: "100%",
                backgroundColor: "#468264",
              }}
            ></View>
          ) : null}
        </TouchableOpacity>
        {/* Sign-up */}
        <TouchableOpacity
          style={{
            width: "30%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setPage(SIGN_UP);
          }}
        >
          <Text style={styles.normalText}>Sign Up</Text>
          {page == SIGN_UP ? (
            <View
              style={{
                position: "absolute",
                bottom: 0,
                height: 3,
                width: "100%",
                backgroundColor: "#468264",
              }}
            ></View>
          ) : null}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pwdHidden, setPwdHidden] = useState(true);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
  
        paddingHorizontal: 30,
        paddingVertical: 30,
      }}
    >
      <Text style={styles.normalText}>Login in your account</Text>
      <View
        style={{
          marginTop: 20,
          backgroundColor: "white",
          height: 45,
          width: "100%",
          elevation: 0,
          alignItems: "center",
          paddingLeft: 20,
          flexDirection: "row",
        }}
      >
        <Image
          style={{ width: 20, height: 20, marginRight: 10 }}
          source={require("../../assets/images/icon/Vector.jpg")}
        />
        <TextInput placeholder="Email" style={{ width: "80%" }} />
      </View>
      <View
        style={{
          marginTop: 20,
          backgroundColor: "white",
          height: 45,
          width: "100%",
          elevation: 0,
          alignItems: "center",
          paddingLeft: 20,
          flexDirection: "row",
        }}
      >
        <Image
          style={{ width: 20, height: 20, marginRight: 10 }}
          source={require("../../assets/images/icon/eye-regular 1.jpg")}
        />
        <TextInput placeholder="Password" style={{ width: "70%" }} secureTextEntry={pwdHidden?true:false} />
        <TouchableOpacity onPress={()=>{
          setPwdHidden(!pwdHidden);
        }}style={{padding:10}}>
          <Text>mở</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 20, width: "100%", alignItems: "center" }}>
        <TouchableOpacity
          style={{
            width: "60%",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            backgroundColor: "#468264",
          }}
        >
          <Text style={{ color: "white" }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const Fume = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pwdHidden, setPwdHidden] = useState(true);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
  
        paddingHorizontal: 30,
        paddingVertical: 30,
      }}
    >
      <Text style={styles.normalText}>Looututt in your account</Text>
      <View
        style={{
          marginTop: 20,
          backgroundColor: "white",
          height: 45,
          width: "100%",
          elevation: 0,
          alignItems: "center",
          paddingLeft: 20,
          flexDirection: "row",
        }}
      >
     
        <MaterialCommunityIcons name="email" size={24} color="black"style={{ width: 20, height: 20, marginRight: 10 }}/>
        <TextInput placeholder="Email" style={{ width: "80%" }} />
      </View>
      <View
        style={{
          marginTop: 20,
          backgroundColor: "white",
          height: 45,
          width: "100%",
          elevation: 0,
          alignItems: "center",
          paddingLeft: 20,
          flexDirection: "row",
        }}
      >
        <MaterialCommunityIcons name="lock" size={24} color="black"style={{ width: 20, height: 20, marginRight: 10 }}/>
        <TextInput placeholder="Password" style={{ width: "70%" }} secureTextEntry={pwdHidden?true:false} />
        <TouchableOpacity onPress={()=>{
          setPwdHidden(!pwdHidden);
        }}style={{padding:10}}>
          <MaterialCommunityIcons name="eye" size={24} color="black"/>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 20, width: "100%", alignItems: "center" }}>
        <TouchableOpacity
          style={{
            width: "60%",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            backgroundColor: "#468264",
          }}
        >
          <Text style={{ color: "white" }}>Login</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput multiline={true} numberOfLines={10} placeholder="MultiLine" />
        <FlatList
          />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  smallText: {
    fontSize: 12, // Kích thước chữ nhỏ
    color: "white",
  },
  normalText: {
    fontSize: 16, // Kích thước mặc định
    color: "#468264",
  },
  largeText: {
    fontSize: 24, // Kích thước chữ lớn
    color: "white",
  },
});
