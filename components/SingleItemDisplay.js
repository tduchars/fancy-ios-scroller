import React, {Component} from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export default class SingleItemDisplay extends Component{
    state = {}
    render() {
        const styles = StyleSheet.create({
            projectCard: {
              borderWidth: 1,
              borderColor: "lightgrey",
              borderRadius: 8,
              height: height / 6,
              marginTop: 16,
              marginRight: 8,
              marginLeft: 8,
              paddingLeft: 10,
              paddingRight: 10
            },
            projectTitle: { marginTop: 10, fontWeight: "bold", fontSize: 18 },
            titleUnderlined: {
              textAlign: "center",
              paddingTop: 12,
              fontSize: 20,
              fontWeight: "bold",
              textDecorationLine: "underline",
              textDecorationColor: "#e28413"
            },
            siteLink: {
                position: "absolute",
                bottom: 5,
                left: 10,
                fontWeight: "bold",
                color: "#88333B"
              },
              gitHubLink: {
                position: "absolute",
                bottom: 5,
                left: 10,
                fontWeight: "bold",
                color: "#336688"
              }
        });
            return (
                <>
                    <View style={styles.projectCard}>
                    <Text style={styles.projectTitle}>{this.props.project.name}</Text>
                    <Text style={{ marginTop: 10 }}>
                        {this.props.project.bio.slice(0, 160)}...
                    </Text>
                    {!this.props.project.hosted ? (
                        <Text
                        style={styles.gitHubLink}
                        onPress={() => Linking.openURL(this.props.project.link)}
                        >
                        Link to Repo
                        </Text>
                    ) : (
                        <Text
                        style={styles.siteLink}
                        onPress={() => Linking.openURL(this.props.project.link)}
                        >
                        Link to Site
                        </Text>
                    )}
                    </View>
                </>
            );
        }
    }
