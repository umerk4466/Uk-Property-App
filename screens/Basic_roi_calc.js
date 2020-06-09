import React from "react";
import { SafeAreaView, ScrollView, Text, View, TextInput, Button } from "react-native";
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
});

export default function Basic_roi_calc() {
  return (
    <Formik
      initialValues={{ monthly_rental: "", monthly_mortgage: "", initial_deposit: "" }}
      validationSchema={ReviewBasicForm}
      onSubmit={(values, actions) => {
        // actions.resetForm();
        // console.log(typeof values.monthly_mortgage);
        console.log(values);
      }}
    >
      {props => (
        <SafeAreaView style={globalstyles.container}>
          <ScrollView>
            <View style={globalstyles.main_row}>
              <View style={globalstyles.col}>
                <View style={globalstyles.result_container}>
                  <Text> Result </Text>
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
                {props.errors.monthly_rental && props.touched.monthly_rental ? <Text style={globalstyles.error_field}>{props.errors.monthly_rental}</Text> : null}


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
                {props.errors.monthly_mortgage && props.touched.monthly_mortgage ? <Text style={globalstyles.error_field}>{props.errors.monthly_mortgage}</Text> : null}


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
                {props.errors.initial_deposit && props.touched.initial_deposit ? <Text style={globalstyles.error_field}>{props.errors.initial_deposit}</Text> : null}

                <Button title="Submit" onPress={props.handleSubmit} />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </Formik>
  );
}