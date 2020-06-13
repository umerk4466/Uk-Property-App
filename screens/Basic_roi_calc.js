import React from "react";
import { SafeAreaView, ScrollView, Text, View, TextInput } from "react-native";
import { Button } from "react-native-elements";
// input field for money
import { TextInputMask } from "react-native-masked-text";
// import global styles
import { globalstyles } from "../styles/global_styles";
// import form and form validator(formik, yup) library
import * as yup from "yup";
import { Formik } from "formik";

const ReviewBasicForm = yup.object({
  monthly_rental: yup.number("Must be a number").required("Monthly rental must be at least of £0").integer("Must be integer").typeError("Must enter a number again"),
  monthly_mortgage: yup.number("Must be a number").required("Mortgage must be at least of £0").integer("Must be integer").typeError("Must enter a number again"),
  initial_deposit: yup.number("Must be a number").required("Deposit must be at least of £0").integer("Must be integer").typeError("Must enter a number again"),
  final_result: yup.number().integer()
});

export default function Basic_roi_calc() {
  return (
    <Formik
      initialValues={{ monthly_rental: "", monthly_mortgage: "", initial_deposit: "", final_result: 0 }}
      validationSchema={ReviewBasicForm}
      enableReinitialize={true}
      onSubmit={(values, actions) => {
        // get all the filed data and add Basic return on investment formula
        let annual_cash_flow = (values.monthly_rental * 12) - (values.monthly_mortgage * 12);
        let annual_roi = (annual_cash_flow / values.initial_deposit) * 100
        // update the "final_result field"
        actions.setFieldValue("final_result", annual_roi.toFixed(0))
      }}
    >
      {props => (
        <SafeAreaView style={globalstyles.container}>
          <ScrollView>
            <View style={globalstyles.main_row}>
              <View style={globalstyles.col}>
                <View style={globalstyles.result_container}>
                  <Text style={{ fontSize: 16 }}> Return on investment </Text>
                  <Text style={{ fontSize: 17 }}> {props.values.final_result}%</Text>
                </View>
              </View>
              <View style={globalstyles.col}>
                <Text>Monthly rental</Text>
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
                {props.errors.monthly_rental && props.touched.monthly_rental ? <Text style={globalstyles.error_field} numberOfLines={1}>{props.errors.monthly_rental}</Text> : null}


                <Text>Mortgage interest pcm</Text>
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
                {props.errors.monthly_mortgage && props.touched.monthly_mortgage ? <Text style={globalstyles.error_field} numberOfLines={1}>{props.errors.monthly_mortgage}</Text> : null}


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
                  placeholder={"£500"}
                  keyboardType={"decimal-pad"}
                  value={props.values.initial_deposit}
                  onBlur={props.handleBlur("initial_deposit")}
                  includeRawValueInChangeText={true}
                  onChangeText={(maskedText, rawText) => {
                    props.setFieldValue("initial_deposit", rawText);
                  }}
                />
                {props.errors.initial_deposit && props.touched.initial_deposit ? <Text style={globalstyles.error_field} numberOfLines={1}>{props.errors.initial_deposit}</Text> : null}

                <View style={globalstyles.col}>
                  <Button title="Submit" onPress={props.handleSubmit} />
                  <Text>spacs</Text>
                  <Button title="Reset" onPress={props.resetForm} />
                </View>

              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </Formik>
  );
}