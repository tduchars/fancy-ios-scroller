import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Animated,
  TouchableWithoutFeedback,
  Dimensions
} from "react-native";

const { height, width } = Dimensions.get("window");

class HomeContents extends Component {
  state = {
    projects: [
      {
        name: "Kitlet",
        bio:
          "Full-Stack Shpock-style equipment exchange built by myself and 2 others in 9 days. A RESTful API built with Node.js, Express.js, SQLite3. Front-end developed with React Native. Testing carried out using Mocha, Chai and Supertest.",
        link: "https://github.com/tduchars/kitlet-project",
        hosted: false
      },
      {
        name: "Cosmos News",
        bio:
          "Full-Stack Reddit-style news aggregation board. A RESTful API built with Node.js, Express.js, PostgreSQL and frontend built with React.js and CSS. Testing carried out using Mocha, Chai and Supertest.",
        link: "https://cosmos-news-project.netlify.com/",
        hosted: true
      },
      {
        name: "Web-Socket Messaging",
        bio:
          "codeGab is a messaging application I made using socket.io. The app has 3 different chat rooms and emits messages only to that chatroom. It's styled using Material.UI and when designing it I thought best to make it look like a smaller component as if it were part of a larger application.",
        link: "https://github.com/tduchars/websocket-msg",
        hosted: false
      }
    ],
    smallerProjects: [
      {
        name: "NASA Meteor API",
        bio:
          "The app renders all the meteor strikes in NASA's meteorite api and plots them onto a scatter graph. (Interestingly it looks like a map of the earth due to there being over 35,000 crash sites over time!) Then also each meteor has it's own card where more info is displayed on that specific crash site.",
        link: "https://github.com/tduchars/NASA-meteorite-visual",
        hosted: false
      },
      {
        name: "Books to Read...",
        bio:
          "An application where you can add a book you would like to read so that you do not forget it and remove one off of the list if you have changed your mind or have now read the book.",
        link: "https://github.com/tduchars/to-read-book-list",
        hosted: false
      },
      {
        name: "Noughts and Crosses",
        bio:
          "My first application I built with ReactJS and is on the list for a bit of noughtstalgia. A functioning noughts and crosses game with dark mode inspired design.",
        link: "https://github.com/tduchars/noughts-and-crosses",
        hosted: false
      }
    ]
  };
  render() {
    return (
      <>
        <View
          style={{
            backgroundColor: "white",
            marginTop: 15,
            marginBottom: 15
          }}
        >
          {this.state.projects.map((project, idx) => {
            return (
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "red",
                  height: height / 6,
                  marginTop: 26,
                  paddingLeft: 10,
                  paddingRight: 10,
                  alignItems: "left"
                }}
                key={idx}
              >
                <Text
                  style={{ marginTop: 10, fontWeight: "bold", fontSize: 18 }}
                >
                  {project.name}
                </Text>
                <Text style={{ marginTop: 10 }}>
                  {project.bio.slice(0, 160)}...
                </Text>
                <Text
                  style={{
                    position: "absolute",
                    bottom: 5,
                    left: 10
                  }}
                >
                  {project.link}
                </Text>
              </View>
            );
          })}
        </View>
        <View
          style={{
            height: height,
            backgroundColor: "#fbf5f3",
            marginTop: 15
          }}
        >
          {this.state.smallerProjects.map((project, idx) => {
            return (
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "black",
                  height: height / 6,
                  marginTop: 26
                }}
                key={idx}
              >
                <Text>{project.name}</Text>
                <Text>{project.bio}</Text>
                <Text
                  style={{
                    position: "absolute",
                    bottom: 5,
                    textAlign: "center"
                  }}
                >
                  {project.link}
                </Text>
              </View>
            );
          })}
        </View>
      </>
    );
  }
}

export default HomeContents;
