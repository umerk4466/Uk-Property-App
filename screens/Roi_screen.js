import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
// input field for money
import { TextInputMask } from "react-native-masked-text";
// import global styles
import { globalstyles } from "../styles/global_styles";
// import custom components
import {
  ResultBox,
  CalculateAndResetButtons,
} from "../components/custom-components";
import { compose } from "recompose";
// import form and form validator(formik, yup) library
import * as yup from "yup";
import { Formik } from "formik";

import {
  handleTextInput,
  withNextInputAutoFocusForm,
  withNextInputAutoFocusInput,
} from "react-native-formik";

const Form = withNextInputAutoFocusForm(View);
// define error field messages
const yup_field_errors = yup
  .number("Value must be a number")
  .required("Field cannot be empty at least add £0")
  .integer("Must be an integer")
  .typeError("Enter value again");

// yub fields validators
const ReviewBasicForm = yup.object({
  monthly_rental: yup_field_errors,
  monthly_mortgage: yup_field_errors,
  initial_deposit: yup_field_errors,
});

export default function Roi_screen() {
  return (
    <Formik
      initialValues={{
        monthly_rental: "",
        monthly_mortgage: "",
        initial_deposit: "",
        final_result: 0,
      }}
      validationSchema={ReviewBasicForm}
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
      {(props) => (
        <SafeAreaView style={globalstyles.container}>
          <ScrollView
            contentContainerStyle={globalstyles.ScrollViewStyle}
            keyboardShouldPersistTaps={"handled"}
          >
            <ResultBox
              title="Return on investment"
              result={props.values.final_result}
              sign="% p.a"
            />
            <Text style={globalstyles.blue_text}>Property Details</Text>
            <View style={globalstyles.back_container}>
              <Text>Monthly rent of the property</Text>
              <Form>
                <TextInputMask
                  withNextInputAutoFocusInput
                  multiline={true}
                  returnKeyType="next"
                  type={"money"}
                  options={{
                    precision: 0,
                    separator: ".",
                    delimiter: ",",
                    unit: "£",
                    suffixUnit: "",
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
                  <Text style={globalstyles.input_error_text}>
                    {props.errors.monthly_rental}
                  </Text>
                ) : null}

                <Text>Monthly Mortgage payments</Text>
                <TextInputMask
                  multiline={true}
                  type={"money"}
                  options={{
                    precision: 0,
                    separator: ".",
                    delimiter: ",",
                    unit: "£",
                    suffixUnit: "",
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
                  <Text style={globalstyles.input_error_text}>
                    {props.errors.monthly_mortgage}
                  </Text>
                ) : null}

                <Text>Initial investment (deposit)</Text>
                <TextInputMask
                  multiline={true}
                  type={"money"}
                  options={{
                    precision: 0,
                    separator: ".",
                    delimiter: ",",
                    unit: "£",
                    suffixUnit: "",
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
                  <Text style={globalstyles.input_error_text}>
                    {props.errors.initial_deposit}
                  </Text>
                ) : null}
              </Form>
            </View>

            <CalculateAndResetButtons
              onPressCalculateBtn={props.handleSubmit}
              calculateBtnTittle="Calculate ROI"
              onPressResetBtn={props.resetForm}
            ></CalculateAndResetButtons>
          </ScrollView>
        </SafeAreaView>
      )}
    </Formik>
  );
}
