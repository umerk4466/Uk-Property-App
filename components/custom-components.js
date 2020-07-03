import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// import input-field for money
import { TextInputMask } from "react-native-masked-text";
// import Yup library for error messages
import * as yup from "yup";

// CalculateAndResetButtons Component Style Start
export const CalculateAndResetButtons = (props) => {
  return (
    <View style={styles.ButtonsViewContainer}>
      {/* Calculate Button */}
      <TouchableOpacity
        style={styles.ButtonStyle}
        onPress={props.onPressCalculateBtn}
      >
        <Text style={[styles.BtnTextStyle, styles.LargeFont]}>
          {props.calculateBtnTittle}
        </Text>
      </TouchableOpacity>

      {/* middel text "or" */}
      <Text style={styles.TextStyle}> or </Text>

      {/* Reset Button */}
      <TouchableOpacity
        style={styles.ButtonStyle}
        onPress={props.onPressResetBtn}
      >
        <Text style={[styles.BtnTextStyle, styles.LargeFont]}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

// ResultBox Component
export const ResultBox = (props) => {
  return (
    <View style={styles.ResultsViewContainer}>
      <Text style={styles.LargeFont}> {props.title} </Text>
      <Text style={styles.LargeFont}>
        {props.result}
        {props.sign}
      </Text>
    </View>
  );
};

// CustomTextInputMask component for money input
export const CustomTextInputMask = ({
  title,
  placeholder,
  onBlur,
  value,
  onChangeText,
  error,
  touched,
}) => {
  return (
    <View>
      <Text numberOfLines={1}>{title}</Text>
      <TextInputMask
        multiline={true}
        numberOfLine={1}
        blurOnSubmit={true}
        type={"money"}
        options={{
          precision: 0,
          separator: ".",
          delimiter: ",",
          unit: "£",
          suffixUnit: "",
        }}
        style={[styles.Input, styles.LargeFont]}
        textAlign={"center"}
        placeholder={placeholder}
        keyboardType={"decimal-pad"}
        value={value}
        onBlur={onBlur}
        includeRawValueInChangeText={true}
        onChangeText={onChangeText}
      />
      {error && touched ? (
        <Text style={styles.InputTextError}>{error}</Text>
      ) : null}
    </View>
  );
};
// HeadingText Component
export const HeadingText = (props) => {
  return (
    <Text
      adjustsFontSizeToFit={true}
      numberOfLines={1}
      style={[styles.HeadingTextStyle, styles.LargeFont]}
    >
      {props.heading}
    </Text>
  );
};
// Yup Common Error Messages
export const CommonErrorMessages = yup
  .number("Value must be a number")
  .required("Field cannot be empty at least add £0")
  .integer("Must be an integer")
  .typeError("Please enter value again");

// Styles
const styles = StyleSheet.create({
  // CalculateAndResetButtons Component Style Start
  ButtonsViewContainer: {
    paddingVertical: 15,
  },
  ButtonStyle: {
    backgroundColor: "#2980B9",
    height: 42,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  BtnTextStyle: {
    color: "white",
  },
  TextStyle: {
    textAlign: "center",
    color: "rgba(0, 0, 0, 0.23)",
    padding: 2,
  },
  // ResultBox Component Style Start
  ResultsViewContainer: {
    backgroundColor: "#FFFFFF",
    minHeight: 110,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.3,
    borderColor: "#B6B6B6",
    borderRadius: 4,
  },
  // TextInputMask Component Style Start
  Input: {
    marginTop: 5,
    marginBottom: 3,
    borderWidth: 0.6,
    borderRadius: 2,
    borderColor: "#B6B6B6",
    flex: 1,
  },
  InputTextError: {
    color: "crimson",
    fontSize: 12,
    marginBottom: 5,
  },
  // HeadingText component style start
  HeadingTextStyle: {
    color: "#2980B9",
    paddingVertical: 10,
  },
  //static Font Size LargeFont to use in Text
  LargeFont: { fontSize: 16 },
});
