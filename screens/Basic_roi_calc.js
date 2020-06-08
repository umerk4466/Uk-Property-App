import React from "react";
import { SafeAreaView, ScrollView, Text, View, TextInput, Button } from "react-native";
// input field for money
import { TextInputMask } from "react-native-masked-text";
// import global styles
import { globalstyles } from '../styles/global_styles'
// import form and form validator(formik, yup) library
import * as yup from 'yup'
import { Formik } from 'formik'


const ReviewBasicForm = yup.object({
  // monthly_rental: yup.number().required().positive().integer(),
  // monthly_mortgage: yup.number().positive().integer(),
  // initial_deposit: yup.number().required().positive().integer(),
  // monthly_rental: yup.string().required().test('is_valid', "Please enter the valid number", (val) => {
  //   return val === "£1"
  // }),


})


export default function Basic_roi_calc() {
  return (
    <Formik
      initialValues={{ monthly_rental: '', monthly_mortgage: '', initial_deposit: '', }}
      validationSchema={ReviewBasicForm}
      onSubmit={(values, actions) => {
        actions.resetForm()
        console.log(values)
      }}
    >
      {(props) => (
        <SafeAreaView style={globalstyles.container}>
          <ScrollView>
            <View style={globalstyles.main_row}>
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
                  includeRawValueInChangeText={true}
                  onChangeText={(maskedText, rawText) => {
                    // props.handleChange("monthly_rental")
                    props.setFieldValue('monthly_rental', rawText)
                  }}
                />

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
                  includeRawValueInChangeText={true}
                  onChangeText={(maskedText, rawText) => {
                    props.setFieldValue('monthly_mortgage', rawText)
                  }}
                />

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
                  includeRawValueInChangeText={true}
                  onChangeText={(maskedText, rawText) => {
                    props.setFieldValue('initial_deposit', rawText)
                  }}
                />

                <Button title="Submit" onPress={props.handleSubmit} />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      )
      }
    </Formik>
  )
}