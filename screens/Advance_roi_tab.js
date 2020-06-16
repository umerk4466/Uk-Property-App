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
      initialValues={{
        purchase_price: "",
        monthly_rent: "",
        solicitor_fees: "",
        survey_fees: "",
        refurb_costs: "",
        stamp_duty: "",
        other_costs: "",
        letting_agent_percentage: "",
        insurance: "",
        maintenance: "",
        ground_rent: "",
        service_charges: "",
        void_period_percentage: "",
        final_result: 0,
      }}
      validationSchema={ReviewAdvanceForm}
      enableReinitialize={true}
      onSubmit={(values, actions) => {}}
    >
      {(props) => (
        <SafeAreaView style={globalstyles.container}>
          <ScrollView>
            <View style={globalstyles.main_row}>
              <View style={globalstyles.col}>
                <View style={globalstyles.result_container}>
                  <Text style={{ fontSize: 16 }}> Return on investment </Text>
                  <Text style={{ fontSize: 17 }}>
                    {props.values.final_result}%
                  </Text>
                </View>
              </View>
              <View style={globalstyles.col}>
                <Text style={globalstyles.heading_text}>Property Details </Text>

                <View style={globalstyles.single_line_input_view}>
                  <Text style={globalstyles.signle_line_input_text}>
                    Purchase price :{" "}
                  </Text>
                  <TextInputMask
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
                    value={props.values.purchase_price}
                    onBlur={props.handleBlur("purchase_price")}
                    includeRawValueInChangeText={true}
                    onChangeText={(maskedText, rawText) => {
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
                  <Text style={globalstyles.signle_line_input_text}>
                    Monthly rent :{" "}
                  </Text>
                  <TextInputMask
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
                    value={props.values.monthly_rent}
                    onBlur={props.handleBlur("monthly_rent")}
                    includeRawValueInChangeText={true}
                    onChangeText={(maskedText, rawText) => {
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

                <View style={globalstyles.single_line_input_view}>
                  <Text style={globalstyles.signle_line_input_text}>
                    Solicitor fees :{" "}
                  </Text>
                  <TextInputMask
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
                    value={props.values.solicitor_fees}
                    onBlur={props.handleBlur("solicitor_fees")}
                    includeRawValueInChangeText={true}
                    onChangeText={(maskedText, rawText) => {
                      props.setFieldValue("solicitor_fees", rawText);
                    }}
                  />
                </View>
                {props.errors.solicitor_fees && props.touched.solicitor_fees ? (
                  <Text style={globalstyles.error_field}>
                    {props.errors.solicitor_fees}
                  </Text>
                ) : null}

                <View style={globalstyles.single_line_input_view}>
                  <Text style={globalstyles.signle_line_input_text}>
                    Survey fees :{" "}
                  </Text>
                  <TextInputMask
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
                    value={props.values.survey_fees}
                    onBlur={props.handleBlur("survey_fees")}
                    includeRawValueInChangeText={true}
                    onChangeText={(maskedText, rawText) => {
                      props.setFieldValue("survey_fees", rawText);
                    }}
                  />
                </View>
                {props.errors.survey_fees && props.touched.survey_fees ? (
                  <Text style={globalstyles.error_field}>
                    {props.errors.survey_fees}
                  </Text>
                ) : null}

                <View style={globalstyles.single_line_input_view}>
                  <Text style={globalstyles.signle_line_input_text}>
                    Refurb costs :{" "}
                  </Text>
                  <TextInputMask
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
                    value={props.values.refurb_costs}
                    onBlur={props.handleBlur("refurb_costs")}
                    includeRawValueInChangeText={true}
                    onChangeText={(maskedText, rawText) => {
                      props.setFieldValue("refurb_costs", rawText);
                    }}
                  />
                </View>
                {props.errors.refurb_costs && props.touched.refurb_costs ? (
                  <Text style={globalstyles.error_field}>
                    {props.errors.refurb_costs}
                  </Text>
                ) : null}

                <View style={globalstyles.single_line_input_view}>
                  <Text style={globalstyles.signle_line_input_text}>
                    Stamp duty :{" "}
                  </Text>
                  <TextInputMask
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
                    value={props.values.stamp_duty}
                    onBlur={props.handleBlur("stamp_duty")}
                    includeRawValueInChangeText={true}
                    onChangeText={(maskedText, rawText) => {
                      props.setFieldValue("stamp_duty", rawText);
                    }}
                  />
                </View>
                {props.errors.stamp_duty && props.touched.stamp_duty ? (
                  <Text style={globalstyles.error_field}>
                    {props.errors.stamp_duty}
                  </Text>
                ) : null}

                <View style={globalstyles.single_line_input_view}>
                  <Text style={globalstyles.signle_line_input_text}>
                    Other costs :{" "}
                  </Text>
                  <TextInputMask
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
                    value={props.values.other_costs}
                    onBlur={props.handleBlur("other_costs")}
                    includeRawValueInChangeText={true}
                    onChangeText={(maskedText, rawText) => {
                      props.setFieldValue("other_costs", rawText);
                    }}
                  />
                </View>
                {props.errors.other_costs && props.touched.other_costs ? (
                  <Text style={globalstyles.error_field}>
                    {props.errors.other_costs}
                  </Text>
                ) : null}

                <Text style={globalstyles.heading_text}>
                  Running costs (monthly)
                </Text>

                <View style={globalstyles.single_line_input_view}>
                  <Text style={globalstyles.signle_line_input_text}>
                    Letting agent (%) :{" "}
                  </Text>
                  <TextInputMask
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
                    value={props.values.letting_agent_percentage}
                    onBlur={props.handleBlur("letting_agent_percentage")}
                    includeRawValueInChangeText={true}
                    onChangeText={(maskedText, rawText) => {
                      props.setFieldValue("letting_agent_percentage", rawText);
                    }}
                  />
                </View>
                {props.errors.letting_agent_percentage &&
                props.touched.letting_agent_percentage ? (
                  <Text style={globalstyles.error_field}>
                    {props.errors.letting_agent_percentage}
                  </Text>
                ) : null}
              </View>

              <View style={globalstyles.col}>
                <View style={globalstyles.buttons_container}>
                  <Button title="Calculate ROI" onPress={props.handleSubmit} />
                  <Button title="Reset" onPress={props.resetForm} />
                </View>
                <Text style={globalstyles.calculator_explanation_text}>
                  ROI (Return on Investment) measures the gain or loss generated
                  on an investment relative to the amount of money invested.
                </Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </Formik>
  );
}
