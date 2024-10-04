import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
// You can import supported modules from npm
import { Card } from "react-native-paper";

// or any files within the Snack
import AssetExample from "./components/AssetExample";
const shopData = [
  {
    id: 1,
    name: "Ca nấu lẩu, nấu mì mini...",
    shopName: "Shop Devang",
    imageItem: "https://picsum.photos/200",
  },
  {
    id: 2,
    name: "1KG KHÔ GÀ BƠ TỎI...",
    shopName: "LTD Food",
    imageItem: "https://picsum.photos/200",
  },
  {
    id: 3,
    name: "Xe cần cẩu đa năng",
    shopName: "Shop Thế giới đồ chơi",
    imageItem: "https://picsum.photos/200",
  },
  {
    id: 4,
    name: "Đồ chơi dạng mô hình",
    shopName: "Shop Thế giới đồ chơi",
    imageItem: "https://picsum.photos/200",
  },
  {
    id: 5,
    name: "Lãnh đạo giản đơn",
    shopName: "Shop Minh Long Book",
    imageItem: "https://picsum.photos/200",
  },
  {
    id: 6,
    name: "Hiểu lòng con trẻ",
    shopName: "Shop Minh Long Book",
    imageItem: "https://picsum.photos/200",
  },
];
export default function App() {
  const [dataShop, setDataShop] = useState();
  // const getMoviesFromApi = ()async => {
  //   return fetch('https://reactnative.dev/movies.json')
  //     .then(response => response.json())
  //     .then(json => {
  //       setDataShop(json)
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // };
  const Item = ({ title }) => (
    <View
      style={{
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
        backgroundColor: "white",
      }}
    >
      <Image
        style={{ height: 50, width: 50 }}
        source={{ uri: title.imageItem }}
      />
      <View style={{ width: "50%" }}>
        <Text style={{ fontSize: 12 }}>{title.name}</Text>
        <Text style={{ fontSize: 12 }}> {title.shopName}</Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "red",
          paddingVertical: 8,
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ color: "white" }}>Chat</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "#1BA9FF",
          height: 42,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 15,
        }}
      >
        <AntDesign style={{}} name="arrowleft" size={24} color="white" />
        <Text style={{ color: "white" }}>Chat</Text>
        <AntDesign name="shoppingcart" size={24} color="white" />
      </View>
      <Text
        style={{ paddingHorizontal: 33, paddingVertical: 10, fontSize: 16 }}
      >
        Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!{" "}
      </Text>
      <FlatList
        data={shopData}
        renderItem={({ item }) => <Item title={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
});
