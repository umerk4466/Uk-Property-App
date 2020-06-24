import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function ResultBox(props) {
  return (
    <View style={styles.result_container}>
      <Text style={{ fontSize: 16 }}> {props.title} </Text>
      <Text style={{ fontSize: 17 }}>
        {props.result}
        {props.sign}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  result_container: {
    backgroundColor: "white",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 1
  }
});
