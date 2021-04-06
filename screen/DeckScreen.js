import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import Cards from "../components/Cards";

const DeckScreen = (props) => {
  return (
    <View>
      <Cards data={props.jobs} />
    </View>
  );
};

const mapStateToProps = (state) => ({
  jobs: state.jobs.jobs,
});

export default connect(mapStateToProps)(DeckScreen);
