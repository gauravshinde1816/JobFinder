import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import React from "react";
import { FAB } from "react-native-paper";
const SCREEN_WIDTH = Dimensions.get("screen").width;
import { AsyncStorage } from "react-native";
const Slides = ({ navigation, data }) => {
  const handleAuth = async () => {
    let token = await AsyncStorage.getItem("token");
    if (token) {
      navigation.navigate("Tabs");
    } else {
      navigation.navigate("auth");
    }
  };
  const renderSlide = () => {
    return data.map((slide) => (
      <View
        key={slide.id}
        style={[styles.slide, { backgroundColor: slide.color }]}
      >
        <Text style={styles.text}>{slide.text}</Text>
      </View>
    ));
  };
  return (
    <ScrollView horizontal pagingEnabled style={{ flex: 1 }}>
      {renderSlide()}
      <FAB style={styles.fab} label="I am Ready!!" onPress={handleAuth} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: SCREEN_WIDTH,
  },
  text: {
    fontSize: 30,
    color: "white",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#131313",
  },
});

export default Slides;
