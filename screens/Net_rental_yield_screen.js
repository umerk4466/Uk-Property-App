import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { Button } from "react-native-elements";
// input field for money
import { TextInputMask } from "react-native-masked-text";
// import global styles
import { globalstyles } from "../styles/global_styles";
// import global components
import { ResultBox } from "./global_components";
// import form and form validator(formik, yup) library
import * as yup from "yup";
import { Formik } from "formik";

// define varibale for storing all the common validation errors
const yup_number = yup
  .number("Value must be a number")
  .integer("Must be an integer")
  .typeError("Please enter value again");

// define formik form validator
const ReviewAdvanceForm = yup.object({
  purchase_price: yup_number.positive("Purchase price cannot be £0"),
  monthly_rent: yup_number,
  solicitor_fees: yup_number,
  survey_fees: yup_number,
  refurb_costs: yup_number,
  stamp_duty: yup_number,
  other_costs: yup_number,
  monthly_mortgage: yup_number,
  letting_agent_percentage: yup_number.required(
    "Please enter letting agent percentage or enter 0"
  ),
  insurance: yup_number,
  maintenance: yup_number,
  ground_rent: yup_number,
  service_charges: yup_number,
  void_period_percentage: yup_number.required(
    "Please enter void percentage or enter 0"
  )
});

export default function Net_rental_yield_screen() {
  return (
    <Formik
      initialValues={{
        purchase_price: 0,
        monthly_rent: 0,
        solicitor_fees: 0,
        survey_fees: 0,
        refurb_costs: 0,
        stamp_duty: 0,
        other_costs: 0,
        monthly_mortgage: 0,
        letting_agent_percentage: "",
        insurance: 0,
        maintenance: 0,
        ground_rent: 0,
        service_charges: 0,
        other_monthly_costs: 0,
        void_period_percentage: "",
        final_result: 0
      }}
      validationSchema={ReviewAdvanceForm}
      enableReinitialize={true}
      onSubmit={(values, actions) => {
        // calculations
        // get monthly running cost of letting agent and void period
        let monthly_percentage_cost =
          (values.monthly_rent *
            (parseInt(values.letting_agent_percentage) +
              parseInt(values.void_period_percentage))) /
          100;

        // total montly running cost
        let total_monthly_running_costs =
          values.monthly_mortgage +
          values.insurance +
          values.maintenance +
          values.ground_rent +
          values.service_charges +
          values.other_monthly_costs +
          monthly_percentage_cost;

        // total puchase costs
        let total_purchase_costs =
          values.solicitor_fees +
          values.survey_fees +
          values.refurb_costs +
          values.stamp_duty +
          values.other_costs;

        let final_net_yield =
          (((values.monthly_rent - total_monthly_running_costs) * 12) /
            (values.purchase_price + total_purchase_costs)) *
          100;
        // calculate and set final result value
        actions.setFieldValue("final_result", final_net_yield.toFixed(2));
      }}
    >
      {props => (
        <SafeAreaView style={globalstyles.container}>
          <ScrollView>
            <View style={globalstyles.main_row}>
              <View style={globalstyles.col}>
                <ResultBox
                  title="Annual Net Yield"
                  result={props.values.final_result}
                  sign="%"
                />
              </View>
              <View style={globalstyles.col}>
                <Text style={globalstyles.heading_text}>Property Details </Text>
                <View style={globalstyles.single_line_input_view}>
                  <Text style={globalstyles.signle_line_input_text}>
                    Investment (Deposit) :{" "}
                  </Text>
                  <TextInputMask
                    type={"money"}
                    options={{
                      precision: 0,
                      separator: ".",
                      delimiter: ",",
                      unit: "£",
                      suffixUnit: ""
                    }}
                    style={
                      props.errors.purchase_price &&
                      props.touched.purchase_price
                        ? globalstyles.input_error
                        : globalstyles.input
                    }
                    textAlign={"center"}
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
                  <Text style={globalstyles.input_error_text}>
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
                      suffixUnit: ""
                    }}
                    style={
                      props.errors.monthly_rent && props.touched.monthly_rent
                        ? globalstyles.input_error
                        : globalstyles.input
                    }
                    textAlign={"center"}
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
                  <Text style={globalstyles.input_error_text}>
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
                      suffixUnit: ""
                    }}
                    style={
                      props.errors.solicitor_fees &&
                      props.touched.solicitor_fees
                        ? globalstyles.input_error
                        : globalstyles.input
                    }
                    textAlign={"center"}
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
                  <Text style={globalstyles.input_error_text}>
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
                      suffixUnit: ""
                    }}
                    style={
                      props.errors.survey_fees && props.touched.survey_fees
                        ? globalstyles.input_error
                        : globalstyles.input
                    }
                    textAlign={"center"}
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
                  <Text style={globalstyles.input_error_text}>
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
                      suffixUnit: ""
                    }}
                    style={
                      props.errors.refurb_costs && props.touched.refurb_costs
                        ? globalstyles.input_error
                        : globalstyles.input
                    }
                    textAlign={"center"}
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
                  <Text style={globalstyles.input_error_text}>
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
                      suffixUnit: ""
                    }}
                    style={
                      props.errors.stamp_duty && props.touched.stamp_duty
                        ? globalstyles.input_error
                        : globalstyles.input
                    }
                    textAlign={"center"}
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
                  <Text style={globalstyles.input_error_text}>
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
                      suffixUnit: ""
                    }}
                    style={
                      props.errors.other_costs && props.touched.other_costs
                        ? globalstyles.input_error
                        : globalstyles.input
                    }
                    textAlign={"center"}
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
                  <Text style={globalstyles.input_error_text}>
                    {props.errors.other_costs}
                  </Text>
                ) : null}
                <Text style={globalstyles.heading_text}>
                  Running costs (monthly)
                </Text>
                <View style={globalstyles.single_line_input_view}>
                  <Text style={globalstyles.signle_line_input_text}>
                    Mortgage pcm :{" "}
                  </Text>
                  <TextInputMask
                    type={"money"}
                    options={{
                      precision: 0,
                      separator: ".",
                      delimiter: ",",
                      unit: "£",
                      suffixUnit: ""
                    }}
                    style={
                      props.errors.monthly_mortgage &&
                      props.touched.monthly_mortgage
                        ? globalstyles.input_error
                        : globalstyles.input
                    }
                    textAlign={"center"}
                    keyboardType={"decimal-pad"}
                    value={props.values.monthly_mortgage}
                    onBlur={props.handleBlur("monthly_mortgage")}
                    includeRawValueInChangeText={true}
                    onChangeText={(maskedText, rawText) => {
                      props.setFieldValue("monthly_mortgage", rawText);
                    }}
                  />
                </View>
                {props.errors.monthly_mortgage &&
                props.touched.monthly_mortgage ? (
                  <Text style={globalstyles.input_error_text}>
                    {props.errors.monthly_mortgage}
                  </Text>
                ) : null}
                <View style={globalstyles.single_line_input_view}>
                  <Text style={globalstyles.signle_line_input_text}>
                    Letting agent (%) :{" "}
                  </Text>
                  <TextInputMask
                    type={"custom"}
                    options={{
                      mask: "999"
                    }}
                    style={
                      props.errors.letting_agent_percentage &&
                      props.touched.letting_agent_percentage
                        ? globalstyles.input_error
                        : globalstyles.input
                    }
                    placeholder={"10%"}
                    textAlign={"center"}
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
                  <Text style={globalstyles.input_error_text}>
                    {props.errors.letting_agent_percentage}
                  </Text>
                ) : null}
                <View style={globalstyles.single_line_input_view}>
                  <Text style={globalstyles.signle_line_input_text}>
                    Insurance :{" "}
                  </Text>
                  <TextInputMask
                    type={"money"}
                    options={{
                      precision: 0,
                      separator: ".",
                      delimiter: ",",
                      unit: "£",
                      suffixUnit: ""
                    }}
                    style={
                      props.errors.insurance && props.touched.insurance
                        ? globalstyles.input_error
                        : globalstyles.input
                    }
                    textAlign={"center"}
                    keyboardType={"decimal-pad"}
                    value={props.values.insurance}
                    onBlur={props.handleBlur("insurance")}
                    includeRawValueInChangeText={true}
                    onChangeText={(maskedText, rawText) => {
                      props.setFieldValue("insurance", rawText);
                    }}
                  />
                </View>
                {props.errors.insurance && props.touched.insurance ? (
                  <Text style={globalstyles.input_error_text}>
                    {props.errors.insurance}
                  </Text>
                ) : null}
                <View style={globalstyles.single_line_input_view}>
                  <Text style={globalstyles.signle_line_input_text}>
                    Maintenance :{" "}
                  </Text>
                  <TextInputMask
                    type={"money"}
                    options={{
                      precision: 0,
                      separator: ".",
                      delimiter: ",",
                      unit: "£",
                      suffixUnit: ""
                    }}
                    style={
                      props.errors.maintenance && props.touched.maintenance
                        ? globalstyles.input_error
                        : globalstyles.input
                    }
                    textAlign={"center"}
                    keyboardType={"decimal-pad"}
                    value={props.values.maintenance}
                    onBlur={props.handleBlur("maintenance")}
                    includeRawValueInChangeText={true}
                    onChangeText={(maskedText, rawText) => {
                      props.setFieldValue("maintenance", rawText);
                    }}
                  />
                </View>
                {props.errors.maintenance && props.touched.maintenance ? (
                  <Text style={globalstyles.input_error_text}>
                    {props.errors.maintenance}
                  </Text>
                ) : null}
                <View style={globalstyles.single_line_input_view}>
                  <Text style={globalstyles.signle_line_input_text}>
                    Ground rent :{" "}
                  </Text>
                  <TextInputMask
                    type={"money"}
                    options={{
                      precision: 0,
                      separator: ".",
                      delimiter: ",",
                      unit: "£",
                      suffixUnit: ""
                    }}
                    style={
                      props.errors.ground_rent && props.touched.ground_rent
                        ? globalstyles.input_error
                        : globalstyles.input
                    }
                    textAlign={"center"}
                    keyboardType={"decimal-pad"}
                    value={props.values.ground_rent}
                    onBlur={props.handleBlur("ground_rent")}
                    includeRawValueInChangeText={true}
                    onChangeText={(maskedText, rawText) => {
                      props.setFieldValue("ground_rent", rawText);
                    }}
                  />
                </View>
                {props.errors.ground_rent && props.touched.ground_rent ? (
                  <Text style={globalstyles.input_error_text}>
                    {props.errors.ground_rent}
                  </Text>
                ) : null}
                <View style={globalstyles.single_line_input_view}>
                  <Text style={globalstyles.signle_line_input_text}>
                    Service charges :{" "}
                  </Text>
                  <TextInputMask
                    type={"money"}
                    options={{
                      precision: 0,
                      separator: ".",
                      delimiter: ",",
                      unit: "£",
                      suffixUnit: ""
                    }}
                    style={
                      props.errors.service_charges &&
                      props.touched.service_charges
                        ? globalstyles.input_error
                        : globalstyles.input
                    }
                    textAlign={"center"}
                    keyboardType={"decimal-pad"}
                    value={props.values.service_charges}
                    onBlur={props.handleBlur("service_charges")}
                    includeRawValueInChangeText={true}
                    onChangeText={(maskedText, rawText) => {
                      props.setFieldValue("service_charges", rawText);
                    }}
                  />
                </View>
                {props.errors.service_charges &&
                props.touched.service_charges ? (
                  <Text style={globalstyles.input_error_text}>
                    {props.errors.service_charges}
                  </Text>
                ) : null}
                <View style={globalstyles.single_line_input_view}>
                  <Text style={globalstyles.signle_line_input_text}>
                    Other monthly costs :{" "}
                  </Text>
                  <TextInputMask
                    type={"money"}
                    options={{
                      precision: 0,
                      separator: ".",
                      delimiter: ",",
                      unit: "£",
                      suffixUnit: ""
                    }}
                    style={
                      props.errors.other_monthly_costs &&
                      props.touched.other_monthly_costs
                        ? globalstyles.input_error
                        : globalstyles.input
                    }
                    textAlign={"center"}
                    keyboardType={"decimal-pad"}
                    value={props.values.other_monthly_costs}
                    onBlur={props.handleBlur("other_monthly_costs")}
                    includeRawValueInChangeText={true}
                    onChangeText={(maskedText, rawText) => {
                      props.setFieldValue("other_monthly_costs", rawText);
                    }}
                  />
                </View>
                {props.errors.other_monthly_costs &&
                props.touched.other_monthly_costs ? (
                  <Text style={globalstyles.input_error_text}>
                    {props.errors.other_monthly_costs}
                  </Text>
                ) : null}
                <View style={globalstyles.single_line_input_view}>
                  <Text style={globalstyles.signle_line_input_text}>
                    Void period (%) :{" "}
                  </Text>
                  <TextInputMask
                    type={"custom"}
                    options={{
                      mask: "999"
                    }}
                    style={
                      props.errors.void_period_percentage &&
                      props.touched.void_period_percentage
                        ? globalstyles.input_error
                        : globalstyles.input
                    }
                    textAlign={"center"}
                    placeholder={"8%"}
                    keyboardType={"decimal-pad"}
                    value={props.values.void_period_percentage}
                    onBlur={props.handleBlur("void_period_percentage")}
                    includeRawValueInChangeText={true}
                    onChangeText={(maskedText, rawText) => {
                      props.setFieldValue("void_period_percentage", rawText);
                    }}
                  />
                </View>
                {props.errors.void_period_percentage &&
                props.touched.void_period_percentage ? (
                  <Text style={globalstyles.input_error_text}>
                    {props.errors.void_period_percentage}
                  </Text>
                ) : null}
              </View>

              <View style={globalstyles.col}>
                <View style={globalstyles.buttons_container}>
                  <Button title="Calculate ROI" onPress={props.handleSubmit} />
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
