import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { Button } from "react-native-elements";
// input field for money
import { TextInputMask } from "react-native-masked-text";
// import global styles
import { globalstyles } from "../styles/global_styles";
// import form and form validator(formik, yup) library
import * as yup from "yup";
import { Formik } from "formik";

const ReviewAdvanceForm = yup.object({
  monthly_rental: yup
    .number("Must be a number")
    .required("Monthly rent must be at least of £0")
    .integer("Must be integer")
    .typeError("Must enter a number again"),
  monthly_mortgage: yup
    .number("Must be a number")
    .required("Mortgage must be at least of £0")
    .integer("Must be integer")
    .typeError("Must enter a number again"),
  initial_deposit: yup
    .number("Must be a number")
    .required("Deposit must be at least of £0")
    .integer("Must be integer")
    .typeError("Must enter a number again")
  // final_result: yup.number()
});

export default function Advance_roi_tab() {
  return (
    <Formik
      initialValues={{ monthly_rental: "", monthly_mortgage: "", initial_deposit: "", final_result: 0 }}
      validationSchema={ReviewAdvanceForm}
      enableReinitialize={true}
      onSubmit={(values, actions) => {
        // get all the filed data and add Basic return on investment formula
        const annual_cash_flow =
          values.monthly_rental * 12 - values.monthly_mortgage * 12;
        const annual_roi = (annual_cash_flow / values.initial_deposit) * 100;
        // update the "final_result field"
        actions.setFieldValue("final_result", annual_roi.toFixed(0));
      }}
    >
      {props => (
        <SafeAreaView style={globalstyles.container}>
          <ScrollView>
            <View style={globalstyles.main_row}>
              <View style={globalstyles.col}>
                <View style={globalstyles.result_container}>
                  <Text style={{ fontSize: 16 }}> Return on investment </Text>
                  <Text style={{ fontSize: 17 }}>{props.values.final_result}%</Text>
                </View>
              </View>
              <View style={globalstyles.col}>
                <Text>Advance</Text>
                <TextInputMask
                  type={"money"}
                  options={{
                    precision: 0,
                    separator: ".",
                    delimiter: ",",
                    unit: "£",
                    suffixUnit: ""
                  }}
                  style={globalstyles.input}
                  textAlign={"center"}
                  placeholder={"£500"}
                  keyboardType={"decimal-pad"}
                  value={props.values.monthly_rental}
                  onBlur={props.handleBlur("monthly_rental")}
                  includeRawValueInChangeText={true}
                  onChangeText={(maskedText, rawText) => {
                    // props.handleChange("monthly_rental")
                    props.setFieldValue("monthly_rental", rawText);
                  }}
                />
                {props.errors.monthly_rental && props.touched.monthly_rental ? (
                  <Text style={globalstyles.error_field}>
                    {props.errors.monthly_rental}
                  </Text>
                ) : null}

                <Text>Monthly Mortgage payments</Text>
                <TextInputMask
                  type={"money"}
                  options={{
                    precision: 0,
                    separator: ".",
                    delimiter: ",",
                    unit: "£",
                    suffixUnit: ""
                  }}
                  style={globalstyles.input}
                  textAlign={"center"}
                  placeholder={"£200"}
                  keyboardType={"decimal-pad"}
                  value={props.values.monthly_mortgage}
                  onBlur={props.handleBlur("monthly_mortgage")}
                  includeRawValueInChangeText={true}
                  onChangeText={(maskedText, rawText) => {
                    props.setFieldValue("monthly_mortgage", rawText);
                  }}
                />
                {props.errors.monthly_mortgage &&
                props.touched.monthly_mortgage ? (
                  <Text style={globalstyles.error_field}>
                    {props.errors.monthly_mortgage}
                  </Text>
                ) : null}

                <Text>Initial investment (deposit)</Text>
                <TextInputMask
                  type={"money"}
                  options={{
                    precision: 0,
                    separator: ".",
                    delimiter: ",",
                    unit: "£",
                    suffixUnit: ""
                  }}
                  style={globalstyles.input}
                  textAlign={"center"}
                  placeholder={"£10,000"}
                  keyboardType={"decimal-pad"}
                  value={props.values.initial_deposit}
                  onBlur={props.handleBlur("initial_deposit")}
                  includeRawValueInChangeText={true}
                  onChangeText={(maskedText, rawText) => {
                    props.setFieldValue("initial_deposit", rawText);
                  }}
                />
                {props.errors.initial_deposit &&
                props.touched.initial_deposit ? (
                  <Text style={globalstyles.error_field}>
                    {props.errors.initial_deposit}
                  </Text>
                ) : null}
              </View>

              <View style={globalstyles.col}>
                <View style={globalstyles.buttons_container}>
                  <Button title="Calculate ROI" onPress={props.handleSubmit} />
                  <Button title="Reset" onPress={props.resetForm} />
                </View>
                <Text style={globalstyles.calculator_explanation_text}>
                  ROI (Return on Investment) measures the gain or loss
                  generated on an investment relative to the amount of money
                  invested.
                </Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </Formik>
  );
}
