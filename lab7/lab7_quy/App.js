import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Navigation from './navigation/Navigation'
import { AppProvider } from "./context/AppContext";
export default function App() {
  return (
    <AppProvider>
    <Navigation />
    </AppProvider>
  );
}

const styles = StyleSheet.create({});
