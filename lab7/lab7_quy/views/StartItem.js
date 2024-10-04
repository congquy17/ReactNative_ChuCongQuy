import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Image, // Import Image if you're using it later
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useContext } from "react";
import AppContext from "../context/AppContext"; // Ensure correct path to your context

const datass = [
  {
    ten: "quy",
    title: "chu",
    imageURL: "https://picsum.photos/200",
  },
];

export default function StartItem({ navigation }) {
  const { name, setName, title, setTitle, imageURL, setImageURL } = useContext(AppContext);
  
  const midOpen = () => {
    // Set the context values before navigating
    setImageURL(datass[0].imageURL);
    setTitle(datass[0].title);
    navigation.navigate("MidItem"); // Navigate to MidItem
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Display an optional image */}
      <Image source={{ uri: datass[0].imageURL }} style={styles.image} />
      <Text style={styles.headerText}>Manage your task</Text>
      <View style={styles.inputContainer}>
        <AntDesign name="mail" size={24} color="gray" />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your name"
          onChangeText={setName}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={midOpen}>
        <Text style={styles.buttonText}>Get Started -</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  image: {
    height: 200,
    width: 200,
    borderWidth: 5,
    borderColor: "#8353E2",
  },
  headerText: {
    color: "#8353E2",
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    padding: 5,
    marginTop: 50,
    alignItems: 'center', // Center items vertically
  },
  textInput: {
    marginLeft: 10,
    color: "gray",
    flex: 1, // Allows the TextInput to grow
  },
  button: {
    marginTop: 50,
    borderColor: "#8353E2",
    borderWidth: 2,
    borderRadius: 5, // Optional: Adds some rounding to the button
  },
  buttonText: {
    backgroundColor: "#00BDD6",
    color: "white",
    padding: 5,
    textAlign: 'center', // Centers text in the button
  },
});
