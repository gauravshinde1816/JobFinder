import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { fetchJobs } from "../actions/job_actions";
import { EvilIcons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { TextInput, Button } from "react-native-paper";
const MapScreen = (props) => {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  // const [role, setRole] = useState("");
  // const [location, setLocation] = useState("");
  // const [distance, setDistance] = useState("");
  const onRegionChange = (region) => {
    setRegion(region);
  };

  const handleSubmit = async () => {
    props.fetchJobs(region, () => {
      props.navigation.navigate("deck");
    });
  };
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={onRegionChange}
      >
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title="USA"
        />
      </MapView>
      <View style={styles.location}>
        {/* <TextInput
          value={location}
          onChangeText={(e) => setLocation(e.target.value)}
          label="Set Your Location"
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 20,
          }}
        >
          <TextInput
            style={styles.params}
            value={role}
            onChangeText={(e) => setRole(e.target.value)}
            label="Role"
          />
          <TextInput
            style={styles.params}
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            label="Distance"
          />
        </View> */}
        <Button mode="contained" onPress={handleSubmit}>
          <EvilIcons name="location" size={30} color="white" />
          <Text style={styles.text}>Set My Location</Text>
        </Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  location: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    padding: 20,
  },
  params: {
    width: "40%",
  },
  text: {
    margin: 5,
  },
});

const mapStateToProps = (state) => ({
  jobs: state.jobs.jobs,
});
export default connect(mapStateToProps, { fetchJobs })(MapScreen);
