import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Slides from "../components/Slides";
const WelcomeScreen = ({ navigation }) => {
  const SLIDES_DATA = [
    { id: 1, text: "Welcome to Job Finder", color: "#4d88ff" },
    { id: 2, text: "Set your location", color: "#70dbdb" },
    { id: 3, text: " Find jobs in your locality", color: "#8080ff" },
  ];

  return <Slides navigation={navigation} data={SLIDES_DATA} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default WelcomeScreen;
