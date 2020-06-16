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
  // monthly_rental: yup
  //   .number("Must be a number")
  //   .required("Monthly rent must be at least of £0")
  //   .integer("Must be integer")
  //   .typeError("Must enter a number again"),
  // monthly_mortgage: yup
  //   .number("Must be a number")
  //   .required("Mortgage must be at least of £0")
  //   .integer("Must be integer")
  //   .typeError("Must enter a number again"),
  // initial_deposit: yup
  //   .number("Must be a number")
  //   .required("Deposit must be at least of £0")
  //   .integer("Must be integer")
  //   .typeError("Must enter a number again")
  // // final_result: yup.number()
});

export default function Advance_roi_tab() {
  return (
    <Formik
      initialValues={{ purchase_price: "", monthly_rent: "", initial_deposit: "", final_result: 0 }}
      validationSchema={ReviewAdvanceForm}
      enableReinitialize={true}
      onSubmit={(values, actions) => {
        // // get all the filed data and add Basic return on investment formula
        // const annual_cash_flow =
        //   values.monthly_rental * 12 - values.monthly_mortgage * 12;
        // const annual_roi = (annual_cash_flow / values.initial_deposit) * 100;
        // // update the "final_result field"
        // actions.setFieldValue("final_result", annual_roi.toFixed(0));
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

                <Text style={globalstyles.heading_text}>Advance Calculator </Text>

                <View style={globalstyles.single_line_input_view}>
                <Text style={globalstyles.signle_line_input_text}>Purchase price :	 </Text>
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
                    value={props.values.purchase_price}
                    onBlur={props.handleBlur("purchase_price")}
                    includeRawValueInChangeText={true}
                    onChangeText={(maskedText, rawText) => {
                      // props.handleChange("purchase_price")
                      props.setFieldValue("purchase_price", rawText);
                    }}
                  />
                </View>
                {props.errors.purchase_price && props.touched.purchase_price ? (
                  <Text style={globalstyles.error_field}>
                    {props.errors.purchase_price}
                  </Text>
                ) : null}
                
                <View style={globalstyles.single_line_input_view}>
                <Text style={globalstyles.signle_line_input_text}>Monthly rent :	 </Text>
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
                    value={props.values.monthly_rent}
                    onBlur={props.handleBlur("monthly_rent")}
                    includeRawValueInChangeText={true}
                    onChangeText={(maskedText, rawText) => {
                      // props.handleChange("monthly_rent")
                      props.setFieldValue("monthly_rent", rawText);
                    }}
                  />
                </View>
                {props.errors.monthly_rent && props.touched.monthly_rent ? (
                  <Text style={globalstyles.error_field}>
                    {props.errors.monthly_rent}
                  </Text>
                ) : null}
                
                <Text style={globalstyles.heading_text}>Purchase Costs </Text>
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
