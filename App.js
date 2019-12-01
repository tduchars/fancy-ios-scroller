import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Animated,
  TouchableWithoutFeedback
} from "react-native";

HEADER_MAX_HEIGHT = 120;
HEADER_MIN_HEIGHT = 70;
PROFILE_MAX_HEIGHT = 80;
PROFILE_MIN_HEIGHT = 40;
ADJUSTED_HEIGHT = PROFILE_MAX_HEIGHT / 2;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0)
    };
  }

  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: "clamp"
    });
    const profileImageHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [PROFILE_MAX_HEIGHT, PROFILE_MIN_HEIGHT],
      extrapolate: "clamp"
    });
    const profileImageMarginTop = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT - ADJUSTED_HEIGHT, HEADER_MAX_HEIGHT + 5],
      extrapolate: "clamp"
    });
    const headerZIndex = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [0, 1],
      extrapolate: "clamp"
    });
    const headerTitleBottom = this.state.scrollY.interpolate({
      inputRange: [
        0,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_MIN_HEIGHT,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_MIN_HEIGHT + 26
      ],
      outputRange: [-20, -20, -20, 0],
      extrapolate: "clamp"
    });

    // STYLES //
    const styles = StyleSheet.create({
      container: {
        flex: 1
      },
      imageStyle: {
        flex: 1,
        width: null,
        height: null
      },
      primaryName: {
        fontWeight: "bold",
        fontSize: 26,
        paddingLeft: 10,
        color: "black"
      }
    });

    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: "orange",
            height: headerHeight,
            zIndex: headerZIndex,
            alignItems: "center"
          }}
        >
          <Animated.View
            style={{
              position: "absolute",
              bottom: headerTitleBottom
            }}
          >
            <TouchableWithoutFeedback
              onPress={() => {
                this.refs._scrollView.scrollTo({ y: 0 });
              }}
            >
              <Text
                style={{ color: "white", fontSize: 14, fontWeight: "bold" }}
              >
                Tony Duchars
              </Text>
            </TouchableWithoutFeedback>
          </Animated.View>
        </Animated.View>
        <ScrollView
          style={{ flex: 1 }}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.state.scrollY } } }
          ])}
          ref="_scrollView"
        >
          <Animated.View
            style={{
              height: profileImageHeight,
              width: profileImageHeight,
              borderRadius: PROFILE_MAX_HEIGHT / 2,
              borderColor: "white",
              borderWidth: 3,
              overflow: "hidden",
              marginTop: profileImageMarginTop,
              marginLeft: 10
            }}
          >
            <Image
              source={require("./assets/eagles_art.jpg")}
              style={styles.imageStyle}
            />
          </Animated.View>
          <View>
            <Text style={styles.primaryName}>Tony Duchars</Text>
          </View>
          <View style={{ height: 1500 }}></View>
        </ScrollView>
      </View>
    );
  }
}
