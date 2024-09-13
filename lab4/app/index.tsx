import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

const App = () => {
  const [Count, setCount] = useState(1);
  const [Price, setPrice] = useState(141800);
  const initialPrice = 141800;
  useEffect(() => {
    setPrice(initialPrice * Count);
  }, [Count]);
  return (
    <ScrollView style={styles.container}>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Image
            style={styles.image_m}
            source={{
              uri: "https://th.bing.com/th/id/R.abe2cd551cef07727358af19d7fd12c9?rik=dDlGpx81LnxIGg&pid=ImgRaw&r=0",
            }}
          />
        </View>
        <View style={{ flex: 2, padding: 10 }}>
          <Text style={styles.headerText}>
            Nguyên hàm tích phân và ứng dụng
          </Text>
          <Text style={styles.price}>141.800 ₫</Text>
          <Text style={styles.originalPrice}>441.800 ₫</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "40%",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setCount(Count - 1);
                }}
                style={{
                  height: 30,
                  backgroundColor: "grey",
                  width: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white" }}>-</Text>
              </TouchableOpacity>

              <Text>{Count}</Text>
              <TouchableOpacity
                onPress={() => {
                  setCount(Count + 1);
                }}
                style={{
                  height: 30,
                  paddingHorizontal: 5,
                  backgroundColor: "grey",
                  width: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white" }}>+</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: "40%",
                alignItems: "center",
                position: "absolute",
                right: 0,
              }}
            >
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#4CAF50" }}>Mua sau</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Áp dụng" color="#4CAF50" />
      </View>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>Tổng cộng</Text>
        <Text style={styles.summaryPrice}>{Price} ₫</Text>
      </View>
      <View style={styles.footer}>
        <Button title="TIẾN HÀNH ĐẶT HÀNG" color="#FF5722" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F5F5F5",
  },
  header: {
    padding: 10,
    backgroundColor: "white",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    fontSize: 24,
    color: "red",
  },
  originalPrice: {
    textDecorationLine: "line-through",
    fontSize: 18,
    color: "grey",
  },

  quantityText: {
    fontSize: 16,
  },
  quantityInput: {
    borderWidth: 1,
    borderColor: "grey",
    padding: 5,
    width: 50,
    textAlign: "center",
  },
  buttonContainer: {
    padding: 10,
    backgroundColor: "white",
    marginBottom: 10,
  },
  summary: {
    padding: 10,
    backgroundColor: "white",
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  summaryText: {
    fontSize: 16,
  },
  summaryPrice: {
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    padding: 10,
  },
  image_m: {
    height: 100,
    width: 100,
  },
});

export default App;
