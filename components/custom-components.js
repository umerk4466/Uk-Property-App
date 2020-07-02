import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

// CalculateAndResetButtons Component Style Start
export function CalculateAndResetButtons(props) {
  return (
    <View style={styles.ButtonsViewContainer}>
      {/* Calculate Button */}
      <TouchableOpacity
        style={styles.ButtonStyle}
        onPress={props.onPressCalculateBtn}
      >
        <Text style={styles.BtnTextStyle}>{props.calculateBtnTittle}</Text>
      </TouchableOpacity>

      {/* middel text "or" */}
      <Text style={styles.TextStyle}> or </Text>

      {/* Reset Button */}
      <TouchableOpacity
        style={styles.ButtonStyle}
        onPress={props.onPressResetBtn}
      >
        <Text style={styles.BtnTextStyle}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

// ResultBox Component
export function ResultBox(props) {
  return (
    <View style={styles.ResultsViewContainer}>
      <Text style={{ fontSize: 16 }}> {props.title} </Text>
      <Text style={{ fontSize: 17 }}>
        {props.result}
        {props.sign}
      </Text>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  // CalculateAndResetButtons Component Style Start
  ButtonsViewContainer: {
    paddingVertical: 15,
  },
  ButtonStyle: {
    backgroundColor: "#2980B9",
    height: 40,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  BtnTextStyle: {
    color: "white",
    fontSize: 16,
  },
  TextStyle: {
    textAlign: "center",
    color: "rgba(0, 0, 0, 0.23)",
    padding: 2,
  },
  // ResultBox Component Style Start
  ResultsViewContainer: {
    backgroundColor: "#FFFFFF",
    height: 110,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.3,
    borderColor: "#B6B6B6",
    borderRadius: 4,
  },
});
