import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
// import global styles
import { globalstyles } from "../styles/global_styles";
// import custom components
import {
  ResultBox,
  CustomTextInputMask,
  HeadingText,
  CommonErrorMessages,
  CalculateAndResetButtons,
} from "../components/custom-components";
// import form and form validator(formik, yup) library
import * as yup from "yup";
import { Formik } from "formik";

// yub Input Fields Validator schema variable
const ReviewBasicForm = yup.object({
  monthly_rental: CommonErrorMessages,
  monthly_mortgage: CommonErrorMessages,
  initial_deposit: CommonErrorMessages,
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
        // get all the filed data and calculate return on investment
        const annual_cash_flow =
          values.monthly_rental * 12 - values.monthly_mortgage * 12;
        const annual_roi = (annual_cash_flow / values.initial_deposit) * 100;
        // update the "final_result field"
        actions.setFieldValue("final_result", annual_roi.toFixed(0));
      }}
    >
      {(props) => (
        <SafeAreaView style={globalstyles.SafeAreaViewContainer}>
          <ScrollView
            contentContainerStyle={globalstyles.ScrollViewContainer}
            keyboardShouldPersistTaps={"handled"}
            showsHorizontalScrollIndicator={false}
          >
            {/* ROI result box */}
            <ResultBox
              title="Return on investment"
              result={props.values.final_result}
              sign="% p.a"
            />
            {/* Property details container */}
            <HeadingText heading="Property Details" />
            <View style={globalstyles.WhiteContainer}>
              {/* Monthly rent field */}
              <CustomTextInputMask
                title={"Monthly rent of the property"}
                placeholder={"£500"}
                onBlur={props.handleBlur("monthly_rental")}
                value={props.values.monthly_rental}
                onChangeText={(maskedText, rawText) => {
                  props.setFieldValue("monthly_rental", rawText);
                }}
                error={props.errors.monthly_rental}
                touched={props.touched.monthly_rental}
              />
              {/* Monthy mortgage field */}
              <CustomTextInputMask
                title={"Monthly Mortgage payments"}
                placeholder={"£200"}
                onBlur={props.handleBlur("monthly_mortgage")}
                value={props.values.monthly_mortgage}
                onChangeText={(maskedText, rawText) => {
                  props.setFieldValue("monthly_mortgage", rawText);
                }}
                error={props.errors.monthly_mortgage}
                touched={props.touched.monthly_mortgage}
              />
              {/* Initial investment field */}
              <CustomTextInputMask
                title={"Initial investment (deposit)"}
                placeholder={"£10,000"}
                onBlur={props.handleBlur("initial_deposit")}
                value={props.values.initial_deposit}
                onChangeText={(maskedText, rawText) => {
                  props.setFieldValue("initial_deposit", rawText);
                }}
                error={props.errors.initial_deposit}
                touched={props.touched.initial_deposit}
              />
            </View>
            {/* Calculate and reset button */}
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
