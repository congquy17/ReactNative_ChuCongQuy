import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const data: any = [
  { id: "1", title: "Item 1" },
  { id: "2", title: "Item 2" },
  { id: "3", title: "Item 3" },
  // Add more items as needed
];
const renderItem = ({ item }: any) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item.title}</Text>
  </View>
);

export default function SignUp() {
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
      <Text style={styles.normalText}>Sign fame in your account</Text>
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
        <TextInput
          placeholder="Password"
          style={{ width: "70%" }}
          secureTextEntry={pwdHidden ? true : false}
        />
        <TouchableOpacity
          onPress={() => {
            setPwdHidden(!pwdHidden);
          }}
          style={{ padding: 10 }}
        >
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
      <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
        <Image
          style={{ width: 100, height: 100, marginTop: 20 }}
          source={require("../../assets/images/favicon.png")}
        />
        <Image
          style={{ width: 100, height: 100, marginTop: 20 }}
          source={require("../../assets/images/favicon.png")}
        />
        <Image
          style={{ width: 100, height: 100, marginTop: 20 }}
          source={require("../../assets/images/favicon.png")}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerCell}>Name</Text>
          <Text style={styles.headerCell}>Age</Text>
          <Text style={styles.headerCell}>Occupation</Text>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </View>
  );
}

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
  container: {
    // flex: 1,
    // padding: 20,
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#f1f1f1",
    padding: 10,
  },
  headerCell: {
    flex: 1,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    padding: 10,
  },
  cell: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: "#CED0CE",
  },
});
