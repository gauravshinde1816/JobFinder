import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, AsyncStorage } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Login } from "../actions/auth_actions";
import { connect } from "react-redux";
const AuthScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // useEffect(() => {
  //   AsyncStorage.removeItem("token").then((res) => console.log("Removed"));
  // }, []);
  const handleSubmit = async () => {
    try {
      const user = { email, password };
      props.Login(user);
      props.navigation.navigate("Tabs");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        label="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button mode="outlined" style={styles.button} onPress={handleSubmit}>
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Dimensions.get("window").height * 0.25,
    padding: 25,
  },
  button: {
    marginTop: 10,
  },
});
export default connect(null, { Login })(AuthScreen);
