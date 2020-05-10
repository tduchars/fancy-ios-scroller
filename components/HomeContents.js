import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions, Linking } from "react-native";
import SingleItemDisplay from "./SingleItemDisplay";

const { height, width } = Dimensions.get("window");

class HomeContents extends Component {
  state = {
    projects: [
      {
        name: "Kitlet",
        bio:
          "Full-Stack Shpock-style equipment exchange built by myself and 2 others in 9 days. A RESTful API built with Node.js, Express.js, SQLite3. Front-end developed with React Native. Testing carried out using Mocha, Chai and Supertest.",
        link: "https://github.com/tduchars/kitlet-project",
        hosted: false,
      },
      {
        name: "SMTP Email Server",
        bio:
          "A quick smtp server which could be used to automate client/customer emails regarding their confirmation, one time password or their reset their password.",
        link: "https://github.com/tduchars/smtp-email-server",
        hosted: false,
      },
      {
        name: "Cosmos News",
        bio:
          "Full-Stack Reddit-style news aggregation board. A RESTful API built with Node.js, Express.js, PostgreSQL and frontend built with React.js and CSS. Testing carried out using Mocha, Chai and Supertest.",
        link: "https://cosmos-news-project.netlify.com/",
        hosted: true,
      },
      {
        name: "codeGab",
        bio:
          "codeGab is a web-socket messaging application I made using socket.io. The app has 3 different chat rooms (Python, Javacript and SQL) and emits messages only to that topics chatroom. It's styled using Material.UI and when designing it I thought best to make it look like a smaller component as if it were part of a larger application.",
        link: "https://github.com/tduchars/websocket-msg",
        hosted: false,
      },
    ],
    smallerProjects: [
      {
        name: "NASA Meteor API",
        bio:
          "The app renders all the meteor strikes in NASA's meteorite api and plots them onto a scatter graph. (Interestingly it looks like a map of the earth due to there being over 35,000 crash sites over time!) Then also each meteor has it's own card where more info is displayed on that specific crash site.",
        link: "https://github.com/tduchars/NASA-meteorite-visual",
        hosted: false,
      },
      {
        name: "Books to Read...",
        bio:
          "An application where you can add a book you would like to read so that you do not forget it and remove one off of the list if you have changed your mind or have now read the book.",
        link: "https://github.com/tduchars/to-read-book-list",
        hosted: false,
      },
      {
        name: "Noughts and Crosses",
        bio:
          "My first application I built with ReactJS and is on the list for a bit of noughtstalgia. A functioning noughts and crosses game with dark mode inspired design.",
        link: "https://github.com/tduchars/noughts-and-crosses",
        hosted: false,
      },
      {
        name: "Project Generator",
        bio:
          "This is a local bash command which can be configured (through a series of callback functions) to create files, write to them and append those files in order to quickly create a project with all necessary / boilerplate code.",
        link: "https://github.com/tduchars/projectGenerator",
        hosted: false,
      },
    ],
  };
  render() {
    const styles = StyleSheet.create({
      topContainer: {
        backgroundColor: "white",
        marginTop: 16,
        marginBottom: 16,
      },
      bottomContainer: {
        height: height,
        backgroundColor: "white",
        marginTop: 16,
      },
      titleUnderlined: {
        textAlign: "center",
        paddingTop: 12,
        fontSize: 20,
        fontWeight: "bold",
        textDecorationLine: "underline",
        textDecorationColor: "#e28413",
      },
    });
    let projects = this.state.projects;
    let smlprojects = this.state.smallerProjects;
    return (
      <>
        <View style={styles.topContainer}>
          <Text style={styles.titleUnderlined}>Larger Projects</Text>
          {projects.map((project, idx) => {
            return (
              <SingleItemDisplay key={project.name + idx} project={project} />
            );
          })}
        </View>
        <Text style={styles.titleUnderlined}>Smaller Projects</Text>
        <View style={styles.bottomContainer}>
          {smlprojects.map((project, idx) => {
            return (
              <SingleItemDisplay key={project.name + idx} project={project} />
            );
          })}
        </View>
      </>
    );
  }
}

export default HomeContents;
