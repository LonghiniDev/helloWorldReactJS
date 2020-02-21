import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class OlaMundo extends Component {
  render() {
    return (
      <View style={styles.Centralizador}>
        <Text style={styles.corTextoVermelho}> Ola Mundo</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  corTextoVermelho: {
    color: "#ff0000",
    fontSize: 50,
    fontWeight: "bold"
  },
  Centralizador: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 30,
    backgroundColor: "#ffaaff"
  }
});
