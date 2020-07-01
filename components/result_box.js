import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ResultBox(props) {
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
    backgroundColor: "#FFFFFF",
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.3,
    borderColor: "#B6B6B6",
    borderRadius: 4,
  },
});
