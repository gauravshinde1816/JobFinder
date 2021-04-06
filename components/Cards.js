import React, { useState, useEffect } from "react";
import {
  View,
  Animated,
  Text,
  ScrollView,
  PanResponder,
  Dimensions,
  StyleSheet,
  LayoutAnimation,
  UIManager,
  Alert,
} from "react-native";

import CardComponent from "./CardComponent";

const position = new Animated.ValueXY();
//set constants
const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_THRESHOLD = Dimensions.get("window").width * 0.25;
const RenderCard = ({ data }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.spring();
    console.log(data);
  }, []);
  //initialize Pan Responder
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (events, gestures) => {
      position.setValue({ x: gestures.dx, y: gestures.dy });
    },
    onPanResponderRelease: (events, gestures) => {
      if (gestures.dx > SCREEN_THRESHOLD) {
        dislike();
      } else if (gestures.dx < -SCREEN_THRESHOLD) {
        like();
      } else {
        resetPosition();
      }
    },
  });

  //dislikeSwap
  const dislike = () => {
    Animated.timing(position, {
      toValue: { x: SCREEN_WIDTH * 1.5, y: 0 },
      duration: 250,
      useNativeDriver: false,
    }).start(() => {
      onSwipeComplete();
    });
  };
  //likeSwipe
  const like = () => {
    Animated.timing(position, {
      toValue: { x: -SCREEN_WIDTH * 1.5, y: 0 },
      duration: 250,
      useNativeDriver: false,
    }).start(() => {
      onSwipeComplete();
    });
  };
  const onSwipeComplete = () => {
    // const item = data[index];
    // Alert.alert(`You Found the perfect match`);
    position.setValue({ x: 0, y: 0 });
    setCount(count + 1);
    // console.log(index);
  };

  //reset position
  const resetPosition = () => {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 },
      bounciness: 12,
      useNativeDriver: false,
    }).start();
  };

  // get the styles for the cards
  const getCardStyle = () => {
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ["-120deg", "0deg", "120deg"],
    });
    return {
      ...position.getLayout(),
      transform: [
        {
          rotate,
        },
      ],
    };
  };

  return (
    <View>
      {data
        .map((item, index) => {
          if (index < count) {
            return null;
          }
          if (index === count) {
            return (
              <Animated.View
                style={[getCardStyle(), styles.cardStyle]}
                key={index}
                {...panResponder.panHandlers}
              >
                <CardComponent key={count} item={item} />
              </Animated.View>
            );
          }
          return (
            <View
              key={index}
              style={[styles.cardStyle, { top: 10 * (index * 0.25 - count) }]}
            >
              <CardComponent item={item} />
            </View>
          );
        })
        .reverse()}
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    position: "absolute",
    zIndex: 1,
  },
});
export default RenderCard;
